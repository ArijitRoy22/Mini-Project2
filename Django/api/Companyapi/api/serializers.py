from rest_framework import serializers
from .models import Company,Employee,items,Bid
from django.contrib.auth.models import User

class CompanySerializer(serializers.HyperlinkedModelSerializer):
    company_id = serializers.ReadOnlyField()
    class Meta:
        model=Company
        fields = "__all__"      

class EmployeeSerializer(serializers.HyperlinkedModelSerializer):
    id=serializers.ReadOnlyField()    
    class Meta:
        model=Employee
        fields="__all__"

# class ImageModelSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = ImageModel
#         fields = ['id', 'image']

class ItemModelSerializer(serializers.ModelSerializer):
    class Meta: 
        model = items
        fields = "__all__"

class BidModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Bid
        fields = "__all__"

# class UserSerializer(serializers.ModelSerializer):

#   class Meta:
#     model = User
#     fields = ('id', 'email', 'password')

class LoginSerializer(serializers.Serializer):
    email = serializers.EmailField(required=True)
    password = serializers.CharField(required=True, style={'input_type': 'password'}, write_only=True)

class RegisterSerializer(serializers.ModelSerializer):
  password = serializers.CharField(
      required=True,
      style={'input_type': 'password'},
      write_only=True
  )
  password2 = serializers.CharField(
      required=True,
      style={'input_type': 'password'},
      write_only=True
  )

  def validate(self, attrs):
    password = attrs['password']
    password2 = attrs['password2']
    if password != password2:
      raise serializers.ValidationError({'password': 'Passwords do not match.'})
    return attrs

  def create(self, validated_data):
    user = User.objects.create_user(
        validated_data['username'], validated_data['email'], validated_data['password']
    )
    return user

  class Meta:
    model = User
    fields = ('id', 'username', 'email', 'password', 'password2')


class LogoutSerializer(serializers.Serializer):
  # No fields required as logout doesn't involve data exchange

  def update(self, instance, validated_data):
    # No update logic needed for logout
    pass

  def create(self, validated_data):
    # No creation logic needed for logout
    pass

  def logout(self, request):
    token = request.auth.token
    if token:
      # Blacklist the token instead of deleting it
      token.delete()  # This line is replaced
      token.blacklisted = True
      token.save()