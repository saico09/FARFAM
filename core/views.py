from django.http import HttpResponse
from django.shortcuts import render,HttpResponse,redirect

def farmacia(request):

    return render (request,"farmacia.html")
    #return render(request, "farmacia.html")
