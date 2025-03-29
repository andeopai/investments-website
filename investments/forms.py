from django import forms
from .models import Investment


class InvestmentForm(forms.ModelForm):
    class Meta:
        model = Investment
        fields = ['broker', 'name', 'symbol', 'purchase_date', 'purchase_amount', 'current_value']
        widgets = {
            'purchase_date': forms.DateInput(attrs={'type': 'date'}),
        }
