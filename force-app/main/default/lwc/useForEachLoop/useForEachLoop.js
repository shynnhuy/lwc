import { LightningElement } from 'lwc';

export default class UseForEachLoop extends LightningElement {
    students = [
        {
            id: 1,
            Name: 'Rahul',
            Class: '10th',
            Fee: 2000
        },
        {
            id: 2,
            Name: 'Raj',
            Class: '10th',
            Fee: 2000
        }
    ]
}