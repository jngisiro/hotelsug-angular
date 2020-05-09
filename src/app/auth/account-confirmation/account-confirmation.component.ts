import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-account-confirmation',
  templateUrl: './account-confirmation.component.html',
  styleUrls: ['./account-confirmation.component.scss']
})
export class AccountConfirmationComponent implements OnInit {
  user: User;

  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.auth.user.subscribe(user => {
      this.user = user;
    })
  }

}
