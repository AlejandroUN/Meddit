from django.db import models

class Comunity(models.Model):

    id = models.AutoField(primary_key = True)
    name = models.CharField(max_length = 20)
    description = models.TextField(max_length = 140)
    creatorId=models.IntegerField()
    


    class Meta:
        app_label = 'MEDDIT_Comunidades_ms'
