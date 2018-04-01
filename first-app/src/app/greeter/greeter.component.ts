import { Component } from '@angular/core';

@Component({
	selector : 'app-greeter',
	templateUrl : 'greeter.component.html',
	styleUrls : ['greeter.component.css']
})
export class GreeterComponent{
	//state & behavior

	greetMessage : string = '[Default greet message]';

	onGreetClick(userName){
		this.greetMessage = `Hi ${userName}, Have a nice day!`;
	}
}