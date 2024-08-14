import getAccountList from '@salesforce/apex/AccountController.getAccountList';
import { LightningElement } from 'lwc';

export default class ParentWithNestingChildIteration extends LightningElement {
    data;
    error;

    handleOnChange(event) {
        const keyword = event.target.value;

        console.log('$$ Event -=>', keyword);
        if (keyword != null && keyword.length > 0) {

            getAccountList({ keyword }).then((result) => {
                this.data = result;
                this.error = undefined;
            }).catch((error) => {
                this.error = error;
                this.data = undefined;
            });
        } else {
            this.data = undefined;
        }

    }
}