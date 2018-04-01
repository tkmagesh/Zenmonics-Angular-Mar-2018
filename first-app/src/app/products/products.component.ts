import { Component } from '@angular/core';

@Component({
	selector : 'app-products',
	template : `
		<h3>Products</h3>
		<hr>
		<label for="">Product Name :</label>
		<input type="text" #txtProductName >
		<input type="button" value="Add New" (click)="onAddNewClick(txtProductName.value)">
		<div>{{list.length}}</div>
		<ol>
			<li *ngFor="let x of list">{{x}}</li>
		</ol>
	`,
})
export class ProductsComponent{
	list : string[] = [];

	onAddNewClick(productName){
		this.list.push(productName);
	}
}