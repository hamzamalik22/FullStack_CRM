from django.urls import path, include
from . import views
from rest_framework.urlpatterns import format_suffix_patterns

from rest_framework_simplejwt.views import (  # this one
    TokenObtainPairView,
    TokenRefreshView,
)


urlpatterns = [
    path("users/token/", TokenObtainPairView.as_view(), name="token_obtain_pair"),
    path("users/token/refresh/", TokenRefreshView.as_view(), name="token_refresh"),
    path("", views.getRoutes, name="getRoutes"),
    path("register/", views.registerUser, name="createUser"),
    path("agents/", views.theAgent, name="theAgents"),
    path("agents/<int:pk>", views.AgentDetails, name="theAgent"),
    path("customers/", views.theCustomer, name="theCustomer"),
    path("customers/<int:pk>", views.CustomerDetails, name="theCustomer"),
    path("orders/", views.theOrder, name="theOrder"),
    path("orders/<int:pk>", views.OrderDetails, name="theOrder"),
    path('agent/role/', views.get_user_role, name='get_user_role'),
]
urlpatterns = format_suffix_patterns(urlpatterns)
