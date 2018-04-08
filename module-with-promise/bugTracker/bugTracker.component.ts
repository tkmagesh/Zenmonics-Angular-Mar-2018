import { Component, OnInit } from '@angular/core';
import { Bug } from './models/Bug';
import { BugOperationsService } from './services/BugOperations.service';
import axios from 'axios';



@Component({
	selector : 'app-bug-tracker',
	templateUrl : 'bugTracker.component.html'
})
export class BugTrackerComponent implements OnInit{
	bugs : Bug[] = [];

	sortBugBy : string = 'name';
	sortBugDescending : boolean = false;

	constructor(private bugOperations : BugOperationsService){
		
	}

	async ngOnInit(){
		this. bugs = await this.bugOperations.getAll()
	}
	
	onNewBugCreated(newBug:Bug){
		this.bugs = [...this.bugs, newBug];
	}

	async onBugNameClick(bugToToggle : Bug){
		let toggledBug = await this.bugOperations.toggle(bugToToggle);
		this.bugs = this.bugs.map(bug => bug === bugToToggle ? toggledBug : bug);
	}

	onRemoveClosedClick(){
		this.bugs
			.filter(bug => bug.isClosed)
			.forEach(async closedBug => {
				let result = await this.bugOperations.remove(closedBug);
				this.bugs = this.bugs.filter(bug => bug.id !== closedBug.id);
			});
		
	}

}
/*
export class BugTrackerComponent{
	bugs : Bug[] = [];

	sortBugBy : string = 'name';
	sortBugDescending : boolean = false;

	constructor(private bugOperations : BugOperationsService){
		this.bugOperations
			.getAll()
			.then(bugs => this.bugs = bugs);
	}

	
	onNewBugCreated(newBug:Bug){
		this.bugs = [...this.bugs, newBug];
	}

	onBugNameClick(bugToToggle : Bug){
		this.bugOperations
			.toggle(bugToToggle)
			.then(toggledBug => this.bugs = this.bugs.map(bug => bug === bugToToggle ? toggledBug : bug));
	}

	onRemoveClosedClick(){
		this.bugs
			.filter(bug => bug.isClosed)
			.forEach(closedBug => this.bugOperations
				.remove(closedBug)
				.then(response => this.bugs = this.bugs.filter(bug => bug.id !== closedBug.id)));
		
	}

}
*/