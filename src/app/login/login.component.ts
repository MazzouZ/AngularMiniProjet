import {Component, OnInit} from '@angular/core';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';

interface Reponse {
  access: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  private mz = 69;

  constructor(private authService: AuthService, private route: Router) {
  }

  ngOnInit() {

  }

  onLogin(f) {
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
