import { Component, OnInit, OnDestroy } from "@angular/core";
import { interval, Subscription, Observable } from "rxjs";
import { map, filter } from "rxjs/operators";
import { AuthService } from "src/app/services/auth.service";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit, OnDestroy {
  private sub: Subscription;
  loading: boolean = false;
  error: string = null;
  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit() {}

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

  onSubmit(form: NgForm) {
    if (form.invalid) {
      return;
    }

    const { email, password } = form.value;
    this.loading = true;
    this.sub = this.auth.loginUser(email, password).subscribe(
      (response) => {
        this.loading = false;
        this.router.navigate([""]);
      },
      (err) => {
        this.loading = false;
        this.error = err.error.error;
      }
    );
  }
}
