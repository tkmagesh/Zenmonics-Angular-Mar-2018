import { Injectable } from '@angular/core';
import { BugOperationsService } from './bugOperations.service';
import { IBug } from '../models/IBug';

@Injectable()
export class BugStorageService{
	private storage = window.localStorage;
	private currentBugId = 0;

	constructor(private bugOperations : BugOperationsService){

	}

	getAll() : IBug[]{
		let result : IBug[] = [];
		for(let index = 0, count = this.storage.length; index < count; index++){
			let data = this.storage.getItem(this.storage.key(index));
			let bug = JSON.parse(data);
			this.currentBugId = this.currentBugId < bug.id ? bug.id : this.currentBugId;
			result.push(bug);
		}
		return result;
	}

	addNew(bugName : string) : IBug {
		let newBug = this.bugOperations.createNew(++this.currentBugId, bugName);
		this.save(newBug);
		return newBug;
	}

	private save(bug : IBug){
		this.storage.setItem(bug.id.toString(), JSON.stringify(bug));
	}

	toggle(bugToToggle : IBug) : IBug {
		let toggledBug = this.bugOperations.toggle(bugToToggle);
		this.save(toggledBug);
		return toggledBug;
	}

	remove(bug : IBug):void{
		this.storage.removeItem(bug.id.toString());
	}
}