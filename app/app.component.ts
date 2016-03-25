import {Component} from 'angular2/core';
import {Input} from './input';
import {MdInputComponent} from './md-input.component';

@Component({
    selector: 'my-app',
    template: `
    <h1>{{title}}</h1>
	<input [(ngModel)]="input.value"/>
    <md-input [input]="input"></md-input>
  `,
    directives: [MdInputComponent]
})
export class AppComponent {
    title: string = 'Lorum Ipsum';
    input: Input = {
        value: this.title
    };
}