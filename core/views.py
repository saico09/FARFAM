from django.http import HttpResponse
from django.shortcuts import render,HttpResponse,redirect
from core.Carrito import Carrito

from core.models import medicamento

def farmacia(request):
    productos=medicamento.objects.all()
    return render (request,"farmacia.html", {'productos':productos})
    #return render(request, "farmacia.html")

def agregar_producto(request, producto_id):
    carrito=Carrito(request)
    producto=medicamento.objects.get(id=producto_id)
    carrito.agregar(producto)
    return redirect("farmacia:Farmacia")

def eliminar_producto(request, producto_id):
    carrito=Carrito(request)
    producto=medicamento.objects.get(id=producto_id)
    carrito.eliminar(producto)
    return redirect("farmacia:Farmacia")

def restar_producto(request, producto_id):
    carrito=Carrito(request)
    producto=medicamento.objects.get(id=producto_id)
    carrito.restar(producto)
    return redirect("farmacia:Farmacia")

def limpiar_producto(request):
    carrito=Carrito(request)
    carrito.limpiar()
    return redirect("farmacia:Farmacia")


def agregar(request):
    return render (request,"agregar.html")