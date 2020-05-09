import { Component, OnInit, Input } from "@angular/core";
import { HotelLocation } from "../location.model";

@Component({
  selector: "app-location",
  templateUrl: "./location.component.html",
  styleUrls: ["./location.component.scss"],
})
export class LocationComponent implements OnInit {
  @Input() location: HotelLocation;

  constructor() {}

  ngOnInit() {}
}
