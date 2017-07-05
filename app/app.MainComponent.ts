import {Component} from 'angular2/core';
import {book} from './app.book';

@Component({
    selector:"hello",
    template:`<h4> Hello Dear </h4>  <book></book>`,
    directives:[book]
})
export class MainComponent{}