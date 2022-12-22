import { UsersComponent } from './contentComponents/users/users.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserResolve } from './contentComponents/users/userResolver';


const routes: Routes = [
  {path: '', component: UsersComponent
  , resolve: { userResolve : UserResolve }
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

