import { LightningElement, wire } from 'lwc';
import getContactList from '@salesforce/apex/ContactController.getContacts';
export default class EventWithData extends LightningElement {
    selectedContact;
    @wire(getContactList) contacts;

    handleSelect(event){
        const contactId = event.detail;
        console.log('contactId>>>'+contactId);
        this.selectedContact = this.contacts.data.find(
            (contact) => contact.Id === contactId
        );
    }
}