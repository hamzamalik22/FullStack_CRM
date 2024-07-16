from django.shortcuts import render, get_object_or_404
from django.contrib.auth.models import User
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.response import Response
from rest_framework import status
from .serializers import *
from .models import *


# Routes View
@api_view(["GET"])
def getRoutes(request, format=None):
    routes = [
        {"POST": "/api/register"},
        {"POST": "/api/users/token/"},
        {"POST": "/api/users/token/refresh/"},
        {"POST & GET": "/api/agents"},
        {"POST,GET,PUT & DELETE": "/api/agents/id"},
        {"POST & GET": "/api/customers"},
        {"POST,GET,PUT & DELETE": "/api/customers/id"},
        {"POST & GET": "/api/orders"},
        {"POST,GET,PUT & DELETE": "/api/orders/id"},
    ]
    return Response({"Routes": routes})


# Register User View
@api_view(["POST"])
@permission_classes([AllowAny])
def registerUser(request):
    if request.method == "POST":
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# Agents View
@api_view(["GET", "POST"])  # HTTP methods
@permission_classes([IsAuthenticated])  # make the api protected
def theAgent(request, format=None):
    if request.method == "GET":  # Checking method
        Agents = Agent.objects.all()  # Getting all the data in variable
        serializer = AgentSerializer(Agents, many=True)  # serializing the data
        return Response({"Agents": serializer.data})
    elif request.method == "POST":  # Checking method
        serializer = AgentSerializer(data=request.data)  # Serialize the input data
        if serializer.is_valid():  # Checking if data input by user is valid
            serializer.save()  # save that user response to database.
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# Agents Details View
@api_view(["GET", "PUT", "POST", "DELETE"])  # HTTP methods
@permission_classes([IsAuthenticated])  # make the api protected
def AgentDetails(request, pk, format=None):
    try:
        Agent = Agent.objects.get(
            id=pk
        )  # Getting the single object to update or delete
    except Agent.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == "GET":  # Checking method
        serializer = AgentSerializer(Agent, many=False)  # Serializing the data
        return Response({"Agent": serializer.data})
    elif request.method == "PUT":  # Checking method
        serializer = AgentSerializer(
            Agent, data=request.data
        )  # get the old data, updating with new one
        if serializer.is_valid():  # Checking if data input by user is valid
            serializer.save()  # save that user response to database.
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == "DELETE":  # Checking method
        Agent.delete()  # Deleting the data
        return Response(status=status.HTTP_204_NO_CONTENT)


# Customers View
@api_view(["GET", "POST"])  # HTTP methods
@permission_classes([IsAuthenticated])  # make the api protected
def theCustomer(request, format=None):
    if request.method == "GET":  # Checking method
        Customers = Customer.objects.all()  # Getting all the data in variable
        serializer = CustomerSerializer(Customers, many=True)  # serializing the data
        return Response({"Customers": serializer.data})
    elif request.method == "POST":  # Checking method
        serializer = CustomerSerializer(data=request.data)  # Serialize the input data
        if serializer.is_valid():  # Checking if data input by user is valid
            serializer.save()  # save that user response to database.
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# Customer Details View
@api_view(["GET", "PUT", "POST", "DELETE"])  # HTTP methods
@permission_classes([IsAuthenticated])  # make the api protected
def CustomerDetails(request, pk, format=None):
    try:
        Customer = Customer.objects.get(
            id=pk
        )  # Getting the single object to update or delete
    except Customer.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == "GET":  # Checking method
        serializer = CustomerSerializer(Customer, many=False)  # Serializing the data
        return Response({"Customer": serializer.data})
    elif request.method == "PUT":  # Checking method
        serializer = CustomerSerializer(
            Customer, data=request.data
        )  # get the old data, updating with new one
        if serializer.is_valid():  # Checking if data input by user is valid
            serializer.save()  # save that user response to database.
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == "DELETE":  # Checking method
        Customer.delete()  # Deleting the data
        return Response(status=status.HTTP_204_NO_CONTENT)



# Orders View
@api_view(["GET", "POST"])  # HTTP methods
@permission_classes([IsAuthenticated])  # make the api protected
def theOrder(request, format=None):
    if request.method == "GET":  # Checking method
        Orders = Order.objects.all()  # Getting all the data in variable
        serializer = OrderSerializer(Orders, many=True)  # serializing the data
        return Response({"Orders": serializer.data})
    elif request.method == "POST":  # Checking method
        serializer = OrderSerializer(data=request.data)  # Serialize the input data
        if serializer.is_valid():  # Checking if data input by user is valid
            serializer.save()  # save that user response to database.
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# Order Details View
@api_view(["GET", "PUT", "POST", "DELETE"])  # HTTP methods
@permission_classes([IsAuthenticated])  # make the api protected
def OrderDetails(request, pk, format=None):
    try:
        Order = Order.objects.get(
            id=pk
        )  # Getting the single object to update or delete
    except Order.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == "GET":  # Checking method
        serializer = OrderSerializer(Order, many=False)  # Serializing the data
        return Response({"Order": serializer.data})
    elif request.method == "PUT":  # Checking method
        serializer = OrderSerializer(
            Order, data=request.data
        )  # get the old data, updating with new one
        if serializer.is_valid():  # Checking if data input by user is valid
            serializer.save()  # save that user response to database.
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == "DELETE":  # Checking method
        Order.delete()  # Deleting the data
        return Response(status=status.HTTP_204_NO_CONTENT)