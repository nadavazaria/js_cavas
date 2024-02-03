from django.shortcuts import render
from rest_framework.request import Request as res
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import api_view, permission_classes
from django.contrib.auth.models import User
from base.serializers import UserSerializer

# Create your views here.
api_view(["GET"])
def hello(req):
    return res("hello")


@api_view(['POST'])
def register(request):
    user = User.objects.create_user(
                username=request.data['username'],
                email=request.data['email'],
                password=request.data['password']
            )
    user.is_active = True
    user.is_staff = True
    user.save()
    return res("new user born")


api_view(["get"])
@permission_classes([IsAuthenticated])
def show_users(request):
    users = User.objects.all()
    serializer = UserSerializer(users, many=True)
    return res(serializer.data)

    
