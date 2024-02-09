# from django.shortcuts import render
# from rest_framework.views import APIView
# from rest_framework.response import Response
# from .models import *
# from .serializers import *

# # Create your views here.
# class studentapi(APIView):
#     serializer_class=studentSerializer
#     def get(self,request):
#         allstudent=student.objects.all().values()
#         return Response({"Message":"List of student", "student List":allstudent})

#     def post(self,request):
#         print('Request data is : ',request.data)
#         serializer_obj=studentSerializer(data=request.data)
#         if(serializer_obj.is_valid()):

#          student.objects.create(student_id=serializer_obj.data.get("student_id"),
#                             student_name=serializer_obj.data.get("student_name"),
#                             created_at=serializer_obj.data.get("created_at"),
#                             # updated_at=serializer_obj.data.get("updated_at"),
#                             # deleted_at=serializer_obj.data.get("deleted_at"),
#                             )

#         student1=student.objects.all().filter(student_id=request.data["student_id"]).values()
#         return Response({"Message":"New student Added!", "student":student1})
#     def delete(self,request):
#         print('Request data is : ',request.data)
#         serializer_obj=studentSerializer(data=request.data)
#         if(serializer_obj.is_valid()):

#          student.objects.delete(student_id=serializer_obj.data.get("student_id"),
#                             student_name=serializer_obj.data.get("student_name"),
#                             created_at=serializer_obj.data.get("created_at"),
#                             # updated_at=serializer_obj.data.get("updated_at"),
#                             # deleted_at=serializer_obj.data.get("deleted_at"),
#                             )

#         student1=student.objects.all().filter(student_id=request.data["student_id"]).values()
#         return Response({"Message":"New student Added!", "student":student1})    



    

    # views.py

from rest_framework import generics
from .models import Client, Project
from .serializers import ClientSerializer, ProjectSerializer

class ClientListCreateView(generics.ListCreateAPIView):
    queryset = Client.objects.all()
    serializer_class = ClientSerializer

class ClientRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Client.objects.all()
    serializer_class = ClientSerializer

class ProjectCreateView(generics.CreateAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer

class ProjectListView(generics.ListAPIView):
    serializer_class = ProjectSerializer

    def get_queryset(self):
        return Project.objects.filter(users=self.request.user)

class ProjectListCreate(generics.ListCreateAPIView):
    serializer_class = ProjectSerializer

    def get_queryset(self):
        client_id = self.kwargs['client_id']
        return Project.objects.filter(client_id=client_id)

class ProjectList(generics.ListAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer        