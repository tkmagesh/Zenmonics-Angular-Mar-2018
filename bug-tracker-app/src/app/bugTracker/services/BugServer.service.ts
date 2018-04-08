import { Injectable } from '@angular/core';
import { Bug } from '../models/Bug';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class BugServerService{
	private baseUrl : string = 'http://localhost:3000/bugs';

	constructor(private http : Http){

	}
	getAll() : Observable<Bug[]>{
		return this.http
			.get(this.baseUrl)
			.map(response => response.json())
	}

	addNew(newBugData : Bug) : Observable<Bug>{
		return this.http
			.post(this.baseUrl, newBugData)
			.map(response => response.json());
	}

	save(bugData : Bug) : Observable<Bug> {
		return this.http
			.put(`${this.baseUrl}/${bugData.id}`, bugData)
			.map(response => response.json());
	}
	remove(bug : Bug) : Observable<any> {
		return this.http
			.delete(`${this.baseUrl}/${bug.id}`)
			.map(response => response.json());
	}
}