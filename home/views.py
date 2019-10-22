from home.models import Home
from home.serializers import HomeSerializer
from rest_framework import generics

class HomeListCreate(generics.ListCreateAPIView):
    queryset = Home.objects.all()
    serializer_class = HomeSerializer
