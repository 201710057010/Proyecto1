from rest_framework import permissions

class UpdateOwnProfile(permissions.BasePermission):
    """ Allow users to edit their own profile """

    def has_object_permission(self, request, view, obj):
        return super().has_object_permission(request, view, obj)

class PostOwnStatus(permissions.BasePermission):
    """ Alow users to update their own status"""

    def has_object_permission(self, request, view, obj):
        if request.method in permissions.SAFE_METHODS:
            return True
        
        return obj.user_profile.id == request.user.id
        