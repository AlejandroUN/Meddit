from rest_framework import serializers
from MEDDIT_Comunidades_ms.models.comunityVideos_model import ComunityVideos
from MEDDIT_Comunidades_ms.models.comunity_model import Comunity
from MEDDIT_Comunidades_ms.serializers.comunity_serializer import ComunitySerializer

class ComunityVideosSerializer(serializers.ModelSerializer):


    class Meta:
        model = ComunityVideos
        fields = ['id', 'comunity']

    

    def to_representation(self, obj):

        data = super().to_representation(obj)

        

        comunity = Comunity.objects.get(id = data["comunity"])
        comunitySerializer = ComunitySerializer(comunity)

        data["comunity"] = comunitySerializer.data
        
        return data
