from django.db import models

# Create your models here.

class User(models.Model):
    username = models.CharField(max_length=40)
    password = models.CharField(max_length=256)
    # RPwd = models.CharField(max_length=256)

class Base(models.Model):
    img = models.CharField(max_length=100)
    trackid = models.CharField(max_length=10)

    class Meta:
        abstract = True

class Wheel(Base):
    class Meta:
        db_table = "app_wheel"


class Showgoods(models.Model):
    goodsid = models.CharField(max_length=50)
    img1 = models.CharField(max_length=100)
    img2 = models.CharField(max_length=100)
    title = models.CharField(max_length=50)
    detail = models.CharField(max_length=256)
    span1 = models.CharField(max_length=50)
    span2 = models.CharField(max_length=50)
    span3 = models.CharField(max_length=50)
    span4 = models.CharField(max_length=50)
    span5 = models.CharField(max_length=50)
    span6 = models.CharField(max_length=50)

    class Meta:
        db_table = "app_showgoods"

class Cart(models.Model):
    user = models.ForeignKey(User)

    showgoods = models.ForeignKey(Showgoods)

    number = models.IntegerField()

    isselect = models.BooleanField(default=True)

    class Meta:
        db_table = 'app_cart'





# 订单
# 一个用户 对应 多个订单
# 在从表这声明关系
class Order(models.Model):
    # 用户
    user = models.ForeignKey(User)
    # 创建时间
    createtime = models.DateTimeField(auto_now_add=True)
    # 状态
    # -1 过期
    # 1 未付款
    # 2 已付款，未发货
    # 3 已发货，快递
    # 4 已签收，未评价
    # 5 已评价
    # 6 退款....
    status = models.IntegerField(default=1)
    # 订单号
    identifier = models.CharField(max_length=256)


# 订单商品
# 一个订单 对应 多个商品
# 在从表中声明关系
class OrderGoods(models.Model):
    # 订单
    order = models.ForeignKey(Order)
    # 商品
    showgoods = models.ForeignKey(Showgoods)
    # 个数
    number = models.IntegerField(default=1)

    # 大小
    # 颜色
