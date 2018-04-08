import { NgModule} from '@angular/core';

import { SortPipe } from './pipes/sort.pipe';
import { TrimTextPipe } from './pipes/trimText.pipe';
import { ElapsedPipe } from './pipes/elapsed.pipe';


@NgModule({
	declarations : [
		SortPipe,
		TrimTextPipe,
		ElapsedPipe
	],
	providers : [],
	imports :[],
	exports : [
		SortPipe,
		TrimTextPipe,
		ElapsedPipe
	]
})
export class UtilsModule{

}