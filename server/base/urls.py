
from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path, re_path, include
from django.views.generic import TemplateView

urlpatterns = [
    # Admin and Accounts
    path('admin/', admin.site.urls),
    path('accounts/', include('allauth.urls')),

    # API
    path('api/accounts/', include('apps.accounts.api.urls')),
    
    # Django Frontend

]


# Development Static Files
if settings.DEBUG:
    urlpatterns = urlpatterns + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
    urlpatterns = urlpatterns + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

# Client (Catchall)
# urlpatterns += [re_path(r'^(?P<path>.*)', TemplateView.as_view(template_name='client.html'), name='client')]
