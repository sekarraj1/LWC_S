import { api, LightningElement } from 'lwc';

export default class ModalComponentTemplate extends LightningElement {
    showModal = false;
    @api 
    set header(value){
        this._headerPrivaate =value;
    }
    get header(){
        return this._headerPrivaate;
    }
    _headerPrivaate;

    @api show(){
        this.showModal = true;
    }
    @api hide(){
        this.showModal = false;
    }
    handleDialogClose(){
        const closedialog = new CustomEvent('closedialog');
        this.dispatchEvent(closedialog);
        this.hide();
    }
    handleSlotFooterChange(){
        if(this.showModal === false){
            return;
        }
        const footerEl = this.template.querySelector('footer').hide();
    }
}