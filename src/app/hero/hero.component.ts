import { Component, OnInit } from "@angular/core";
import { HotelDataService } from "../services/hotelData.service";
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-hero",
  templateUrl: "./hero.component.html",
  styleUrls: ["./hero.component.scss"],
})
export class HeroComponent implements OnInit {
  constructor(private data: HotelDataService, private router: Router) {}

  ngOnInit() {}

  onSearch(form: NgForm) {
    if (form.value.name || form.value.location || form.value.type) {
      this.router.navigate(["search"], { queryParams: form.value });
    }
  }
}
