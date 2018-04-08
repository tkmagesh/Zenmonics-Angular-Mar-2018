import { Injectable } from '@angular/core';
import { Bug } from '../models/Bug';
import { BugStorageService } from './BugStorage.service';

@Injectable()
export class BugOperationsService{
	constructor(private bugStorage : BugStorageService){

	}
	getAll() : Bug[]{
		return this.bugStorage.getAll();
	}
	remove(bug : Bug){
		this.bugStorage.remove(bug);
	}
	createNew(bugName : string) : Bug {
		let newBugData : Bug = {
			id : 0,
			name : bugName,
			isClosed : false,
			createdAt : new Date()
		};
		let newBug = this.bugStorage.addNew(newBugData);
		return newBug;
	}
	toggle(bug : Bug) : Bug {
		let toggledBug = {...bug, isClosed : !bug.isClosed};
		this.bugStorage.save(toggledBug);
		return toggledBug;
	}
}