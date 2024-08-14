import { LightningElement } from 'lwc';

export default class Counter extends LightningElement {
    counter = 0;

    onIncrement() {
        this.counter++;
    }

    onDecrement() {
        this.counter--;
    }
}