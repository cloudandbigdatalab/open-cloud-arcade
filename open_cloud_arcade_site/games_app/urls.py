from django.conf.urls import include, url

from . import views

urlpatterns = [
    url(r'^$', views.game_index, name='game_index'),
    url(r'^(?P<id>[0-9]+)/$', views.game, name='game'),
    url(r'^[0-9]+/js/(?P<file>phaser.+\.js)$', views.phaser, name='phaser'),
    url(r'^(?P<id>[0-9]+)/js/(?P<file>[a-z]+\.js)$', views.js, name='js'),
    url(r'^(?P<id>[0-9]+)/(?P<dir>.+)/(?P<file>.+)\.(?P<ext>.+)$', views.res, name='res'),
]
