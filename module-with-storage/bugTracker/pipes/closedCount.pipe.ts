import { Pipe, PipeTransform } from '@angular/core';
import { Bug } from '../models/Bug';

@Pipe({
	name: 'closedCount'
})
export class ClosedCountPipe implements PipeTransform {
	transform(bugs: Bug[], args: any[]): number {
		console.log('closedCount.transform triggered');
		let closedCount = 0;
		for(let index = 0, count = bugs.length; index < count; index++){
			if (bugs[index].isClosed)
				++closedCount;
		}
		return closedCount;
	}
}