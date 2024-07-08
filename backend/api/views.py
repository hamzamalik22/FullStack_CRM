from django.shortcuts import render, get_object_or_404
from django.contrib.auth.models import User
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.response import Response
from rest_framework import status
from .serializers import UserSerializer

# Create your views here.


@api_view(["GET"])
def getRoutes(request, format=None):
    routes = [
        {"POST": "/api/users"},
        {"POST": "/api/users/token/"},
        {"POST": "/api/users/token/refresh/"},
    ]
    return Response({"Routes": routes})


@api_view(["POST"])
@permission_classes([AllowAny])
def createUser(request):
    if request.method == "POST":
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

