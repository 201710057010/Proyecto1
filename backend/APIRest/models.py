from django.db import models
from django.conf import settings

class Commentaries(models.Model):
    """ Commentaries status update"""

    user_profile = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete = models.CASCADE)
    commentary = models.CharField(max_length = 255)
    topic = models.CharField(max_length = 100)
    created_on = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return super().__str__()