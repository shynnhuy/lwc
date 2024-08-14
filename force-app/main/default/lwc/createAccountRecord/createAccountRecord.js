import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

import ACCOUNT_OBJECT from "@salesforce/schema/Account";
import NAME_FIELD from "@salesforce/schema/Account.Name";
import PHONE_FIELD from "@salesforce/schema/Account.Phone";
import REVENUE_FIELD from "@salesforce/schema/Account.AnnualRevenue";

export default class CreateAccountRecord extends LightningElement {
    objectApiName = ACCOUNT_OBJECT;
    fields = [NAME_FIELD, PHONE_FIELD, REVENUE_FIELD];

    handleSuccess(event) {
        const toastEvent = new ShowToastEvent({
            title: "Account created",
            message: "Account has been created: " + event.detail.id,
            variant: "success",
        });
        this.dispatchEvent(toastEvent);
    }
}