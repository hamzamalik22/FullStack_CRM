from django.shortcuts import render, get_object_or_404
from django.contrib.auth.models import User
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.response import Response
from rest_framework import status
from .serializers import *
from .models import *


# Create your views here
@api_view(["GET"])
def getRoutes(request, format=None):
    routes = [
        {"POST": "/api/register"},
        {"POST": "/api/users/token/"},
        {"POST": "/api/users/token/refresh/"},
        {"POST & GET": "/api/records"},
        {"POST,GET,PUT & DELETE": "/api/records/id"},
    ]
    return Response({"Routes": routes})


@api_view(["POST"])
@permission_classes([AllowAny])
def registerUser(request):
    if request.method == "POST":
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(["GET", "POST"])  # HTTP methods
@permission_classes([IsAuthenticated])  # make the api protected
def theRecord(request, format=None):
    if request.method == "GET":  # Checking method
        records = Record.objects.all()  # Getting all the data in variable
        serializer = RecordSerializer(records, many=True)  # serializing the data
        return Response({"Records": serializer.data})
    elif request.method == "POST":  # Checking method
        serializer = RecordSerializer(data=request.data)  # Serialize the input data
        if serializer.is_valid():  # Checking if data input by user is valid
            serializer.save()  # save that user response to database.
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(["GET", "PUT", "POST", "DELETE"])  # HTTP methods
@permission_classes([IsAuthenticated])  # make the api protected
def recordDetails(request, pk, format=None):
    try:
        record = Record.objects.get(id=pk)  # Getting the single object to update or delete
    except Record.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == "GET":  # Checking method
        serializer = RecordSerializer(record, many=False)  # Serializing the data
        return Response({"Department": serializer.data})
    elif request.method == "PUT":  # Checking method
        serializer = RecordSerializer(
            record, data=request.data
        )  # get the old data, updating with new one
        if serializer.is_valid():  # Checking if data input by user is valid
            serializer.save()  # save that user response to database.
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == "DELETE":  # Checking method
        record.delete()  # Deleting the data
        return Response(status=status.HTTP_204_NO_CONTENT)
