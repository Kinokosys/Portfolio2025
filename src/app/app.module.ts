import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GeneralComponent } from './components/general/general.component';
import { SavonComponent } from './components/savon/savon.component';
import { AventureComponent } from './components/aventure/aventure.component';

@NgModule({
  declarations: [
    AppComponent,
    GeneralComponent,
    SavonComponent,
    AventureComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
