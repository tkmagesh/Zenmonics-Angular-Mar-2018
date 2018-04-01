import { Component } from '@angular/core';
import { CalculatorModel  } from './CalculatorModel';

@Component({
	selector : 'app-calculator-1',
	templateUrl : 'calculatorOne.component.html'
})
export class CalculatorOneComponent{
	result : number = 0;
	model : CalculatorModel = new CalculatorModel();

	onAddClick(n1, n2){
		this.model.n1 = n1;
		this.model.n2 = n2;
		this.model.add();
		this.result = this.model.result;
	}

	onSubtractClick(n1, n2){
		this.model.n1 = n1;
		this.model.n2 = n2;
		this.model.subtract();
		this.result = this.model.result;
	}

	onMultiplyClick(n1, n2){
		this.model.n1 = n1;
		this.model.n2 = n2;
		this.model.multiply();
		this.result = this.model.result;
	}

	onDivideClick(n1, n2){
		this.model.n1 = n1;
		this.model.n2 = n2;
		this.model.divide();
		this.result = this.model.result;
	}
}