from django.contrib import admin
from django.urls import path,include
from .views import CompanyViewSet,EmployeeViewSet,ItemCreateView,UserViewSet,LoginViewSet,LogoutViewSet,BidViewSet
from rest_framework import routers

router = routers.DefaultRouter()
router.register(r'companies', CompanyViewSet)
router.register(r'employees', EmployeeViewSet)
# router.register(r'images',ImageViewSet)
router.register(r'items',ItemCreateView)
router.register(r'register',UserViewSet, basename='register')
router.register(r'login',LoginViewSet, basename='login')
router.register(r'logout',LogoutViewSet, basename='logout')
router.register(r'bids',BidViewSet)



urlpatterns = [
    path('',include(router.urls)),
]