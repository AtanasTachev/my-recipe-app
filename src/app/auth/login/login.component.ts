import { Component, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth.service';
import { MessageBusService, MessageType } from 'src/app/core/message-bus.service';
import { IAuthModuleState } from '../+store';
import { initializeLoginState, loginProcessError, startLoginProcess } from '../+store/actions';
import { loginErrorMessageSelector, loginIsLoginPendingSelector } from '../+store/selectors';
// import { emailValidator } from '../util';

const myRequired = (control: AbstractControl) => {
  return Validators.required(control);
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit , OnDestroy{

  errorMessage$: Observable<string> = this.store.select(loginErrorMessageSelector);
  isLoginPending$: Observable<boolean> = this.store.select(loginIsLoginPendingSelector);

  // errorMessage: string = '';

  loginFormGroup: FormGroup = this.formBuilder.group({
    username: new FormControl('', {validators: [myRequired], updateOn: 'submit' }),
    password: new FormControl('', [Validators.required, Validators.minLength(5)])
  });

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private store: Store<IAuthModuleState>,
    private messageBus: MessageBusService,
    private router: Router,
    private activatedRoute: ActivatedRoute
    ) { }
  

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.store.dispatch(initializeLoginState());
  }

  handleLogin(): void {
    // this.errorMessage = '';
    this.store.dispatch(startLoginProcess());
    this.authService.login$(this.loginFormGroup.value).subscribe({
      next: () => {
        if (this.activatedRoute.snapshot.queryParams['redirect-to']) {
          this.router.navigateByUrl(this.activatedRoute.snapshot.queryParams['redirect-to'])
        } else {
          this.router.navigate(['/home']);
        }
        this.messageBus.notifyForMessage({ text: 'User successfully logged in!', type: MessageType.Success })
      },
      complete: () => {
        console.log('login stream completed')
      },
      error: (err) => {
        // this.errorMessage = err.error.message;
        this.store.dispatch(loginProcessError({ errorMessage: err.error.message }))
      }
    });
  }

}
