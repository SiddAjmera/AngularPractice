import { NewUserReactiveComponent } from './../components/new-user-reactive/new-user-reactive.component';
import { NewUserComponent } from './../components/new-user/new-user.component';
import { DirectiveHostComponent } from './../components/directive-host/directive-host.component';
import { BuiltInAttrDirComponent } from './../components/built-in-attr-dir/built-in-attr-dir.component';
import { BuiltInStrDirComponent } from './../components/built-in-str-dir/built-in-str-dir.component';
import { ParentComponent } from './../components/parent/parent.component';
import { UserDetailsComponent } from './../components/user-details/user-details.component';
import { UsersComponent } from './../components/users/users.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlaceholderComponent } from '../components/placeholder/placeholder.component';

const appRoutes: Routes = [
  { path: 'users', component: UsersComponent, children: [
    { path: ':id', component: UserDetailsComponent },
    { path: '', component: PlaceholderComponent },
  ] },
  { path: 'parent', component: ParentComponent },
  { path: 'new-user', component: NewUserComponent },
  { path: 'new-user-reactive', component: NewUserReactiveComponent },
  { path: 'str-dir', component: BuiltInStrDirComponent },
  { path: 'attr-dir', component: BuiltInAttrDirComponent },
  { path: 'directives', component: DirectiveHostComponent },
  { path: '', redirectTo: '/users', pathMatch: 'full' },
  { path: '**', redirectTo: '/users', pathMatch: 'full'  }
];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
