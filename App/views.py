from django.http import HttpResponse
from django.shortcuts import render, redirect

# Create your views here.
from App.models import Wheel, User, Showgoods


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
            request.session.set_expiry(180)


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
    showgoods = Showgoods.objects.filter(goodsid=goodsid)


    data = {
        'showgoods':showgoods
    }

    return render(request, 'Goods-details.html', context=data)