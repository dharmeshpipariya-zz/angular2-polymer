import {Component} from 'angular2/core';
import {Input} from './input';

@Component({
    selector: 'md-input',
    template: `
    <div>
	  <div>{{input.value}}</div>
      <input [(ngModel)]="input.value" />
      <paper-input ngDefaultControl [(ngModel)]="input.value" label="{{input.value}}"></paper-input>
      <paper-input [value]="input.value" #input1 (change)="onChanged(input1.value)" label="{{input.value}}"></paper-input>
    </div>
  `,
    inputs: ['input']
})
export class MdInputComponent {
    input: Input;
    onChanged(value: string) {
        this.input.value = value;
    }
}


/*<paper-input ngDefaultControl [(ngModel)]="input" label="{{input}}"></paper-input>*/