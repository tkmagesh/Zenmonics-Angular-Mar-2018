import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UtilsModule } from './utils/utils.module';
import { HttpModule } from '@angular/http';

//Routing
import {RouterModule, Routes} from '@angular/router';


import { AppComponent } from './app.component';
import { BugTrackerComponent } from './bugTracker/bugTracker.component';
import { BugEditComponent} from './bugTracker/views/bugEdit.component';


import { ClosedCountPipe } from './bugTracker/pipes/closedCount.pipe';
import { BugStatsComponent } from './bugTracker/views/bugStats.component';

import { BugOperationsService } from './bugTracker/services/bugOperations.service';
import { BugStorageService } from './bugTracker/services/bugStorage.service';
import { BugServerService } from './bugTracker/services/bugServer.service';
import { BugDetailsComponent } from './bugTracker/views/bugDetails.component';

//Routing
let routes : Routes = [
    {path : '', redirectTo : '/bugs', pathMatch : 'full'},
    {path : 'add', component : BugEditComponent},
    {path : 'details/:id', component : BugDetailsComponent},
    {path : 'bugs', component : BugTrackerComponent}
]

@NgModule({
  declarations: [
    AppComponent
    , BugTrackerComponent
    , ClosedCountPipe
    , BugStatsComponent
    , BugEditComponent
    , BugDetailsComponent
  ],
  imports: [
    BrowserModule
    , FormsModule
    , UtilsModule
    , HttpModule
    , RouterModule.forRoot(routes)
  ],
  providers: [
  	BugOperationsService
    , BugStorageService
    , BugServerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
