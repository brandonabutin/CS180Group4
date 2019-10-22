from django.urls import path
from . import views

urlpatterns = [
    path('api/home/', views.HomeListCreate.as_view()),
]
