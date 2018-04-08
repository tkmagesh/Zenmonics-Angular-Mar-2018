import { Pipe, PipeTransform } from '@angular/core';

interface IComparer{
	(item1 : any, item2 : any) : number;
}

@Pipe({
	name : 'sort',
	pure : true
})
export class SortPipe implements PipeTransform{
	private getComparerFor(attrName : string) : IComparer{
		return function(p1 : any, p2 : any) : number {
	        if (p1[attrName] < p2[attrName]) return -1;
	        if (p1[attrName] > p2[attrName]) return 1;
	        return 0;
	    }
	}
	private getDescending(comparer : IComparer) : IComparer{
		return function(item1 : any, item2 : any) : number {
			return comparer(item1, item2) * -1;
	    }
	}

	transform(items : any[], attrName : string, isDescending : boolean = false) : any[]{
		console.log('sort transform triggered');
		let comparer = this.getComparerFor(attrName);
		if (isDescending){
			comparer = this.getDescending(comparer);
		}
		items.sort(comparer);
		return items;
	}
}