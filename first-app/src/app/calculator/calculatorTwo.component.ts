import { Component } from '@angular/core';
import { CalculatorModel  } from './CalculatorModel';

@Component({
	selector : 'app-calculator-2',
	templateUrl : 'calculatorTwo.component.html'
})
export class CalculatorTwoComponent{
	
	model : CalculatorModel = new CalculatorModel();

	operator : string = 'add';

	onCalculateClick(){
		this.model[this.operator]();
	}
}