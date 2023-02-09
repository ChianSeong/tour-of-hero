import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; //import to have route capability
import { HeroesComponent } from './heroes/heroes.component'; 
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }, //default route
  { path: 'dashboard', component: DashboardComponent }, // route to the destination based on selected path
  { path: 'heroes', component: HeroesComponent },
  { path: 'detail/:id', component: HeroDetailComponent } // path that included ID
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], //import array and configure / forRoot() suppliees the service providers and directives for routing 
  exports: [RouterModule]
})
export class AppRoutingModule { }
