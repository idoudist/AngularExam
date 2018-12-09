import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/Forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PartiesComponent } from './components/parties/parties.component';
import { DetailsPartyComponent } from './components/details-party/details-party.component';
import { DoctorComponent } from './components/doctor/doctor.component';
import { routing } from './app.routing';
import { WelcomeComponent } from './components/welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    PartiesComponent,
    DetailsPartyComponent,
    DoctorComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule, FormsModule , HttpModule , routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
