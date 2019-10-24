from django.db import models

class Home(models.Model):
    name = models.CharField(max_length=100)
