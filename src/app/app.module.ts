import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileFormComponent } from './profile-form/profile-form.component';
import { SettingsComponent } from './settings/settings.component';
import { PaginationSettingsComponent } from './pagination-settings/pagination-settings.component';
import { SettingsInitialComponent } from './settings/settings-initial.component';
import { SettingsAdditionalComponent } from './settings/settings-additional.component';
import { ExampleComponent } from './example/example.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileFormComponent,
    SettingsInitialComponent,
    PaginationSettingsComponent,
    SettingsAdditionalComponent,
    ExampleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
