import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/core/services/user.service';
import { PasswordVerifyErrorMatcher, passwordMatcher } from 'src/app/core/validators/passwordMatcher';
import { securePassword } from 'src/app/core/validators/securePassword';
import { RegisterCredentials } from 'src/app/core/models/RegisterCredentials';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {
  @Output() registerError: EventEmitter<string> = new EventEmitter<string>();
  @Output() registerOk: EventEmitter<string> = new EventEmitter<string>();

  constructor(private fb: FormBuilder, private userService: UserService) { }
  registerForm: FormGroup;
  verifyPasswordMatcher = new PasswordVerifyErrorMatcher();
  isSaving = false;

  ngOnInit() {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6), securePassword]],
      verifyPassword:  ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      address: this.fb.group({
        country: ['', Validators.required],
        city: ['', Validators.required],
        streetAddress: ['', Validators.required],
        postCode: ['', Validators.required]
      })
    }, {validators: passwordMatcher});
  }

  registerUser(registerForm: RegisterCredentials) {
    if (this.registerForm.valid) {
      this.isSaving = true;
      this.userService.post('register', registerForm).subscribe(
        ok => {
          this.registerOk.emit('Account was created successfully. Please log in.');
          this.isSaving = false;
        },
        error => {
          this.registerError.emit(error);
          this.isSaving = false;
        }
      );
    }
  }

  hasError(controlName: string, errorName: string): boolean {
    return this.registerForm.controls[controlName].hasError(errorName);
  }

  hasErrorCrossField(errorName: string): boolean {
    return this.registerForm.hasError(errorName);
  }
}
