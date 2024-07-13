from django.contrib import admin
from django.urls import path, include
from api.views import getRoutes

urlpatterns = [
    path("", getRoutes),
    path("admin/", admin.site.urls),
    path("api/", include("api.urls")),
    path("api-auth/", include("rest_framework.urls")),
]
