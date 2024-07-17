from django.db import models
from django.contrib.auth.models import User


# Create your models here.
class Agent(models.Model):
    ROLE = (
        ("Manager", "Manager"),
        ("Assistant Manager", "Assistant Manager"),
        ("Staff Member", "Staff Member"),
    )
    user = models.OneToOneField(User, null=True, blank=True, on_delete=models.CASCADE)
    role = models.CharField(max_length=200, null=True, choices=ROLE)
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    email = models.CharField(max_length=255)
    phone = models.CharField(max_length=20)
    city = models.CharField(max_length=255)
    country = models.CharField(max_length=125)
    creation_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.first_name + "   " + self.last_name


class Customer(models.Model):
    name = models.CharField(max_length=200, null=True)
    email = models.CharField(max_length=200, null=True)
    city = models.CharField(max_length=200, null=True)
    country = models.CharField(max_length=200, null=True)
    phone = models.CharField(max_length=200, null=True)
    date_created = models.DateTimeField(auto_now_add=True, null=True)

    def __str__(self):
        return self.name


class Order(models.Model):
    STATUS = (
        ("Pending", "Pending"),
        ("Out for delivery", "Out for delivery"),
        ("Delivered", "Delivered"),
    )
    customer = models.ForeignKey(Customer, null=True, on_delete=models.SET_NULL)
    status = models.CharField(max_length=200, null=True, choices=STATUS)
    total_Amount = models.IntegerField(null=True)
    date_created = models.DateTimeField(auto_now_add=True, null=True)

        
