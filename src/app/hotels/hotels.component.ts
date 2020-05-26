import { Component, OnInit } from "@angular/core";
import { HotelDataService } from "../services/hotelData.service";
import { ActivatedRoute } from "@angular/router";
import { Hotel } from "./hotel.model";

@Component({
  selector: "app-hotels",
  templateUrl: "./hotels.component.html",
  styleUrls: ["./hotels.component.scss"],
})
export class HotelsComponent implements OnInit {
  location: string;
  hotels: Hotel[];
  loading = false;
  constructor(private hs: HotelDataService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.loading = true;
    this.route.params.subscribe((params) => {
      this.location = params["location"];
      this.hs.getHotels(params["location"]).subscribe(
        (response) => {
          this.loading = false;
          this.hotels = response;
          console.log(response);
        },
        (err) => {
          this.loading = false;
          console.log(err);
        }
      );
    });
  }
}
