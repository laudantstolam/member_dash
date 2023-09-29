from django.contrib import admin
from DefaultApp import views as views1
from django.urls import include, path
from Sketch import views as sketchview

urlpatterns = [
    path('admin/', admin.site.urls),
    path('',views1.home, name="home"),
    path('sketch/', sketchview.sketch, name="sketch"),
]
