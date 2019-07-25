from django.contrib.auth.models import User, Group
from rest_framework import viewsets
from rest_framework.authentication import TokenAuthentication
from rest_framework import filters
from rest_framework.authtoken.serializers import AuthTokenSerializer
from rest_framework.authtoken.views import ObtainAuthToken
from . import permissions
from . import serializers
from . import models
from .serializers import UserSerializer
from rest_framework.permissions import IsAuthenticatedOrReadOnly

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

class LoginViewSet(viewsets.ViewSet):
    """ check username and password and return an auth token """

    serializer_class = AuthTokenSerializer
    
    def create(self, request):
        """ Use the obtainAuthToken to validate and create a token"""

        return ObtainAuthToken().post(request)

class ComentaryViewSet(viewsets.ModelViewSet):
    """ handles CRUD of the commentarys"""

    authentication_classes = (TokenAuthentication,)
    serializer_class = serializers.ComentarySerializer
    queryset = models.Commentaries.objects.all()
    permission_classes= (permissions.PostOwnStatus, IsAuthenticatedOrReadOnly)

    def perform_create(self, serializer):
        serializer.save(user_profile=self.request.user)