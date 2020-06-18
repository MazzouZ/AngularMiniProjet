import {Component, OnInit} from '@angular/core';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';
import {FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material';

interface Reponse {
  access: string;
}
interface User {
  username: string;
  email: string;
  password: string;
  password2: string;
}
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  formGroup :FormGroup;

  matcher = new MyErrorStateMatcher();

  private mz = 69;
  private registerMode = false;
  private user:User={ username : "",
                      email: "",
                      password: "",
                      password2: ""
                    };

  constructor(private authService: AuthService, private route: Router) {
  }

  ngOnInit() {
    this.formGroup = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.maxLength(8)]),
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', [Validators.required,Validators.minLength(4)]),
      password2: new FormControl('', [Validators.required,Validators.minLength(4)]),
    });
  }

  onLogin(f) {
    if (this.registerMode) {
      this.registerMode = false;
    } else {
      this.authService.login(f).subscribe(
        (myResponse: Reponse) => {
          this.authService.saveToken(myResponse.access);
          this.route.navigateByUrl('/medicaments');
        }, error => {
          this.mz = 89;
          setTimeout(() => {
            this.mz = 69;
          }, 4000);
        });
    }

  }

  onRegister(f) {
    if (!this.registerMode) {
      this.registerMode = true;
    } else {
      this.authService.register(f).subscribe(
        (myResponse: Reponse) => {
          this.authService.saveToken(myResponse.access);
          this.route.navigateByUrl('/medicaments');
        }, error => {
          this.mz = 39;
          setTimeout(() => {
            this.mz = 69;
          }, 4000);
        });
    }
  }
}
