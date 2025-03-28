import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeneralComponent } from './components/general/general.component';
import { AventureComponent } from './components/aventure/aventure.component';
import { SavonAPIComponent } from './components/savon-api/savon-api.component';
import { SavonAPPComponent } from './components/savon-app/savon-app.component';

const routes: Routes = [
  { path: '', component: GeneralComponent },
  { path: 'aventure', component: AventureComponent },
  { path: 'savon-api', component: SavonAPIComponent },
  { path: 'savon-app', component: SavonAPPComponent },
  { path: '**', redirectTo: '' } // Redirige vers l'accueil si la route est inconnue
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
