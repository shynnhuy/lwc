import getAccountList from '@salesforce/apex/AccountController.getAccountList';
import { LightningElement, wire } from 'lwc';

export default class WireWithFunction extends LightningElement {
    accounts = [];
    error;

    @wire(getAccountList)
    wiredAccounts({ data, error }) {
        if (data) {
            this.accounts = data
            this.error = undefined;
        } else if (error) {
            this.error = error;
            this.accounts = [];
        }
    }
}