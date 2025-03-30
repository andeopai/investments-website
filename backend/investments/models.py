from django.db import models


class Investment(models.Model):
    broker = models.CharField(max_length=30)
    name = models.CharField(max_length=50)
    symbol = models.CharField(max_length=10)
    units = models.DecimalField(max_digits=10, decimal_places=2)
    value = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)

    def __str__(self):
        return f"{self.name} ({self.symbol}) - {self.broker}"
