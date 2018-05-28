# Select the Standard Django User Model or Email Only User Model
AUTH_USER_MODEL = 'accounts.StandardUser'
# AUTH_USER_MODEL = 'accounts.EmailUser'

AUTHENTICATION_BACKENDS = (
    # Django
    'django.contrib.auth.backends.ModelBackend',

    # All Auth
    'allauth.account.auth_backends.AuthenticationBackend',

)

# Auth Sites
SITE_ID = 1


# Account Settings (These settings only affect all auth form do not affect API/JWT and User Model configuration, this must be done seperately)
ACCOUNT_EMAIL_CONFIRMATION_EXPIRE_DAYS = 7
ACCOUNT_EMAIL_REQUIRED = False # Can be set to false if email verification is optional or none, and using username only login 
ACCOUNT_EMAIL_VERIFICATION = "none" #"mandatory", "optional", "none"

# Settings for Username Login
ACCOUNT_AUTHENTICATION_METHOD = 'username'

# Settings for Username or Email Login
# ACCOUNT_AUTHENTICATION_METHOD = 'username_email'

# Settings for Email only login (for use with email only custom user model => AUTH_USER_MODEL='accounts.EmailUser')
# ACCOUNT_USERNAME_REQUIRED = False
# ACCOUNT_USER_MODEL_USERNAME_FIELD = None
# ACCOUNT_AUTHENTICATION_METHOD = 'email'