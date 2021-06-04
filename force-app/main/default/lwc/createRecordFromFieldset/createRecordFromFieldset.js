import { api, LightningElement } from 'lwc';
import getFieldsFromFieldSet from '@salesforce/apex/FieldSetHelper.getFieldsFromFieldSet';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';

export default class CreateRecordFromFieldset extends LightningElement {
    lblobjectName;
    inputFieldAPIs = [];
    renderCall = false;

    @api SFDCobjectApiName;
    @api fieldSetName;

    connectedCallback(){
        let objectApiName = this.SFDCobjectApiName;
        let fieldSetName = this.fieldSetName;

        getFieldsFromFieldSet({strObjectApiName:objectApiName,
            strfieldSetName: fieldSetName
        }).then(data=>{
            let items = [];
            let objStr = JSON.parse(data);
            console.log('objStr>>>'+objStr);
            let listOfFields = JSON.parse(Object.values(objStr)[1]);
            this.lblobjectName = Object.values(objStr)[0];
            listOfFields.map(element=>items.push(element.fieldPath));
            this.inputFieldAPIs = items;
            this.error = undefined;
        })
        .catch(error =>{
            this.error = error;
            this.lblobjectName = objectApiName;
        })
    }
    renderedCallback(){
        if(!this.renderCall){
            this.renderCall = true;
            this.dispatchEvent(
                new CustomEvent('cmploaded')
            );
        }
    }

    @api handleSubmit(){
        this.template.querySelector('lightning-record-edit-form').submit();
    }
    handleSuccess(event){
        const evt = new ShowToastEvent({
            title:  this.lblobjectName + " created",
            message: "Record ID: " + event.detail.id,
            variant: "success"
        });
        this.dispatchEvent(evt);
        this.dispatchEvent(
            new CustomEvent('postsuccess'),
            { bubbles: true }
    );   
    }
}