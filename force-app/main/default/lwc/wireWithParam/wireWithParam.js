import getAccountList from '@salesforce/apex/AccountController.getAccountList';
import { LightningElement, wire } from 'lwc';

export default class WireWithParam extends LightningElement {
    accounts = [];
    error;

    keyword = "";

    handleInputChange(event) {
        this.keyword = event.target.value;
    }

    @wire(getAccountList, { keyword: "$keyword" })
    wireAccounts({ data, error }) {
        if (data) {
            this.accounts = data;
            this.error = undefined;
        } else if (error) {
            this.error = error;
        }
    }
}