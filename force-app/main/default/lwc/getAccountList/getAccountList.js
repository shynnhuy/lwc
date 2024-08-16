import getAccountList from '@salesforce/apex/AccountController.getAccountList';
import { LightningElement, wire } from 'lwc';

export default class GetAccountList extends LightningElement {

    @wire(getAccountList) accounts;

    handleSelect(event) {
        console.log("####Value : " + event.currentTarget.dataset.accountId);
        event.preventDefault();
        const selectEvent = new CustomEvent('accountselect', {
            detail: { accountId: event.currentTarget.dataset.accountId }
        });
        console.log("####After select event");
        this.dispatchEvent(selectEvent);
        console.log("####After dispatch event");
    }
}