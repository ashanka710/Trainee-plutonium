# from django.db import models

# # Create your models here.
# class student(models.Model):
#     student_id=models.IntegerField(primary_key=True)
#     student_name=models.CharField(max_length=200)
#     created_at=models.DateTimeField()
#     # updated_at=models.DateTimeField()
#     # deleted_at=models.DateTimeField()
    
# models.py

# from django.db import models
# from django.contrib.auth.models import User

# class Client(models.Model):
#     client_name = models.CharField(max_length=255)
#     created_at = models.DateTimeField(auto_now_add=True)
#     created_by = models.ForeignKey(User, on_delete=models.CASCADE)

# class Project(models.Model):
#     project_name = models.CharField(max_length=255)
#     client = models.ForeignKey(Client, on_delete=models.CASCADE)
#     users = models.ManyToManyField(User)
#     created_at = models.DateTimeField(auto_now_add=True)
#     created_by = models.ForeignKey(User, on_delete=models.CASCADE, related_name='created_by')

# # models.py

from django.db import models
from django.contrib.auth.models import User

class Client(models.Model):
    id = models.BigAutoField(primary_key=True)
    client_name = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    created_by = models.ForeignKey(User, on_delete=models.CASCADE)
    def __str__(self):
        return self.client_name
        

class Project(models.Model):
    id = models.BigAutoField(primary_key=True)
    project_name = models.CharField(max_length=255)
    client = models.ForeignKey(Client, on_delete=models.CASCADE)
    users = models.ManyToManyField(User,related_name='projects')
    created_at = models.DateTimeField(auto_now_add=True)
    created_by = models.ForeignKey(User, on_delete=models.CASCADE, related_name='created_by')
    def __str__(self):
        return self.project_name
       