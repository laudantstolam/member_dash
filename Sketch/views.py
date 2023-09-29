from django.shortcuts import render

# Create your views here.
def sketch(request):
    return render(request, "sketch.html")
