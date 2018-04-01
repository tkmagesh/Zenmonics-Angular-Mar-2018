import { Component } from '@angular/core';
import { Bug } from './models/Bug';

@Component({
	selector : 'app-bug-tracker',
	templateUrl : 'bugTracker.component.html'
})
export class BugTrackerComponent{
	bugs : Bug[] = [];

	onAddNewClick(bugName){
		let newBug : Bug = {
			name : bugName,
			isClosed : false
		};
		this.bugs.push(newBug);
	}

	onBugNameClick(bug : Bug){
		bug.isClosed = !bug.isClosed;
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