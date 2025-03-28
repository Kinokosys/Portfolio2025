import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GeneralComponent } from './components/general/general.component';
import { AventureComponent } from './components/aventure/aventure.component';
import { SavonAPIComponent } from './components/savon-api/savon-api.component';
import { SavonAPPComponent } from './components/savon-app/savon-app.component';

@NgModule({
  declarations: [
    AppComponent,
    GeneralComponent,
    AventureComponent,
    SavonAPIComponent,
    SavonAPPComponent
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
