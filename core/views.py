from django.http import HttpResponse
from django.shortcuts import render,HttpResponse,redirect
from core.Carrito import Carrito

from django.conf import settings
from django.core.mail import EmailMultiAlternatives
from django.template.loader import get_template

from core.models import medicamento

from core.forms import MedicamentoForm

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
    datos = {

        'form1' : MedicamentoForm()

    }

    if request.method == 'POST':
        formulario = MedicamentoForm(request.POST)

        if formulario.is_valid():
            formulario.save()
            datos['mensaje']= 'Datos guardados exitosamente'
    return render (request,"agregar.html",datos)

def medicamentos(request):
    medicamentos=medicamento.objects.all()
    datos={ 
        'medicamento':medicamentos
    }
    return render(request,"medicamentos.html",datos)

def eliminar(request,id):
    publicaciones=medicamento.objects.get(id=id)

    publicaciones.delete()

    return redirect(to="Medicamentos")

def modificar(request,id):
    publicaciones=medicamento.objects.get(id=id)

    datos = {
        'form1': MedicamentoForm(instance=publicaciones)
    }

    if request.method== 'POST':
        formulario=MedicamentoForm(data=request.POST,instance=medicamento)
        if formulario.is_valid:
            formulario.save()
            datos['mensaje']="Datos modificados exitosamente"

    return render(request,'modificar.html',datos)

def login(request):



    
    return render(request,"login.html")


def send_mail(mail):
    context={'mail':mail}
    template=get_template('correo.html')
    content=template.render(context)

    email=EmailMultiAlternatives(
        'Un correo de prueba',
        'Farmacia FARFAM',
        settings.EMAIL_HOST_USER,
        [mail]
    )
    
    email.attach_alternative(content, 'text/html')
    email.send()

def farmacia(request):
    if request.method == "POST":
        mail =request.POST.get('mail')
        send_mail(mail)
    return render(request,'farmacia.html',{})