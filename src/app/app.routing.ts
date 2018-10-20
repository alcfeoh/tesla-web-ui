import {LoginComponent} from './login/login.component';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {CurrentStateComponent} from './current-state/current-state.component';
import {LocationComponent} from './location/location.component';
import {CommandsComponent} from './commands/commands.component';
import {LoginGuard} from './login.guard';

const routes: Routes = [
  {
    path: 'login', component: LoginComponent
  },
  {
    path: '',
    component: DashboardComponent,
    canActivate: [LoginGuard],
    children: [
      {path: 'state', component: CurrentStateComponent},
      {path: 'location', component: LocationComponent},
      {path: 'commands', component: CommandsComponent}
    ]


  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule {
}
