import { Component, OnInit } from "@angular/core";
import { HotelDataService } from "../services/hotelData.service";

@Component({
  selector: "app-locations",
  templateUrl: "./locations.component.html",
  styleUrls: ["./locations.component.scss"],
})
export class LocationsComponent implements OnInit {
  locations;

  constructor(private hotelService: HotelDataService) {}

  ngOnInit() {
    this.hotelService.getLocations().subscribe(
      (locations) => console.log(locations),
      (err) => console.log(err)
    );
  }
}
