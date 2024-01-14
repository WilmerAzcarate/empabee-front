import { Component, OnDestroy, OnInit } from '@angular/core';
import { CoreService } from '../../../shared/services/core.service';
import { Subscription, catchError, tap, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { FormControl, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent implements OnInit, OnDestroy {

  loginSubscription: Subscription;

  loginForm:UntypedFormGroup;

  constructor(
    private _coreService: CoreService,
    private _formBuilder:UntypedFormBuilder,
    private router: Router
  ) {
    this.loginForm = {} as UntypedFormGroup;
    this.loginSubscription = new Subscription();
    this.buildForm();
  }
  ngOnDestroy(): void {
    this.loginSubscription.unsubscribe();
  }
  ngOnInit(): void {
    if (!!(this._coreService.profile)) {
      console.log(!!(this._coreService.profile));
      
      this.router.navigate(['/blog/home']);
    }
  }

  get txtEmail() {
    return this.loginForm.get('email') as FormControl;
  }

  get txtPassword(){
    return this.loginForm.get('password') as FormControl;
  }

  buildForm(){
    this.loginForm = this._formBuilder.group({
      email:[
        '',
        [
          Validators.email
        ]
      ],
      password:[
        ''
      ]
    });
  }

  login() {
    let email = this.txtEmail?.value||"";
    let password = this.txtPassword?.value||"";
    this.loginSubscription = this._coreService.login(email,password)
      .pipe(
        tap(()=>{
          this.router.navigate(['/blog/home']);
        })
      ).subscribe();
  }

}
