from django.shortcuts import render
from rest_framework import viewsets
from .serializers import LibroSerializer, AutorSerializer
from .models import Libro, Autor

# Create your views here.

class LibroViewSet(viewsets.ModelViewSet):
	queryset=Libro.objects.all()
	serializer_class=LibroSerializer

class AutorViewSet(viewsets.ModelViewSet):
	queryset=Autor.objects.all()
	serializer_class=AutorSerializer