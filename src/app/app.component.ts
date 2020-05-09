import { Component, OnInit } from "@angular/core";
import { LoggingService } from "./services/logging.service";
import { AuthService } from "./services/auth.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  providers: [LoggingService],
})
export class AppComponent implements OnInit {
  constructor(private auth: AuthService) {}

  title = "hotels.ug";

  ngOnInit() {
    this.auth.autoLogin();
  }
}
