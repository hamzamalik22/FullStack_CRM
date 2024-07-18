from django.shortcuts import render, get_object_or_404
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth.models import User
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.response import Response
from rest_framework import status
from .serializers import *
from .models import *

from django.contrib.auth import update_session_auth_hash
from .serializers import PasswordUpdateSerializer


# Routes View
@api_view(["GET"])
def getRoutes(request, format=None):
    routes = [
        {"POST": "/api/register/"},
        {"POST": "/api/users/token/"},
        {"POST": "/api/users/token/refresh/"},
        {"POST & GET": "/api/agents"},
        {"POST,GET,PUT & DELETE": "/api/agents/id/"},
        {"POST & GET": "/api/customers/"},
        {"POST,GET,PUT & DELETE": "/api/customers/id/"},
        {"POST & GET": "/api/orders/"},
        {"POST,GET,PUT & DELETE": "/api/orders/id/"},
        {"GET": "/api/agent/role/"},
        {"POST": "/api/update-password/"},
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
        agents = Agent.objects.all()  # Getting all the data in variable
        serializer = AgentSerializer(agents, many=True)  # serializing the data
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
        agent = Agent.objects.get(
            id=pk
        )  # Getting the single object to update or delete
    except Agent.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == "GET":  # Checking method
        serializer = AgentSerializer(agent, many=False)  # Serializing the data
        return Response({"Agent": serializer.data})
    elif request.method == "PUT":  # Checking method
        serializer = AgentSerializer(
            agent, data=request.data
        )  # get the old data, updating with new one
        if serializer.is_valid():  # Checking if data input by user is valid
            serializer.save()  # save that user response to database.
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == "DELETE":  # Checking method
        agent.delete()  # Deleting the data
        return Response(status=status.HTTP_204_NO_CONTENT)


# Customers View
@api_view(["GET", "POST"])  # HTTP methods
@permission_classes([IsAuthenticated])  # make the api protected
def theCustomer(request, format=None):
    if request.method == "GET":  # Checking method
        customers = Customer.objects.all()  # Getting all the data in variable
        serializer = CustomerSerializer(customers, many=True)  # serializing the data
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
    print(f"Received {request.method} request for customer with ID: {pk}")
    try:
        customer = Customer.objects.get(
            id=pk
        )  # Getting the single object to update or delete
    except Customer.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == "GET":  # Checking method
        serializer = CustomerSerializer(customer, many=False)  # Serializing the data
        return Response({"Customer": serializer.data})
    elif request.method == "PUT":  # Checking method
        serializer = CustomerSerializer(
            customer, data=request.data
        )  # get the old data, updating with new one
        if serializer.is_valid():  # Checking if data input by user is valid
            serializer.save()  # save that user response to database.
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == "DELETE":  # Checking method
        customer.delete()  # Deleting the data
        return Response(status=status.HTTP_204_NO_CONTENT)


# Orders View
@api_view(["GET", "POST"])  # HTTP methods
@permission_classes([IsAuthenticated])  # make the api protected
def theOrder(request, format=None):
    if request.method == "GET":  # Checking method
        orders = Order.objects.all()  # Getting all the data in variable
        serializer = OrderSerializer(orders, many=True)  # serializing the data
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
        order = Order.objects.get(
            id=pk
        )  # Getting the single object to update or delete
    except Order.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == "GET":  # Checking method
        serializer = OrderSerializer(order, many=False)  # Serializing the data
        return Response({"Order": serializer.data})
    elif request.method == "PUT":  # Checking method
        serializer = OrderSerializer(
            order, data=request.data
        )  # get the old data, updating with new one
        if serializer.is_valid():  # Checking if data input by user is valid
            serializer.save()  # save that user response to database.
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == "DELETE":  # Checking method
        order.delete()  # Deleting the data
        return Response(status=status.HTTP_204_NO_CONTENT)


@api_view(["GET"])
@permission_classes([IsAuthenticated])
def get_user_role(request):
    user = request.user
    try:
        agent = Agent.objects.get(user=user)
        serializer = AgentSerializer(agent, many=False)

        return Response({"role": serializer.data})
    except Agent.DoesNotExist:
        return Response({"role": "User"})


@api_view(["POST"])
@permission_classes([IsAuthenticated])
def update_password(request):
    serializer = PasswordUpdateSerializer(data=request.data)
    if serializer.is_valid():
        user = request.user
        current_password = serializer.validated_data["current_password"]
        new_password = serializer.validated_data["new_password"]
        confirm_new_password = serializer.validated_data["confirm_new_password"]

        if not user.check_password(current_password):
            return Response(
                {"error": "Current password is incorrect"},
                status=status.HTTP_400_BAD_REQUEST,
            )

        if new_password != confirm_new_password:
            return Response(
                {"error": "New passwords do not match"},
                status=status.HTTP_400_BAD_REQUEST,
            )

        user.set_password(new_password)
        user.save()
        update_session_auth_hash(
            request, user
        )  # Keep the user logged in after password change
        return Response({"success": "Password updated successfully"})

    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
