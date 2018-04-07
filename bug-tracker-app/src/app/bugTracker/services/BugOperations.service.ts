import { Bug } from '../models/Bug';

export class BugOperationsService{
	createNew(bugName : string) : Bug {
		let newBug : Bug = {
			name : bugName,
			isClosed : false
		};
		return newBug;
	}
	toggle(bug : Bug) : void {
		bug.isClosed = !bug.isClosed;
	}
}