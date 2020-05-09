import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { Hotel } from "../hotel.model";
import { HotelDataService } from "src/app/services/hotelData.service";

@Component({
  selector: "app-hotel-details",
  templateUrl: "./hotel-details.component.html",
  styleUrls: ["./hotel-details.component.scss"],
})
export class HotelDetailsComponent implements OnInit {
  hotelAmenities: string[] = ["tv", "bath", "parking"];
  hasAmenities: boolean = false;
  hotel: Hotel;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private hotelService: HotelDataService
  ) {
    this.hasAmenities = Math.random() > 0.5 ? true : false;
  }

  ngOnInit() {
    this.hotel = this.hotelService.getHotelById(
      this.route.snapshot.params["id"]
    );

    this.route.params.subscribe(
      (params: Params) =>
        (this.hotel = this.hotelService.getHotelById(params["id"]))
    );
  }

  getColor() {
    return this.hasAmenities ? "green" : "red";
  }

  onBooked() {
    this.router.navigate(["/"]);
  }
}
