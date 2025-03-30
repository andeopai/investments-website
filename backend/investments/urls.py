from django.urls import path
from .views import InvestmentListCreateView, InvestmentDetailView

urlpatterns = [
    path('', InvestmentListCreateView.as_view(), name='investment-list-create'),
    path('<int:id>/', InvestmentDetailView.as_view(), name='investment-detail'),
]
