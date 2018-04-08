import { Component, OnInit } from '@angular/core';
import { IBug } from './models/IBug';

import { BugServerService } from './services/bugServer.service';

@Component({
	selector : 'bug-tracker',
	template :  `
		<a [routerLink]="['/add']">Create New</a>
		<bug-stats [data]="bugs"></bug-stats>
		<section class="sort">
			<label for="">Order By :</label>
			<select [(ngModel)]="bugSortBy">
				<option value="name">Name</option>
				<option value="isClosed">Status</option>
			</select>
			<label for="">Descending ? :</label>
			<input type="checkbox" [(ngModel)]="bugSortDescending">
		</section>
		<section class="list">
			<ol>
				<li *ngFor="let bug of ( bugs | sort:bugSortBy:bugSortDescending) ">
					<span class="bugname" 
						(click)="onBugClick(bug)" 
						[ngClass]="{closed : bug.isClosed}"
						[title]="bug.name"
					>
						{{bug.name | trimText:40 }}
					</span>
					<div class="datetime">{{bug.createdAt | elapsed}}</div>
					<div><a [routerLink]="['/details',bug.id]">More...</a></div>
				</li>
			</ol>
			<input type="button" value="Remove Closed" (click)="onRemoveClosedClick()">
		</section>
	`
})
export class BugTrackerComponent implements OnInit {
	bugs : IBug[] = [];

	bugSortBy : string = '';
	bugSortDescending : boolean = false;

	ngOnInit(){
		this.bugServer
			.getAll()
			.subscribe(bugs => this.bugs = bugs);
	}
	

	constructor(private bugServer : BugServerService){
		console.log('bugTracker component constructor');
	}

	onNewBugAdded(bug : IBug){
		this.bugs = [...this.bugs, bug];
	}

	onBugClick(bugToToggle : IBug){
		this.bugServer
			.toggle(bugToToggle)
			.subscribe(toggledBug => this.bugs = this.bugs.map(bug => bug.id === bugToToggle.id ? toggledBug : bug));
	}
	onRemoveClosedClick(){
		this.bugs
			.filter(bug => bug.isClosed)
			.forEach(bug => this.bugServer.remove(bug).subscribe(_ => {}));
		this.bugs = this.bugs.filter(bug => !bug.isClosed);
	}

}