import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule }from '@angular/common/http'
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MoviesComponent } from './movies/movies.component';
import { TvComponent } from './tv/tv.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PeopleComponent } from './people/people.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeheaderComponent } from './homeheader/homeheader.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { MoviedetailsComponent } from './moviedetails/moviedetails.component';
import { FooterComponent } from './footer/footer.component';
import { TvdetailsComponent } from './tvdetails/tvdetails.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    MoviesComponent,
    TvComponent,
    RegisterComponent,
    LoginComponent,
    NavbarComponent,
    NotFoundComponent,
    PeopleComponent,
    HomeheaderComponent,
    MoviedetailsComponent,
    FooterComponent,
    TvdetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
