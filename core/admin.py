from django.contrib import admin

from .models import *

admin.site.register(medicamento)
admin.site.register(TipoUsuario)

admin.site.register(Usuario)
admin.site.register(paciente)

# Register your models here.
