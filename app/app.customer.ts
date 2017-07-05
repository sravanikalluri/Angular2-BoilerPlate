import {Component} from 'angular2/core';
import {customerlist} from './app.customerlist.service'

@Component({

    selector:"customer",
    template:`<div>
                <div>
                     <p>{{customername}}</p>
                </div>
                <div>
                    <ul >
                        <li *ngFor="#customer of customer" >
                            {{customer}}
                        </li>
                    </ul>
                </div>
            </div>`,
    providers:[customerlist]
})
export class customer{
     customername:string;
     customer;

     constructor(customerlist:customerlist){
         
       this.customername="list of customers";
       this.customer=customerlist.getcustomer();
     }

}