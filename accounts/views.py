from django.shortcuts import render, redirect
from django.http import JsonResponse
from django.contrib.auth.models import User
from .models import UserDetail

# Create your views here.


def register(request):
    if request.method == "POST":
        username = request.POST.get('email')
        password = request.POST.get('password')
        gender = request.POST.get('gender')

        if User.objects.filter(username=username).exists():
            return JsonResponse({"exists": True})
        else:
            user = User.objects.create_user(username=username)
            user.set_password(password)
            user.save()
            user_detail = UserDetail(user=user, gender=gender)
            user_detail.save()
            # no need to return anything since we are using jquery
            # not recommended though as it couples the api
    return render(request, "accounts/registration.html", {})
