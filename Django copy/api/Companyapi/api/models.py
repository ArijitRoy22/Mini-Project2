from django.db import models
import uuid
from django.contrib.auth.models import User


type = (('IT', 'IT'), ('Non IT','Non IT'), ('Mobile Phone', 'Mobile Phones'))
class Company(models.Model):
    company_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=50)
    location = models.CharField(max_length=50)
    about= models.TextField()
    type = models.CharField(max_length=100, choices=type)
    added_date = models.DateTimeField(auto_now=True)
    active = models.BooleanField(default=True)

    def __str__(self):
        return self.name +'--'+ self.location


class Employee(models.Model):
    name=models.CharField(max_length=100)
    email=models.CharField(max_length=50)
    address=models.CharField(max_length=200)
    phone=models.CharField(max_length=10)
    about=models.TextField()
    position=models.CharField(max_length=50,choices=(
        ('Manager','manager'),
        ('Software Developer','sd'),
        ('Project Leader','pl')
    ))
    
    company=models.ForeignKey(Company, on_delete=models.CASCADE)

class items(models.Model):
    id = models.TextField( 
         primary_key = True, 
         default = uuid.uuid4, 
         editable = False)
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)
    name = models.TextField(max_length=50)
    about = models.TextField(max_length=100)
    start_bid = models.FloatField()
    length = models.FloatField(null=True)
    Age = models.IntegerField(null=True)
    weight = models.FloatField(null=True)
    image1 = models.ImageField(upload_to='images/')
    image2 = models.ImageField(upload_to='images/', null=True)
    image3 = models.ImageField(upload_to='images/', null=True)
    image4 = models.ImageField(upload_to='images/', null=True)

# class ImageModel(models.Model):
#     id = models.TextField( 
#          primary_key = True, 
#          default = uuid.uuid4, 
#          editable = False)
#     item_id = models.ForeignKey(items, on_delete=models.CASCADE)
#     image = models.ImageField(upload_to='images/')  


    
class Bid(models.Model):
    item = models.ForeignKey(items, on_delete=models.CASCADE)
    current_bid = models.FloatField()
    username = models.CharField(max_length=50, null=True, blank=True)

    def save(self, *args, **kwargs):
        if not self.id:  # Only set default current_bid when the bid is created (not updated)
            self.current_bid = self.item.start_bid
        super(Bid, self).save(*args, **kwargs)