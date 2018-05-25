from django.urls import path

from rest_framework_jwt.views import obtain_jwt_token, refresh_jwt_token

from .views import RegisterAPIView

urlpatterns = [
    # JWT
    path('register/', RegisterAPIView.as_view()),
    path('login/', obtain_jwt_token),
]