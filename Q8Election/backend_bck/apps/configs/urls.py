# Campaign Urls

from django.urls import path
from django.contrib import admin
# from restapi.admin import (
#     campaign_admin_site,
#     candidate_admin_site,
#     election_admin_site,
#     elector_admin_site,
#     category_admin_site,
#     user_admin_site,
#     )

from .views import *

app_name = "Config"

urlpatterns = [
    # Admin
    # path('admin/elections/', election_admin_site.urls, name='campaign-admin'),
    # path('admin/', admin.site.urls),
    # path('admin/users/', user_admin_site.urls),

    # Media
    path("uploadImage", UploadImage.as_view(), name="uploadImage"),
]