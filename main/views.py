from django.shortcuts import render, redirect
from .models import PortfolioList
from .serializers import PortfolioSerializer
from rest_framework import permissions
from rest_framework import viewsets
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
from parsed_data.models import BigData
import json


def index(request):
    portfolio=PortfolioList.objects.all()
    big=BigData.objects.all()
    # code= request.GET['code']
    # print('code = ' + str(code))


    context={
        'portfolio':portfolio,
        'big':big,
    }
    return render(request, 'index.html',context)


def about(request):
    return render(request, 'about.html')



class PortfolioView(viewsets.ModelViewSet):
    queryset = PortfolioList.objects.all()
    serializer_class = PortfolioSerializer
    permission_classes = (permissions.AllowAny,)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)
