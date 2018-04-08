import { Component, OnInit } from '@angular/core';
import { BugServerService } from '../services/bugServer.service';
import { IBug } from '../models/IBug';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector : 'bug-details',
	template : `
		<h3>{{bug?.name}}</h3>
		<hr />
		<p>{{bug.desc}}</p>
		<div><b>{{bug?.isClosed}}</b></div>
	`
})
export class BugDetailsComponent implements OnInit{

	bug : IBug;

	ngOnInit(){
		this.route.params
			.map((p:any) => p.id)
			.subscribe(id => this.bugServer.get(id).subscribe(bug => this.bug = bug));
	}
	constructor(private route: ActivatedRoute, private bugServer : BugServerService){

	}

}
