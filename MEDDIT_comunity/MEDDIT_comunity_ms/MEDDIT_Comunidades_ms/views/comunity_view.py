from MEDDIT_Comunidades_ms.models.comunity_model import Comunity
from MEDDIT_Comunidades_ms.serializers.comunity_serializer import ComunitySerializer
from rest_framework import mixins
from rest_framework import generics

class ComunityList(mixins.ListModelMixin,
                   mixins.CreateModelMixin,
                   generics.GenericAPIView):

    queryset = Comunity.objects.all()
    serializer_class = ComunitySerializer

    def get(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)

    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)

class ComunityDetail(mixins.RetrieveModelMixin,
                     mixins.UpdateModelMixin,
                     mixins.DestroyModelMixin,
                     generics.GenericAPIView):
                     
    queryset = Comunity.objects.all()
    serializer_class = ComunitySerializer

    def get(self, request, *args, **kwargs):
        return self.retrieve(request, *args, **kwargs)

    def put(self, request, *args, **kwargs):
        return self.update(request, *args, **kwargs)

    def delete(self, request, *args, **kwargs):
        return self.destroy(request, *args, **kwargs)
