from django.db import models


class Investment(models.Model):
    broker = models.CharField(max_length=30)  # Cannot be null by default
    name = models.CharField(max_length=50)  # Cannot be null by default
    symbol = models.CharField(max_length=10)  # Cannot be null by default
    purchase_date = models.DateField()
    purchase_amount = models.DecimalField(max_digits=10, decimal_places=2)
    current_value = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return f"{self.name} ({self.symbol}) - {self.broker}"
