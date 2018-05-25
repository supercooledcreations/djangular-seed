from django.utils import timezone

import datetime
from rest_framework_jwt.settings import api_settings

expire_delta = api_settings.JWT_REFRESH_EXPIRATION_DELTA
expire_buffer = datetime.timedelta(seconds=300)
expires = timezone.now() + expire_delta - expire_buffer


# For standard user
def jwt_response_payload_handler_standard(token, user=None, request=None):
    return {
        'username': user.username,
        'email': user.email,
        'token': token,
        'expires': expires
    }

# For email only user
def jwt_response_payload_handler_email(token, user=None, request=None):
    return {
        'email': user.email,
        'token': token,
        'expires': expires
    }