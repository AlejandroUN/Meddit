from django.db import models
from .comunity_model import Comunity

class ComunityVideos(models.Model):

    id = models.AutoField(primary_key = True)
    comunity = models.ForeignKey(Comunity, on_delete = models.CASCADE)
    

    class Meta:
        app_label = 'MEDDIT_Comunidades_ms'
