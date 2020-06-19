import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { CanComponentDeactivate } from "./can-deactivate.service";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Observable } from "rxjs";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"],
})
export class RegisterComponent implements OnInit, CanComponentDeactivate {
  changesSaved: boolean = false;
  registerForm: FormGroup;
  loading: boolean = false;
  hasRegistered = false;
  date = Date.now();
  confirmEmail: string = "";

  constructor(private router: Router, private auth: AuthService) {}

  ngOnInit() {
    this.registerForm = new FormGroup({
      firstname: new FormControl(null, Validators.required),
      lastname: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, this.validDateEmail]),
      phone: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
      ]),
      passwordConfirm: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }

  onRegistered() {
    this.loading = true;
    // this.router.navigate(["/l"]);
    this.auth.registerUser(this.registerForm.value).subscribe(
      (response) => {
        this.hasRegistered = true;
        console.log(this.registerForm.value);
        this.confirmEmail = this.registerForm.value.email;
        this.loading = false;
        this.registerForm.reset();
        this.changesSaved = true;
      },
      (error) => {
        console.log(error);
        this.loading = false;
      }
    );
  }

  canDeactivate() {
    return true;
  }

  validDateEmail(control: FormControl): { [s: string]: boolean } {
    const isValidEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
      control.value
    );

    if (!isValidEmail) return { emailIsInvalid: true };
    return null;
  }

  checkEmailAvailability(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === "paul_4400@hotmail.com") {
          console.log("Invalid");
          resolve({ emailIsUnavailable: true });
        } else {
          resolve(null);
        }
      }, 1000);
    });

    return promise;
  }
}
