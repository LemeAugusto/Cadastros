from django.urls import path
from app_cadastros import views

urlpatterns = [
    # rota, view responsável e nome de referência
    # usuários.com
    path("", views.home, name='home')
]
