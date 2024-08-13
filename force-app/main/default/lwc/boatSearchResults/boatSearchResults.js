import { LightningElement, wire } from 'lwc';
import getBoats from '@salesforce/apex/BoatDataService.getBoats';

export default class BoatSearchResults extends LightningElement {

    boatTypeId = "";
    isLoading = false;

    @wire(getBoats, { boatTypeId: "$boatTypeId" })
    wireBoats({ data, error }) {
        console.log("data, error", data, error);
        if (data) this.boats = data;
        else if (error) console.log("error", error);
    }

    searchBoats(boatTypeId) {
        this.isLoading = true
        this.notifyLoading(this.isLoading);
        this.boatTypeId = boatTypeId;
    }


    notifyLoading(isLoading) {
        if (isLoading) this.dispatchEvent(new CustomEvent("loading"));
        else this.dispatchEvent(new CustomEvent("doneloading"));
    }
}