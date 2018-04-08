import { Http } from '@angular/http';
import { IBug } from '../models/IBug';
import { BugOperationsService } from './bugOperations.service';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class BugServerService{
	private baseUrl : string = 'http://localhost:3000/bugs';

	constructor(private http : Http, private bugOperations : BugOperationsService){

	}
	getAll() : Observable<IBug[]>{
		return  this.http
			.get(this.baseUrl)
			.map(response => response.json())
	}
	get(id) : Observable<IBug>{
		return  this.http
			.get(`${this.baseUrl}/${id}`)
			.map(response => response.json())
	}
	addNew(bugName : string) : Observable<IBug>{
		let newBugData = this.bugOperations.createNew(0, bugName);
		return  this.http
			.post(this.baseUrl, newBugData)
			.map(response => response.json())
	}
	toggle(bug : IBug) : Observable<IBug> {
		let toggledBug = this.bugOperations.toggle(bug);
		return  this.http
			.put(`${this.baseUrl}/${bug.id}`, toggledBug)
			.map(response => response.json())
	}
	remove(bug : IBug) : Observable<any>{
		return  this.http
			.delete(`${this.baseUrl}/${bug.id}`)
			.map(response => response.json())
	}
}
