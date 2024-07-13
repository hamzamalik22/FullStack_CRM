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
    path("records/", views.theRecord, name="theRecord"),
    path("records/<int:pk>", views.recordDetails, name="theRecord"),
]
urlpatterns = format_suffix_patterns(urlpatterns)
