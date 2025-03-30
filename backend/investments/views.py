from rest_framework import generics
from .models import Investment
from .serializers import InvestmentSerializer


class InvestmentListCreateView(generics.ListCreateAPIView):
    queryset = Investment.objects.all()
    serializer_class = InvestmentSerializer


class InvestmentDetailView(generics.RetrieveDestroyAPIView):
    queryset = Investment.objects.all()
    serializer_class = InvestmentSerializer
    lookup_field = 'id'  # assumes you use auto-generated id
