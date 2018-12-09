import { Component, OnInit, ModuleWithProviders } from '@angular/core';
import { RouterModule , Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { PartiesComponent } from './components/parties/parties.component';
import { DoctorComponent } from './components/doctor/doctor.component';
import { WelcomeComponent } from './components/welcome/welcome.component';



const appRoutes: Routes = [
    {
        path : '' ,
        component : WelcomeComponent
        // component : UserFormsComponent
    }
    ,
    {
        path : 'doctor' ,
        component : DoctorComponent
    }
    ,
    {
        path : 'party' ,
        component : PartiesComponent
    }
    ,

    {
        path : '' ,
        redirectTo : '/' ,
        pathMatch : 'full'
    }
    ,
    {
        path : '**' ,
        component : AppComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
