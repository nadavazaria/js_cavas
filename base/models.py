from django.db import models
from django.contrib.auth.models import User


class Book(models.Model):
    id = models.BigAutoField
    name = models.CharField(max_length=50)
    desc = models.CharField(max_length=50,null=True,blank=True)
    author = models.DecimalField(max_digits=5,decimal_places=2)
    year_published=models.DateTimeField(auto_now_add=True)
    image = models.ImageField(null=True,blank=True,default='/placeholder.png')
    user =models.ForeignKey(User,on_delete=models.SET_NULL,null=True)
 
    def __str__(self):
           return self.desc

# Create your models here.
