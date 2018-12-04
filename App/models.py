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