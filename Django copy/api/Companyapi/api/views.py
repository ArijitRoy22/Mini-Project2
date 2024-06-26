from django.shortcuts import render
from rest_framework import viewsets,status
from .models import Company,Employee,items,Bid
from .serializers import CompanySerializer,EmployeeSerializer,ItemModelSerializer,RegisterSerializer,LogoutSerializer,LoginSerializer, BidModelSerializer
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth import authenticate
from django.contrib.auth.models import User
from rest_framework.permissions import AllowAny
from rest_framework.authtoken.models import Token
from rest_framework.permissions import IsAuthenticated
# Create your views here.

class CompanyViewSet(viewsets.ModelViewSet):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer

    @action(detail=True,methods=['get'])
    def employees(self,request,pk=None):   
        try:                
            company=Company.objects.get(pk=pk)
            emps=Employee.objects.filter(company=company)
            emps_serializer=EmployeeSerializer(emps,many=True,context={'request':request})
            return Response(emps_serializer.data)
        except Exception as e:
            print(e)
            return Response({
                'message':'Company might not exists !! Error'
            })

class EmployeeViewSet(viewsets.ModelViewSet):
    queryset=Employee.objects.all()
    serializer_class=EmployeeSerializer


# class ImageViewSet(viewsets.ModelViewSet):
#     queryset = ImageModel.objects.all()
#     serializer_class = ImageModelSerializer
#     parser_classes = [MultiPartParser, FormParser]

class ItemCreateView(viewsets.ModelViewSet):
    queryset = items.objects.all()
    serializer_class = ItemModelSerializer

# class BidViewSet(viewsets.ModelViewSet):
#     queryset = Bid.objects.all()
#     serializer_class = BidModelSerializer
#     permission_classes = [AllowAny]

#     def update(self, request, *args, **kwargs):
#         partial = kwargs.pop('partial', False)
#         instance = self.get_object()
#         new_bid = request.data.get('current_bid', None)
#         new_username = request.data.get('username', None)

#         if new_bid is not None:
#             try:
#                 new_bid = float(new_bid)
#                 if new_bid > instance.current_bid:
#                     instance.current_bid = new_bid
#                     if new_username is not None:
#                         instance.username = new_username
#                     instance.save()
#                     serializer = self.get_serializer(instance)
#                     return Response(serializer.data)
#                 else:
#                     return Response({'error': 'New bid must be higher than the current bid.'}, status=status.HTTP_400_BAD_REQUEST)
#             except ValueError:
#                 return Response({'error': 'Invalid bid amount.'}, status=status.HTTP_400_BAD_REQUEST)
#         else:
#             return Response({'error': 'No bid amount provided.'}, status=status.HTTP_400_BAD_REQUEST)

#     def perform_update(self, serializer):
#         serializer.save()

# class BidViewSet(viewsets.ModelViewSet):
#     queryset = Bid.objects.all()
#     serializer_class = BidModelSerializer
#     permission_classes = [AllowAny]  # Allow any user to update, adjust as per your security requirements




class BidViewSet(viewsets.ModelViewSet):
    queryset = Bid.objects.all()
    serializer_class = BidModelSerializer
    permission_classes = [AllowAny]  # Adjust as per your authentication requirements

    def list(self, request, *args, **kwargs):
        # Retrieve all items
        Items = items.objects.all()
        bids = []

        # Iterate through items and create or retrieve bids
        for item in Items:
            try:
                # Try to retrieve existing bid
                bid = Bid.objects.get(item=item)
            except Bid.DoesNotExist:
                # Create new bid if it doesn't exist
                bid = Bid.objects.create(item=item, current_bid=item.start_bid)

            # Serialize bid and add to list
            serializer = self.get_serializer(bid)
            bids.append(serializer.data)

        return Response(bids)
    
    def retrieve(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = self.get_serializer(instance)
        return Response(serializer.data)
    
    def update(self, request, *args, **kwargs):
        partial = kwargs.pop('partial', False)
        instance = self.get_object()
        new_bid = request.data.get('current_bid', None)
        new_username = request.data.get('username', None)

        if new_bid is not None:
            try:
                new_bid = float(new_bid)
                if new_bid > instance.current_bid:
                    instance.current_bid = new_bid
                    if new_username is not None:
                        instance.username = new_username
                    instance.save()
                    serializer = self.get_serializer(instance)
                    return Response(serializer.data)
                else:
                    return Response({'error': 'New bid must be higher than the current bid.'}, status=status.HTTP_400_BAD_REQUEST)
            except ValueError:
                return Response({'error': 'Invalid bid amount.'}, status=status.HTTP_400_BAD_REQUEST)
        else:
            return Response({'error': 'No bid amount provided.'}, status=status.HTTP_400_BAD_REQUEST)

    def perform_update(self, serializer):
        serializer.save()

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = RegisterSerializer
    permission_classes = [AllowAny]
    



class LoginViewSet(viewsets.ModelViewSet):
    permission_classes = [AllowAny]  # Use UserSerializer for login
    serializer_class = LoginSerializer
    def get_queryset(self):
        # Override to return an empty queryset as we don't need a list of login objects
        return User.objects.none()

    def create(self, request):
        serializer = LoginSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)


        email = serializer.validated_data['email']
        password = serializer.validated_data['password']

        if not email or not password:
            return Response({'error': 'Please provide both email and password.'})

        try:
            user = User.objects.get(email=email)
        except User.DoesNotExist:
            return Response({'error': 'Invalid email or password.'})

        if not user.check_password(password):
            return Response({'error': 'Invalid email or password.'})

        # Generate refresh and access tokens using simplejwt
        refresh = RefreshToken.for_user(user)
        access = refresh.access_token

        return Response({
        'refresh': str(refresh),
        'access': str(access),
        'user': LoginSerializer(user).data
        })

class LogoutViewSet(viewsets.ModelViewSet):
    permission_classes = [AllowAny]
    serializer_class = LogoutSerializer  # Use LogoutSerializer for logout functionality

    def get_queryset(self):
    # Override to return an empty queryset as we don't need a list of login objects
        return User.objects.none()
    def create(self, request):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.logout(request)
        return Response({'message': 'Successfully logged out.'})
    

