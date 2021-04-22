import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/core/services/user.service';
import { LoginCredentials } from 'src/app/core/models/LoginCredentials';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  @Output() loginError: EventEmitter<string> = new EventEmitter<string>();
  @Output() loginOk: EventEmitter<string> = new EventEmitter<string>();

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) { }
  loginForm: FormGroup;
  isSaving = false;

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  loginUser(loginForm: LoginCredentials) {
    if (this.loginForm.valid) {
      this.isSaving = true;
      this.userService.login(loginForm).subscribe(
        ok => {
          this.loginOk.emit('User logged in sucessfully.');
          this.isSaving = false;
          this.router.navigate(['/home']);
        },
        error => {
          this.loginError.emit(error);
          this.isSaving = false;
        }
      );
    }
  }

  hasError(controlName: string, errorName: string ): boolean {
    return this.loginForm.controls[controlName].hasError(errorName);
  }
}
