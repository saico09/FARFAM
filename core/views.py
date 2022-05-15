from django.http import HttpResponse
from django.shortcuts import render

def farmacia(request):
    return HttpResponse("Hola mundo")
    #return render(request, "farmacia.html")
