import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExampleComponent } from './example/example.component';
import { SettingsAdditionalComponent } from './settings/settings-additional.component';
import { SettingsInitialComponent } from './settings/settings-initial.component';

const routes: Routes = [
  {
    path: '0',
    component: ExampleComponent
  },
  {
    path: '1',
    component: SettingsInitialComponent
  },
  {
    path: '2',
    component: SettingsAdditionalComponent
  },
  {
    path: '',
    redirectTo: '1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
