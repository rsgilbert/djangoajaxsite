from django.shortcuts import render
from django.http import JsonResponse
# Create your views here.


def register(request):
    if request.method == "POST":
        print(request.POST)
        message ="success"
        return JsonResponse({"message": message})

    return render(request, "accounts/registration.html", {})
    