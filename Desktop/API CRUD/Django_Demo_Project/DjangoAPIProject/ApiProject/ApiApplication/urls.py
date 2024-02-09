

# from django.contrib import admin
# from django.urls import path

# from ApiApplication import views
# # from django.conf.urls import url

# urlpatterns = [

#     path("student/",views.studentapi.as_view()),
#     path("get/",views.studentapi.as_view()),
#     path("post/",views.studentapi.as_view()),
#     path("delete/",views.studentapi.as_view()),
   

# ]

# urls.py

from django.urls import path
from .views import ClientListCreateView, ClientRetrieveUpdateDestroyView, ProjectCreateView,ProjectListView
from .views import ProjectListCreate
from .views import ProjectList


urlpatterns = [
    # get all clients Retrieve info of a client along with projects assigned to its users
# Create a new client
    path('clients/', ClientListCreateView.as_view(), name='client-list-create'),
# Update info of a client and delete 
    path('clients/<int:pk>/', ClientRetrieveUpdateDestroyView.as_view(), name='client-retrieve-update-destroy'),
 # create a new project
    path('clients/<int:pk>/projects/', ProjectCreateView.as_view(), name='project-create'),  
    # 
    #  path('projects/', ProjectListView.as_view(), name='project-list'),
# Create a new project
     path('clients/<int:client_id>/projects/', ProjectListCreate.as_view(), name='project-list-create'),
    #  List of all projects assigned to the logged-in user
# GET /projects/
      path('projects/', ProjectList.as_view(), name='project-list'),
]
