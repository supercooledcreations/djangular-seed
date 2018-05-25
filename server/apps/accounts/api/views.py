from django.contrib.auth import authenticate, get_user_model

from rest_framework.generics import CreateAPIView
from rest_framework.permissions import AllowAny
from rest_framework_jwt.settings import api_settings

from .serializers import StandardUserRegisterSerializer, EmailUserRegisterSerializer

jwt_payload_handler = api_settings.JWT_PAYLOAD_HANDLER
jwt_endcode_handler = api_settings.JWT_ENCODE_HANDLER
jwt_response_payload_handler = api_settings.JWT_RESPONSE_PAYLOAD_HANDLER

User = get_user_model()

class RegisterAPIView(CreateAPIView):
    queryset = User.objects.all()
    serializer_class = StandardUserRegisterSerializer
    permission_classes = [AllowAny]