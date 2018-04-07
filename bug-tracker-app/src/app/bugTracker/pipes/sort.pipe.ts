import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name : 'sort'
})
export class SortPipe implements PipeTransform{

	private getComparerFor(attrName : string){
		return function(item1, item2){
			if (item1[attrName] < item2[attrName]) return -1;
			if (item1[attrName] > item2[attrName]) return 1;
			return 0;
		}
	}

	private getDescendingComparerFor(comparer){
		return function(item1, item2){
			return comparer(item1, item2) * -1;
		}
	}

	transform(data : any[] = [], attrName : string, isDecending : boolean = false) : any[] {
		let comparer = this.getComparerFor(attrName);
		if (isDecending)
			comparer = this.getDescendingComparerFor(comparer);
		return data.sort(comparer);
	}
}