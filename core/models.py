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
    rutPaciente = models.ForeignKey(paciente, on_delete=models.CASCADE)
    PnomTutor = models.CharField(max_length=20, verbose_name="PNomTutor ",null=True)
    SnomTutor = models.CharField(max_length=20, verbose_name="SNomTutor ",null=True)
    apellPTutor = models.CharField(max_length=20, verbose_name="PApellTutor ",null=True)
    apellMTutor = models.CharField(max_length=20, verbose_name="SApellTutor ",null=True)

    def __str__(self) -> str:
        return self.PnomTutor

class CarnetPaciente(models.Model):
    rutPaciente = models.ForeignKey(paciente, on_delete=models.CASCADE)
    comuna = models.CharField(max_length=20, verbose_name="PNombre ",null=True)
    def __str__(self) -> str:
        return self.comuna

class retiroMedicamento(models.Model):
    #no lleva id para que se genere solo
    Fecha = models.DateField()
    rutPas = models.CharField(max_length=10, verbose_name="RutPas", null=True, primary_key=True)
    def __str__(self) -> str:
        return self.Fecha

class CarnetInscFamil(models.Model):
    rutPaciente = models.ForeignKey(paciente, on_delete=models.CASCADE)
    sector = models.CharField(max_length=40, verbose_name="sector", null=True)
    def __str__(self) -> str:
        return self.sector

class Usuario(models.Model):
    RutUsuario = models.CharField(max_length=3, verbose_name="IdUsuario", null=True, primary_key=True)
    PnombreUsuario = models.CharField(max_length= 20, verbose_name="PNomUsu", null=True)
    SnombreUsuario = models.CharField(max_length= 20, verbose_name="SNomUsu", null=True)
    APaternoUsuario = models.CharField(max_length= 20, verbose_name="ApUsu", null=True)
    AMaternoUsuario = models.CharField(max_length= 20, verbose_name="ApMUsu", null=True)
    correoUsuario = models.EmailField(max_length=30, verbose_name="CorreoUsuario", null=True)
    contrasenaUsuario = models.CharField(max_length=16, verbose_name="ContrasenaUsuario", null=True)
    def __str__(self) -> str:
        return self.PnombreUsuario

class TipoUsuario(models.Model):
    descripcion = models.CharField(max_length= 20, verbose_name="descrTipoUsu", null=True)
    def __str__(self) -> str:
        return self.descripcion

class medicamento(models.Model):
    nombreMedi=models.CharField(max_length=50, verbose_name="nomMedicamento", null=True)
    precio=models.CharField(max_length=6, verbose_name="precioMedic",null=True)
    descripcion = models.CharField(max_length=100, verbose_name="descMed", null=True)
    FechaElabora = models.DateField()
    FechaCaduc = models.DateField()
    stock = models.IntegerField(verbose_name="descMed", null=True)
    fabrica = models.CharField(max_length=50, verbose_name="nomMedicamento", null=True)
    contenido = models.CharField(max_length=100, verbose_name="Content", null=True)
    gramos = models.IntegerField(verbose_name="Gram", null=True)
    caducado = models.IntegerField(verbose_name="Caduc",null=True)
    motivoCaduc = models.CharField(max_length=100, verbose_name="MotCaduc", null=False)

    def __str__(self):
        return f'{self.nombreMedi} -> {self.precio}'


class reservar(models.Model):
    medicam = models.ForeignKey(medicamento, on_delete=models.CASCADE)
    dosis = models.CharField(max_length=50, verbose_name="DosisMedic", null=True)
    NumReservas = models.IntegerField(verbose_name="NumReserv", null=True) #cantidad de reservas
    Medico = models.ForeignKey(Usuario, on_delete=models.CASCADE)
    def __str__(self) -> str:
        return self.NumReservas

class preinscripcion(models.Model):
    Medico = models.ForeignKey(Usuario, on_delete=models.CASCADE)
    detalle = models.TextField(max_length=2000, verbose_name="Content", null=True)
    def __str__(self) -> str:
        return self.detalle


