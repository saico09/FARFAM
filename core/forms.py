from .models import medicamento
from django.forms import ModelForm, fields
from django import forms


class MedicamentoForm(ModelForm):

    class Meta:
        model=medicamento
        fields=['nombreMedi', 'precio','descripcion', 'FechaElabora', 'FechaCaduc', 'stock', 'fabrica', 'contenido', 'gramos', 'caducado', 'motivoCaduc']