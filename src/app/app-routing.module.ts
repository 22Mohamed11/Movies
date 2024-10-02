import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MoviesComponent } from './movies/movies.component';
import { NetworkComponent } from './network/network.component';
import { TvComponent } from './tv/tv.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PeopleComponent } from './people/people.component';
import { authGuard } from './auth.guard';
import { MoviedetailsComponent } from './moviedetails/moviedetails.component';
import { TvdetailsComponent } from './tvdetails/tvdetails.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',canActivate:[authGuard],component:HomeComponent},
  {path:'about',canActivate:[authGuard],component:AboutComponent},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'movies',canActivate:[authGuard],component:MoviesComponent},
  {path:'network',canActivate:[authGuard],component:NetworkComponent},
  {path:'tv',canActivate:[authGuard],component:TvComponent},
  {path:'people',canActivate:[authGuard],component:PeopleComponent},
  {path:'moviedetails/:id',canActivate:[authGuard],component:MoviedetailsComponent},
  {path:'tvdetails/:id',canActivate:[authGuard],component:TvdetailsComponent},
  {path:'**',component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
