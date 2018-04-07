import { Component } from '@angular/core';
import { Bug } from './models/Bug';
import { BugOperationsService } from './services/BugOperations.service';

@Component({
	selector : 'app-bug-tracker',
	templateUrl : 'bugTracker.component.html'
})
export class BugTrackerComponent{
	bugs : Bug[] = [];

	/*bugOperations : BugOperationsService = null;

	constructor(_bugOperations : BugOperationsService){
		this.bugOperations = _bugOperations;
	}*/

	constructor(private bugOperations : BugOperationsService){

	}

	
	onAddNewClick(bugName){
		let newBug = this.bugOperations.createNew(bugName);
		this.bugs.push(newBug);
	}

	onBugNameClick(bug : Bug){
		this.bugOperations.toggle(bug);
	}

	onRemoveClosedClick(){
		for(let index = this.bugs.length-1; index >=0 ; index--){
			if (this.bugs[index].isClosed)
				this.bugs.splice(index, 1);
		}
	}

	getClosedCount(){
		let closedCount = 0;
		for(let index = 0, count = this.bugs.length; index < count; index++){
			if (this.bugs[index].isClosed)
				++closedCount;
		}
		return closedCount;
	}
}