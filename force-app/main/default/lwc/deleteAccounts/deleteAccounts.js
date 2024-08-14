import { LightningElement, wire } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import getAccountList from '@salesforce/apex/AccountController.getAccountList';
import { deleteRecord } from 'lightning/uiRecordApi';
import { refreshApex } from '@salesforce/apex';

export default class DeleteAccounts extends LightningElement {
    accounts = [];
    error;

    wiredAccountsResults = [];

    @wire(getAccountList)
    wiredAccounts(results) {
        this.wiredAccountsResults = results
        if (results.data) {
            this.accounts = results.data
            this.error = undefined;
        } else if (results.error) {
            this.error = results.error;
            this.accounts = [];
        }
    }

    async handleDelete(event) {
        try {
            const accountId = event.target.dataset.recordid;
            await deleteRecord(accountId);
            this.dispatchEvent(new ShowToastEvent({
                title: "Success",
                message: "Account Deleted",
                variant: "success",
            }))
            refreshApex(this.wiredAccountsResults)
        } catch (error) {
            this.dispatchEvent(new ShowToastEvent({
                title: "Error deleting record",
                message: "Error: " + error.message,
                variant: "error",
            }));
        }
    }
}