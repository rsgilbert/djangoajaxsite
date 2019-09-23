# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render
from .forms import LocationsForm
from django.http import JsonResponse

# Create your views here.

# view function, sends POST response as JSON for use by javascript
def ajax(request):
    if request.method == 'GET':
        form = LocationsForm()
        return render(request, "ajaxapp/ajax.html", {"form": form})
        
    elif request.method == 'POST':
        name = request.POST.get('names')
        if name[0].lower() in ['a', 'e', 'i', 'o', 'u']:
            message="success"
        else:
            message ="failed"
        return JsonResponse({"message": message})