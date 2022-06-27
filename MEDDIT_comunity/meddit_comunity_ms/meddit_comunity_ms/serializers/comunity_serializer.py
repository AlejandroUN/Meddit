from rest_framework import serializers
from meddit_comunity_ms.models.comunity_model import Comunity

class ComunitySerializer(serializers.ModelSerializer):

    class Meta:
        model = Comunity
        fields = ['id', 'name', 'description','creatorId']
