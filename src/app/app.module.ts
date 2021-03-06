import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { demoComponent } from './components/demo/demo.component';
import { HttpClientModule } from '@angular/common/http';
import { HashLocationStrategy } from '@angular/common';
import { SearchComponent } from './components/search/search.component';
import { RoutertestComponent } from './routertest/routertest.component';
import { PipeimplementComponent } from './pipes/pipeimplement/pipeimplement.component';
import { PipeImplementation } from './pipes/pipeimplement/customePipe';
import { customeDirective } from './pipes/pipeimplement/directive';
import { DropdownComponent } from './dropdown/dropdown.component';
import { DropdownusingserviceComponent } from './dropdownusingservice/dropdownusingservice.component';

import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    demoComponent,
    SearchComponent,
    RoutertestComponent,
    PipeimplementComponent,
    PipeImplementation,
    customeDirective,
    DropdownComponent,
    DropdownusingserviceComponent,


  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,

    ReactiveFormsModule
  ],
  providers: [],
  // {provide:LocationStrategy,useClass:HashLocationStrategy}
  bootstrap: [AppComponent]
})
export class AppModule { }
