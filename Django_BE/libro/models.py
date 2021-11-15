from django.db import models
from autor.models import Autor

# Create your models here.

TIPO_LIBRO=[
    ('Cientifico','Cientifico'),
    ('Literatura','Literatura'),
    ('Monografias','Monografias'),
    ('OTROS','OTROS'),
]

class Libro(models.Model):

    autor=models.ForeignKey("autor.Autor", on_delete=models.CASCADE)
    nombre=models.CharField(max_length=40)
    tipo_libro=models.CharField(max_length=20, choices=TIPO_LIBRO)
    fecha_publicion=models.DateField()
    created=models.DateTimeField(auto_now_add=True)
    updated=models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = ("Libro")
        verbose_name_plural = ("Libros")

    def _str_(self):
        return self.nombre