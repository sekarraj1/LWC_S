public with sharing class ContactController {
    @AuraEnabled(cacheable=true)
    public static List<Contact> getContacts(){
        return[SELECT Id,Name,FirstName,LastName,Email,Phone
               FROM Contact
               ];
    }
    
}