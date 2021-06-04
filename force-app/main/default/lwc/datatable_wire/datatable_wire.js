import { LightningElement, track, wire } from 'lwc';
import wireCall from '@salesforce/apex/DataTableDemoController.wireCall';


const columns = [
    { label: 'Employee Name', fieldName: 'empName', type:"text" }, 
    { label: 'Phone', fieldName: 'empPhone' , type:'phone' },  
    { label: 'Email', fieldName: 'empEmail' , type: 'email'}, 
    { label: 'Website', fieldName: 'empWebsite', type:"url" } 
]; 

export default class Datatable_wire extends LightningElement {
    maxRows=1000;
    tableElement;
    @track dataRow; 
    @track totalRecords;
    columns = columns;

    @wire( wireCall, {recToReturn : 10} )
    wireMethodCallback({error,data}){
        console.log('Callout JS');
        console.log(data);
        if(data){
            this.dataRow = data;  
            this.totalRecords = data.length;
            console.log(data );
            console.log(this.dataRow );
        }
    }

    loadMoreData(event) {
        console.log('Load more JS made');
        //Display a spinner to signal that data is being loaded
        if(event.target){
            event.target.isLoading = true;
        }
        this.tableElement = event.target;
        //Display "Loading" when more data is being loaded
        this.loadMoreStatus = 'Loading';

        wireCall( {recToReturn : 10} )
            .then((data) => {
                console.log('Load more Call made');  
                    const currentData = this.dataRow;
                    //Appends new data to the end of the table
                    this.dataRow = this.dataRow.concat(data); 
                    this.loadMoreStatus = '';
                    this.totalRecords = this.dataRow.length; 
                    if (this.dataRow.length  >= this.maxRows) {
                        this.tableElement.enableInfiniteLoading = false;
                        this.loadMoreStatus = 'No more data to load';
                    }

                if(this.tableElement){
                    this.tableElement.isLoading = false;
                } 
            }
        );
    }
}