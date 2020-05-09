import { Component, OnInit, Input } from "@angular/core";
import { Hotel } from "../hotel.model";

@Component({
  selector: "app-hotel-thumb",
  templateUrl: "./hotel-thumb.component.html",
  styleUrls: ["./hotel-thumb.component.scss"],
})
export class HotelThumbComponent implements OnInit {
  @Input() hotel: Hotel;
  @Input() index: number;

  hotelName: string = "Sheraton";
  hotelLocation: string = "Kampala";
  hotelPric: string = "";
  constructor() {}

  ngOnInit() {}

  onSelectHotel(event: Event) {
    this.hotelPric = (<HTMLInputElement>event.target).value;
  }
}
