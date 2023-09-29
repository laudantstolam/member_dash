from django.shortcuts import render


# Create your views here.

#fun. to render homepage
def home(request):
    return render(request, "basic.html")