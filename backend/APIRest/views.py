from django.contrib.auth.models import User, Group
from rest_framework import viewsets
from APIRest.serializers import UserSerializer
from rest_framework.authentication import TokenAuthentication
from rest_framework import filters
from . import permissions


class UserViewSet(viewsets.ModelViewSet):
    """ViewSet of the Users that allows to make the get,post,update methods"""
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer
    authentication_classes = (TokenAuthentication,)
    permission_classes = (permissions.UpdateOwnProfile,)
    filter_backends = (filters.SearchFilter,)
    search_fields = ('username', 'email',)