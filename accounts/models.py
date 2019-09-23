from django.db import models
from django.contrib.auth.models import User
# Create your models here.

class UserDetail(models.Model):
    user = models.ForeignKey(on_delete=models.CASCADE, to=User)
    gender = models.CharField(max_length=10)