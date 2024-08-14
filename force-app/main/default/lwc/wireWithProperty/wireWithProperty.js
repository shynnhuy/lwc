import getAccountList from '@salesforce/apex/AccountController.getAccountList';
import { LightningElement, wire } from 'lwc';

export default class WireWithProperty extends LightningElement {
    @wire(getAccountList) accounts;
}