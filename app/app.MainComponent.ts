import {Component} from 'angular2/core';
import {customer} from './app.customer';

@Component({
    selector:"hello",
    template:`<h4> Sonicsoft Technologies </h4>  <customer></customer>`,
    directives:[customer]
})
export class MainComponent{}