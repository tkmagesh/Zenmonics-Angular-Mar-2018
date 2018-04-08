import { Component, Output, EventEmitter} from '@angular/core';
import { BugOperationsService } from '../services/BugOperations.service';
import { Bug } from '../models/Bug';

@Component({
	selector : 'app-bug-add',
	template : `
		<section class="edit">
			<label for="">Bug Name :</label>
			<input type="text" [(ngModel)]="newBugName">
			<input type="button" value="Add New" (click)="onAddNewClick()">
		</section>
	`
})
export class BugAddComponent{
	newBugName : string = '';

	@Output()
	created : EventEmitter<Bug> = new EventEmitter<Bug>();

	constructor(private bugOperations : BugOperationsService){

	}

	onAddNewClick(){
		this.bugOperations
			.createNew(this.newBugName)
			.then(newBug => {
				this.newBugName = '';
				this.created.emit(newBug);		
			})
		
	}

}