from django.contrib.auth.models import User
from rest_framework import serializers
from . import models


class UserSerializer(serializers.HyperlinkedModelSerializer):
    """comentarios = ComentarySerializer(read_only = True)"""

    class Meta:
        model = User
        fields = ('email', 'username', 'password')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = User(
            email=validated_data['email'],
            username=validated_data['username']
        )
        user.set_password(validated_data['password'])
        user.save()
        return user

class ComentarySerializer(serializers.ModelSerializer):
    """ a serializer for comentaries"""
    user = serializers.SlugRelatedField(
        many = True,
        read_only=True,
        slug_field='username'
     )

    class Meta:
        model = models.Commentaries
        fields = ['id','user_profile', 'commentary', 'topic', 'created_on']
        depth = 1
        extra_kwargs = {'user_profile': {'read_only': True}}


