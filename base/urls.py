"""
this is my apppppp
"""
from django.contrib import admin
from django.urls import path
from . import views,serializers

urlpatterns = [
    path('',views.hello),
    path('show_users',views.show_users),
    path('login/',serializers.MyTokenObtainPairView.as_view()),
    path('register/',views.register)

    
]
