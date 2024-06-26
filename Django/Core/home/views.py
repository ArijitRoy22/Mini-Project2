from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def home(request):
    return render(request, "home/index.html")

def Store(request):
    return render(request, "home/Store.html")

def setting(request):
    return render(request, "home/setting.html")

def Sell(request):
    return render(request, 'home/Sell.html')
    
def saved(request):
    return render(request, "home/saved.html")

def notification(request):
    return render(request, "home/notification.html")