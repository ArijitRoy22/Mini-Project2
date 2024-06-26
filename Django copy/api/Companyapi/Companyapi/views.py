from django.http import HttpResponse,JsonResponse
def home(request):
    print("Home page")
    friends = [
        'Ankit',
        'Rahul',
        'Arijit'
    ]
    return JsonResponse(friends, safe=False)