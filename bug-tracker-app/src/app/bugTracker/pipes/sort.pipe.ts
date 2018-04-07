import { Pipe, PipeTransform } from '@angular/core';


interface Comparer{
	(item1 : any, item2 : any) : number
}

@Pipe({
	name : 'sort'
})
export class SortPipe implements PipeTransform{

	private getComparerFor(attrName : string) : Comparer {
		return function(item1, item2) {
			if (item1[attrName] < item2[attrName]) return -1;
			if (item1[attrName] > item2[attrName]) return 1;
			return 0;
		}
	}

	private getDescendingComparerFor(comparer : Comparer) : Comparer{
		return function(item1, item2) {
			return comparer(item1, item2) * -1;
		}
	}

	transform(data : any[] = [], attrName : string, isDecending : boolean = false) : any[] {
		console.log('sort.transform triggered');
		let comparer = this.getComparerFor(attrName);
		if (isDecending)
			comparer = this.getDescendingComparerFor(comparer);
		return data.sort(comparer);
	}
}