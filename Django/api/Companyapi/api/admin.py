from django.contrib import admin
from .models import Company,Employee,items,Bid
# Register your models here.
class CompanyAdmin(admin.ModelAdmin):
    list_display=('name','location','type')
    search_fields=('name',)   
    
class EmployeeAdmin(admin.ModelAdmin):
    list_display=('name','email','company')
    list_filter=('company',)


class itemDisplay(admin.ModelAdmin):
    list_display=("id","user_id","name","about","start_bid","length","Age", "weight")

admin.site.register(Company,CompanyAdmin)
admin.site.register(Employee,EmployeeAdmin)
# admin.site.register(ImageModel)
admin.site.register(Bid)
admin.site.register(items,itemDisplay)