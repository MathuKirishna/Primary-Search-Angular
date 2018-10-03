import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FooterComponent } from './footer/footer.component';

import {RouterModule,Routes} from '@angular/router';
import { SecondarynavbarComponent } from './secondarynavbar/secondarynavbar.component';
import { PrimarysearchbarComponent } from './primarysearchbar/primarysearchbar.component';
import { AdvancedsearchbarComponent } from './advancedsearchbar/advancedsearchbar.component';

const appRoutes:Routes = [
  {path:'',component:HomepageComponent},
  {path:'search',component:PrimarysearchbarComponent },
  {path:'advancedsearch',component:AdvancedsearchbarComponent },
  {path:'signup',component: SignupComponent  },
  
]

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    NavbarComponent,
    HomepageComponent,
    FooterComponent,
    SecondarynavbarComponent,
    PrimarysearchbarComponent,
    AdvancedsearchbarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
