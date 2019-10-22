from django.db import models

class Home(models.Model):
    email = models.EmailField()
