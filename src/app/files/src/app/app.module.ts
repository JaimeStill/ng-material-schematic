import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';

import {
  RouteComponents,
  Routes
} from './routes';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './material.module';
import { AppComponent } from './app.component';

import { Components } from './components';
import { Dialogs } from './dialogs';
import { Directives } from './directives';
import { Forms } from './forms';
import { Pipes } from './pipes';

@NgModule({
  declarations: [
    AppComponent,
    ...Components,
    ...Dialogs,
    ...Directives,
    ...Forms,
    ...Pipes,
    ...RouteComponents
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule,
    RouterModule.forRoot(Routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
