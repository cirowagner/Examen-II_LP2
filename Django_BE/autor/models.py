from django.db import models

# Create your models here.

class Autor(models.Model):

    nombres=models.CharField(max_length=40)
    apellidos=models.CharField(max_length=40)
    fecha_nac=models.DateField()
    dni=models.CharField(max_length=40)
    created=models.DateTimeField(auto_now_add=True)
    updated=models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = ("Autor")
        verbose_name_plural = ("Autores")

    def _str_(self):
        return self.nombres