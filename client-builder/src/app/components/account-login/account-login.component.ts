import { Component, OnInit, OnDestroy } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { FormControl, FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { AccountsService } from '../../services/accounts/accounts.service';
import { StandardLogin, StandardUser} from '../../services/accounts/models';
// import { EmailLogin, EmailUser} from '../../services/accounts/models';

@Component({
  selector: 'app-account-login',
  templateUrl: './account-login.component.html',
  styleUrls: ['./account-login.component.css']
})
export class AccountLoginComponent implements OnInit, OnDestroy {

  loginForm: FormGroup;
  errorMessages: string;
  
  constructor(
    private formBuilder: FormBuilder,
    private accountsService: AccountsService
  ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      'username': ['', Validators.required],
      'password': ['', Validators.required]
    });
  }

  onSubmit(loginForm: FormGroup) {
    let standardLogin = new StandardLogin(
      loginForm.value['username'],
      loginForm.value['password'],
    )
    this.accountsService.requestLogin(standardLogin).subscribe(
      data => {this.accountsService.successLogin(data),
      errors => {this.errorMessages = errors.statusText}
    }
    )
  }

  ngOnDestroy() {

  }

}
