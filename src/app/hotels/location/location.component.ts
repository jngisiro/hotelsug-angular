import { Component, OnInit, Input } from "@angular/core";
import { HotelLocation } from "../location.model";
import { HotelDataService } from "src/app/services/hotelData.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-location",
  templateUrl: "./location.component.html",
  styleUrls: ["./location.component.scss"],
})
export class LocationComponent implements OnInit {
  @Input() location: HotelLocation;
  hotels;
  loading = false;

  constructor(private router: Router) {}

  ngOnInit() {}

  onSelect(location) {
    this.router.navigate(["hotels", location]);
  }
}
