import { Component } from '@angular/core';
import { CalculatorModel  } from './CalculatorModel';

@Component({
	selector : 'app-calculator-1',
	templateUrl : 'calculatorOne.component.html'
})
export class CalculatorOneComponent{
	
	model : CalculatorModel = new CalculatorModel();
	

	onN1Change(value){
		this.model.n1 = value;
	}
	onN2Change(value){
		this.model.n2 = value;
	}
	
}