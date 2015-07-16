from django.shortcuts import render

from django.http import HttpResponseRedirect, HttpResponse
from django.shortcuts import render
from django.templatetags.static import static

import os
import yaml
import urllib, mimetypes

def game_index(request):
    path = os.path.dirname(__file__) + '/static/games_app/games/'

    game_list = []
    dirs = os.listdir(path)
    dirs = [d for d in dirs if os.path.isdir(path + d)]
    dirs = [d for d in dirs if os.path.isfile(path + d + '/info.yml')]
    for d in dirs:
        with open(path + d + '/info.yml', 'r') as f:
            info_file = yaml.load(f)
            game_info = {'title' : info_file['title'], 'id' : d}
            game_list.append(game_info)
    context = {'game_list': game_list}

    return render(request, 'games_app/index.html', context)

def game(request, id):
    path = os.path.dirname(__file__) + '/static/games_app/games/' + id + '/info.yml'

    with open(path, 'r') as f:
        info_file = yaml.load(f)
        scripts = info_file['js']
        title = info_file['title']
        game_info = {'game_info' : {'id' : id, 'title' : title, 'scripts' : scripts}}

    return render(request, 'games_app/game.html', game_info)

def res(request, id, res):
    return HttpResponseRedirect(static('games_app/games/' + id + '/' + res))
