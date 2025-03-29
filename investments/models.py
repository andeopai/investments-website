from django.db import models


class Investment(models.Model):
    name = models.CharField(max_length=100)
    purchase_date = models.DateField()
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    current_value = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)

    def __str__(self):
        return self.name
