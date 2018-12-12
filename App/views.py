import random
import time

from django.http import HttpResponse, JsonResponse
from django.shortcuts import render, redirect

# Create your views here.
from App.models import Wheel, User, Showgoods, Cart, Order, OrderGoods


def index(request):# 首页
    wheels = Wheel.objects.all()

    username = request.session.get('username')

    data = {
        'wheels':wheels,
        'username': username
    }

    return render(request,'index.html',context=data)


def register(request): # 注册
    if request.method == 'GET':
        return render(request, 'register.html')
    elif request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')
        # RPwd = request.POST.get('RPwd')
        try:
            user = User()
            user.username = username
            user.password = password
            # user.RPwd = RPwd
            user.save()

            request.session['username'] = username
            # request.session.set_expiry(180)


            return redirect('app:index')

        except Exception as e:
            return HttpResponse('注册失败' + e)


def login(request):  # 登录
    if request.method == 'GET':
        return render(request, 'login.html')
    elif request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')

        users = User.objects.filter(username=username, password=password)
        if users.exists():

            user = users.first()
            request.session['username'] = username
            # request.session.set_expiry(180)
            return redirect('app:index')
        else:
            return HttpResponse('用户名或密码错误')


def logout(request):
    response = redirect('app:index')
    del request.session['username']

    return response


def GoodsDetails(request,goodsid): # 商品详细信息展示页面
    username = request.session.get('username')
    showgoods = Showgoods.objects.filter(goodsid=goodsid)
    if username:
        carts = Cart.objects.all()

        data = {
            'showgoods': showgoods,
            'carts': carts,
        }

        return render(request, 'Goods-details.html', context=data)
    else:
        data = {
            'showgoods':showgoods
        }
        return render(request,'Goods-details.html',context=data)


def addcart(request):
    showgoodsid = request.GET.get('showgoodsid')
    # print(showgoodsid)
    username = request.session.get('username')

    responseData = {
        'msg':'添加购物车成功',
        'status': 1 # 1标识添加成功，0标识添加失败，-1标识未登录
    }

    if username:   # 登录 [直接操作模型]
        # print('shabi')
        # 获取用户
        user = User.objects.get(username=username)


        # 获取商品
        showgoods = Showgoods.objects.get(pk=showgoodsid)


        # 商品已经在购物车，只修改商品个数
        # 商品不存在购物车，新建对象（加入一条新的数据）
        carts = Cart.objects.filter(user=user).filter(showgoods=showgoods)
        if carts.exists():  # 修改数量
            cart = carts.first()
            cart.number = cart.number + 1
            cart.save()
            responseData['number'] = cart.number
        else:   # 添加一条新记录
            cart = Cart()
            cart.user = user
            cart.showgoods = showgoods
            cart.number = 1
            cart.save()

            responseData['number'] = cart.number

        return JsonResponse(responseData)






    else:   # 未登录 [跳转到登录页面]
        # 由于addcart这个是 用于 ajax操作， 所以这里是不能进行重定向!!
        # return redirect('axf:login')
        responseData['msg'] = '未登录，请登录后操作'
        responseData['status'] = -1
        return JsonResponse(responseData)

def subcart(request):
    # 获取数据
    username = request.session.get('username')
    showgoodsid = request.GET.get('showgoodsid')

    # 对应用户 和 商品
    user = User.objects.get(username=username)
    showgoods = Showgoods.objects.get(pk=showgoodsid)

    # 删减操作
    cart = Cart.objects.filter(user=user).filter(showgoods=showgoods).first()
    cart.number = cart.number - 1
    cart.save()

    responseData = {
        'msg': '购物车减操作成功',
        'status': 1,
        'number': cart.number
    }

    return JsonResponse(responseData)


def cart(request):
    username = request.session.get('username')
    if username:
        user = User.objects.get(username=username)
        carts = Cart.objects.filter(user=user).exclude(number=0)


        return render(request,'cart.html',context={'username': user.username, 'carts': carts})

    else:
        return redirect('app:login')



def changecartstatus(request):
    cartid = request.GET.get('cartid')
    cart = Cart.objects.get(pk=cartid)
    cart.isselect = not cart.isselect
    cart.save()

    responseData = {
        'msg': '选中状态改变',
        'status': 1,
        'isselect': cart.isselect
    }

    return JsonResponse(responseData)


def changecartselect(request):
    isselect = request.GET.get('isselect')
    if isselect == 'true':
        isselect = True
    else:
        isselect = False

    username = request.session.get('username')
    user = User.objects.get(username=username)
    carts = Cart.objects.filter(user=user)
    for cart in carts:
        cart.isselect = isselect
        cart.save()

    return JsonResponse({'msg':'反选操作成功', 'status':1})


def generateorder(request):
    username = request.session.get('username')
    user = User.objects.get(username=username)
    # 生成订单
    order = Order()
    order.user = user
    order.identifier = str(int(time.time())) + str(random.randrange(10000,100000))
    order.save()

    # 订单商品
    carts = Cart.objects.filter(user=user).filter(isselect=True)
    if carts.exists():
        for cart in carts:
            orderGoods = OrderGoods()
            orderGoods.order = order
            orderGoods.showgoods = cart.showgoods
            orderGoods.number = cart.number
            orderGoods.save()

            # 从购物车移除
            cart.delete()

        responseData = {
            'msg': '订单生成成功',
            'status': 1,
            'identifier': order.identifier
        }

        return JsonResponse(responseData)
    else:
        pass



def orderinfo(request, identifier):
    # 一个订单 对应 多个商品
    order = Order.objects.get(identifier=identifier)

    return render(request, 'orderinfo.html', context={'order':order})
