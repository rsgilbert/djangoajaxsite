from django.conf.urls import url
from django.contrib.auth import views as auth_views
from . import views

app_name = "accounts"

urlpatterns = [
    url(r'^register', views.register, name="register"),
    url(r'^login', auth_views.LoginView.as_view(template_name="accounts/login.html"), name='login'),
]