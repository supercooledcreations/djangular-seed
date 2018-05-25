from datetime import timedelta

# Basic REST Settings
REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': (
        # 'rest_framework.authentication.BasicAuthentication'
        'rest_framework_jwt.authentication.JSONWebTokenAuthentication',
        # 'rest_framework.authentication.SessionAuthentication',
    ),
    'DEFAULT_PERMISSION_CLASSES': (
        'rest_framework.permissions.IsAuthenticatedOrReadOnly',
    )
}

# JWT Authentication Settings
JWT_AUTH = {
    'JWT_ENCODE_HANDLER':
    'rest_framework_jwt.utils.jwt_encode_handler',

    'JWT_DECODE_HANDLER':
    'rest_framework_jwt.utils.jwt_decode_handler',

    'JWT_PAYLOAD_HANDLER':
    'rest_framework_jwt.utils.jwt_payload_handler',

    'JWT_PAYLOAD_GET_USER_ID_HANDLER':
    'rest_framework_jwt.utils.jwt_get_user_id_from_payload_handler',

    'JWT_RESPONSE_PAYLOAD_HANDLER':
    # 'rest_framework_jwt.utils.jwt_response_payload_handler',
    'apps.accounts.api.utils.jwt_response_payload_handler_standard',
    # 'apps.accounts.api.utils.jwt_response_payload_handler_email',

    # 'JWT_SECRET_KEY': settings.SECRET_KEY,
    # 'JWT_GET_USER_SECRET_KEY': None,
    # 'JWT_PUBLIC_KEY': None,
    # 'JWT_PRIVATE_KEY': None,
    # 'JWT_ALGORITHM': 'HS256',
    # 'JWT_VERIFY': True,
    # 'JWT_VERIFY_EXPIRATION': True,
    # 'JWT_LEEWAY': 0,
    # 'JWT_EXPIRATION_DELTA': timedelta(seconds=300),
    # 'JWT_AUDIENCE': None,
    # 'JWT_ISSUER': None,

    'JWT_ALLOW_REFRESH': True,
    'JWT_REFRESH_EXPIRATION_DELTA': timedelta(days=7),

    'JWT_AUTH_HEADER_PREFIX': 'JWT',
    'JWT_AUTH_COOKIE': None,

}
