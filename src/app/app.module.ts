import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { UsersComponent } from './components/users/users.component';
import { UserComponent } from './components/user/user.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { PlaceholderComponent } from './components/placeholder/placeholder.component';
import { UserService } from './services/user/user.service';
import { ParentComponent } from './components/parent/parent.component';
import { OneComponent } from './components/one/one.component';
import { TwoComponent } from './components/two/two.component';
import { BuiltInStrDirComponent } from './components/built-in-str-dir/built-in-str-dir.component';
import { BuiltInAttrDirComponent } from './components/built-in-attr-dir/built-in-attr-dir.component';
import { ChangeCaseDirective } from './directives/change-case/change-case.directive';
import { DirectiveHostComponent } from './components/directive-host/directive-host.component';
import { UnlessDirective } from './directives/unless/unless.directive';
import { AppendorPipe } from './pipes/appendor/appendor.pipe';
import { FilterPipe } from './pipes/filter/filter.pipe';
import { NewUserComponent } from './components/new-user/new-user.component';
import { NewUserReactiveComponent } from './components/new-user-reactive/new-user-reactive.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UsersComponent,
    UserComponent,
    UserDetailsComponent,
    PlaceholderComponent,
    ParentComponent,
    OneComponent,
    TwoComponent,
    BuiltInStrDirComponent,
    BuiltInAttrDirComponent,
    ChangeCaseDirective,
    DirectiveHostComponent,
    UnlessDirective,
    AppendorPipe,
    FilterPipe,
    NewUserComponent,
    NewUserReactiveComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ UserService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
