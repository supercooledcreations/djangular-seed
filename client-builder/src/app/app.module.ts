// Angular
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

// Third Party
import { CookieService } from 'ngx-cookie-service';

// App
import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { TokenInterceptor } from './services/accounts/token.interceptor';
import { AccountLoginComponent } from './components/account-login/account-login.component';


@NgModule({
  declarations: [
    AppComponent,
    AccountLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    CookieService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },],
  bootstrap: [AppComponent]
})
export class AppModule { }
