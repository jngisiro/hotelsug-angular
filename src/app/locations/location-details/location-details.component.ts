import { Component, OnInit } from "@angular/core";
import { HotelDataService } from "src/app/services/hotelData.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-location-details",
  templateUrl: "./location-details.component.html",
  styleUrls: ["./location-details.component.scss"],
})
export class LocationDetailsComponent implements OnInit {
  loading = false;
  locations: [];

  constructor(private data: HotelDataService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.loading = true;
    this.route.params.subscribe((params: any) => {
      this.data.getLocations(params["id"]).subscribe(
        (response) => {
          this.locations = response.locations;
          this.loading = false;
          console.log(response);
        },

        (err) => {
          console.log(err);
          this.loading = false;
        }
      );
    });
  }
}
