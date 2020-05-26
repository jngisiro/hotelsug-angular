import { Component, OnInit } from "@angular/core";
import { HotelDataService } from "../services/hotelData.service";

@Component({
  selector: "app-locations",
  templateUrl: "./locations.component.html",
  styleUrls: ["./locations.component.scss"],
})
export class LocationsComponent implements OnInit {
  locations;
  loading = false;

  constructor(private hotelService: HotelDataService) {}

  ngOnInit() {
    this.loading = true;
    this.hotelService.getLocations(null).subscribe(
      (locations) => {
        this.loading = false;
        this.locations = locations.locations;
      },
      (err) => {
        this.loading = false;
        console.log(err);
      }
    );
  }
}
