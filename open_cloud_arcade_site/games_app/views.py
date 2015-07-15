from django.shortcuts import render

from django.http import HttpResponseRedirect, HttpResponse
from django.shortcuts import render

import os
import yaml

def games(request):
    path = os.path.dirname(__file__) + '/games/'

    game_list = []
    dirs = os.listdir(path)
    # primes_cubed = [x*x*x for x in range(1000) if prime(x)]
    dirs = [d for d in dirs if os.path.isdir(path + d)]
    dirs = [d for d in dirs if os.path.isfile(path + d + '/info.yml')]
    for d in dirs:
        with open(path + d + '/info.yml', 'r') as f:
            info_file = yaml.load(f)
            game_info = {'title' : info_file['title']}
            game_list.append(game_info)
    context = {'game_list': game_list}

    return render(request, 'games_app/index.html', context)
