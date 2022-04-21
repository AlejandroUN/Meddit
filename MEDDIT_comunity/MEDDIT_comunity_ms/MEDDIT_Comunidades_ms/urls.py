from django.urls import path
from MEDDIT_Comunidades_ms.views.comunity_view import ComunityList
from MEDDIT_Comunidades_ms.views.comunity_view import ComunityDetail
from MEDDIT_Comunidades_ms.views.comunityVideos_view import ComunityVideosList
from MEDDIT_Comunidades_ms.views.comunityVideos_view import ComunityVideosDetail
from rest_framework.urlpatterns import format_suffix_patterns

urlpatterns = [
    path('comunity/', ComunityList.as_view()),
    path('comunity/<int:pk>', ComunityDetail.as_view()),
    path('comunityVideos/', ComunityVideosList.as_view()),
    path('comunityVidoes/<int:pk>', ComunityVideosDetail.as_view()),
]
urlpatterns = format_suffix_patterns(urlpatterns)