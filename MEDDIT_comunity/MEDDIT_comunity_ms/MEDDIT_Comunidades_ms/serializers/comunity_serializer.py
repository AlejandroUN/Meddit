from rest_framework import serializers
from MEDDIT_Comunidades_ms.models.comunity_model import Comunity

class ComunitySerializer(serializers.ModelSerializer):

    class Meta:
        model = Comunity
        fields = ['id', 'name', 'description','creatorId']
