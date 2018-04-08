import { IBug } from '../models/IBug';

export class BugOperationsService{
	createNew(id : number, bugName : string) : IBug{
		let newBug : IBug = {
			id : id,
			name : bugName,
			isClosed : false,
			createdAt : new Date(),
			desc : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis quibusdam, perspiciatis quia eligendi velit consectetur quod saepe, a repudiandae hic possimus voluptate nobis, at harum molestiae iure explicabo beatae eveniet!'
		}
		return newBug;
	}

	toggle(bugToToggle : IBug) : IBug {
		let toggledBug = { ...bugToToggle, isClosed : !bugToToggle.isClosed};
		return toggledBug;
	}
}