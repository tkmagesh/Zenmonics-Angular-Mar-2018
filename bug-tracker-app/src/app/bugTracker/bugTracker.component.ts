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

	sortBugBy : string = 'name';
	sortBugDescending : boolean = false;

	newBugName : string = '';

	constructor(private bugOperations : BugOperationsService){
		this.bugs.push(this.bugOperations.createNew('Server communications failure'));
		this.bugs.push(this.bugOperations.createNew('Application not responding'));
		this.bugs.push(this.bugOperations.createNew('User actions not recognized'));
		this.bugs.push(this.bugOperations.createNew('Data integrity checks failed'));

		console.log(Promise);
	}

	
	onAddNewClick(){
		let newBug = this.bugOperations.createNew(this.newBugName);
		//this.bugs.push(newBug);
		this.bugs = [...this.bugs, newBug];
		this.newBugName = '';
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
		console.log('getClosedCount triggered');
		let closedCount = 0;
		for(let index = 0, count = this.bugs.length; index < count; index++){
			if (this.bugs[index].isClosed)
				++closedCount;
		}
		return closedCount;
	}
}