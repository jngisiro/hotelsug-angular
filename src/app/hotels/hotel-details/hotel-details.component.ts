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
  hotel;
  loading: boolean = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private hotelService: HotelDataService
  ) {
    this.hasAmenities = Math.random() > 0.5 ? true : false;
  }

  ngOnInit() {
    this.loading = true;
    this.route.params.subscribe((params: Params) =>
      this.hotelService.getHotelById(params["id"]).subscribe(
        (response: any) => {
          console.log(response);
          this.loading = false;
          this.hotel = response.data.hotel;
        },

        (err) => {
          console.log(err);
          this.loading = false;
        }
      )
    );
  }

  getColor() {
    return this.hasAmenities ? "green" : "red";
  }

  onBooked() {
    this.router.navigate(["/"]);
  }
}
