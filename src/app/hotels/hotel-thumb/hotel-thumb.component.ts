import { Component, OnInit, Input } from "@angular/core";
import { Hotel } from "../hotel.model";
import { Router } from "@angular/router";

@Component({
  selector: "app-hotel-thumb",
  templateUrl: "./hotel-thumb.component.html",
  styleUrls: ["./hotel-thumb.component.scss"],
})
export class HotelThumbComponent implements OnInit {
  @Input() hotel: Hotel;
  price;

  constructor(private router: Router) {}

  ngOnInit() {
    this.price = Math.floor(Math.random() * 200)
  }

  onSelectHotel() {
    this.router.navigate(["hotel", this.hotel.id]);
  }
}
