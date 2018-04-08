import { Bug } from '../models/Bug';
import axios from 'axios';

export class BugServerService{
	private baseUrl : string = 'http://localhost:3000/bugs';

	getAll() : Promise<Bug[]>{
		return axios
			.get(this.baseUrl)
			.then(response => response.data);
	}

	addNew(newBugData : Bug) : Promise<Bug>{
		return axios
			.post(this.baseUrl, newBugData)
			.then(response => response.data);
	}

	save(bugData : Bug) : Promise<Bug> {
		return axios
			.put(`${this.baseUrl}/${bugData.id}`, bugData)
			.then(response => response.data);
	}
	remove(bug : Bug) : Promise<any> {
		return axios
			.delete(`${this.baseUrl}/${bug.id}`)
			.then(response => response.data);
	}
}