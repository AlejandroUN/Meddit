from django.urls import path
from meddit_comunity_ms.views.comunity_view import ComunityList
from meddit_comunity_ms.views.comunity_view import ComunityDetail

from rest_framework.urlpatterns import format_suffix_patterns

urlpatterns = [
    path('comunity/', ComunityList.as_view()),
    path('comunity/<int:pk>', ComunityDetail.as_view()),

   
]
urlpatterns = format_suffix_patterns(urlpatterns)