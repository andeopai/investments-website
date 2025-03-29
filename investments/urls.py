from django.urls import path
from .views import InvestmentListCreateView

urlpatterns = [
    path('api/investments/', InvestmentListCreateView.as_view(), name='investment-list-create'),
]
