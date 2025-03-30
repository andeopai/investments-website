from django.forms import forms
from django.urls import reverse_lazy
from django.views.generic import ListView, TemplateView, CreateView

from .forms import InvestmentForm
from .models import Investment


class InvestmentMainView(ListView):
    model = Investment
    template_name = "investments/main.html"  # Template for the main investments page
    context_object_name = "investments"


class AddInvestmentView(TemplateView):
    template_name = "investments/add_investment.html"


class InvestmentCreateView(CreateView):
    model = Investment
    form_class = InvestmentForm
    template_name = 'investments/add_investment.html'
    success_url = reverse_lazy('main-investments')
