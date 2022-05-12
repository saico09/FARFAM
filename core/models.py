from django.db import models

# Create your models here.

class paciente(models.Model):
    rutPas = models.CharField(max_length=10, verbose_name="RutPas", null=True, primary_key=True)
    Pnombre = models.CharField(max_length=20, verbose_name="PNombre ",null=True)
    Snombre = models.CharField(max_length=20, verbose_name="SNombre ",null=True)
    apellidoP = models.CharField(max_length=20, verbose_name="ApellidoP ",null=True)
    apellidoM = models.CharField(max_length=20, verbose_name="ApellidoM ",null=True)

    def __str__(self) -> str:
        return self.Pnombre

class tutor(models.Model):
    rutPas = models.CharField(max_length=10, verbose_name="RutPas", null=True, primary_key=True)
    PnomTutor = models.CharField(max_length=20, verbose_name="PNomTutor ",null=True)
    SnomTutor = models.CharField(max_length=20, verbose_name="SNomTutor ",null=True)
    apellPTutor = models.CharField(max_length=20, verbose_name="PApellTutor ",null=True)
    apellMTutor = models.CharField(max_length=20, verbose_name="SApellTutor ",null=True)

    def __str__(self) -> str:
        return self.PnomTutor

class CarnetPaciente(models.Model):
    rutPas = models.CharField(max_length=10, verbose_name="RutPas", null=True, primary_key=True)
    comuna = models.CharField(max_length=20, verbose_name="PNombre ",null=True)

class retiroMedicamento(models.Model):
    #no lleva id para que se genere solo
    Fecha = models.DateField()
    rutPas = models.CharField(max_length=10, verbose_name="RutPas", null=True, primary_key=True)

class CarnetInscFamil(models.Model):
    sector = models.CharField(max)