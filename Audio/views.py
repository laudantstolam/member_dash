from django.shortcuts import render
from .models import db_table  # 导入您的模型
from django.http import HttpRequest, HttpResponse
# Create your views here.
# Create your views here.
def audio(request):
    return render(request, "audio.html")


def load_data(request):
    # 从数据库加载数据
    data = db_table.find()
    return HttpResponse(data)
