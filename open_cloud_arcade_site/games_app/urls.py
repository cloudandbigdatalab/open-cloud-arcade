from django.conf.urls import include, url

from . import views

urlpatterns = [
    url(r'^$', views.game_index, name='game_index'),
    url(r'^(?P<id>[0-9]+)/$', views.game, name='game'),
    url(r'^(?P<id>[0-9]+)/(?P<res>.+)$', views.res, name='res'),
]
