import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { IBug } from '../models/IBug';
import { BugServerService } from '../services/bugServer.service';

@Component({
	selector : 'bug-edit',
	template : `
		<section class="edit">
			<label for="">Bug Name :</label>
			<input type="text" [(ngModel)]="newBugName">
			<input type="button" value="Create New" (click)="onCreateClick()">
		</section>
	`,
})
export class BugEditComponent{
	newBugName : string = '';

	@Output()
	onNewBug : EventEmitter<IBug> = new EventEmitter<IBug>();

	constructor(private bugServer : BugServerService, private router : Router){

	}
	onCreateClick(){
		this.bugServer
			.addNew(this.newBugName)
			.subscribe(newBug => this.router.navigate(['bugs']));
	}
}












