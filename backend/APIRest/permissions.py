from rest_framework import permissions

class UpdateOwnProfile(permissions.BasePermission):
    """ Allow users to edit their own profile """

    def has_object_permission(self, request, view, obj):
        return super().has_object_permission(request, view, obj)