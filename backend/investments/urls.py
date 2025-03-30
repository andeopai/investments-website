from django.urls import path
from .views import InvestmentMainView, InvestmentCreateView

urlpatterns = [
    # Main investments dashboard page
    path('', InvestmentMainView.as_view(), name='main-investments'),
    # Add investment page
    path('add/', InvestmentCreateView.as_view(), name='add-investment'),
]
