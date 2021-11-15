from rest_framework import serializers
from .models import *

class AutorSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model=Autor
        fields=['id', 'nombres', 'apellidos', 'fecha_nac', 'dni']


class LibroSerializer(serializers.HyperlinkedModelSerializer):
    #autores = AutorSerializer(read_only=True, many=True)

    autor_name = serializers.SerializerMethodField('getAutores')

    def getAutores(self, obj):
        return obj.autor.nombres

    class Meta:
        model=Libro
        fields=['id', 'nombre', 'tipo_libro', 'fecha_publicion', 'autor', 'autor_name']
