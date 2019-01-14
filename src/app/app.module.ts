import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SearchFilterComponent } from './search-filter/search-filter.component';
import { SearchHeroesPipe } from './search-heroes.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SearchFilterComponent,
    SearchHeroesPipe
  ],
  imports: [
    BrowserModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
