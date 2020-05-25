import { Component, OnInit } from "@angular/core";
import { Hotel } from "../hotel.model";
import { HotelDataService } from "src/app/services/hotelData.service";
import { HotelLocation } from "../location.model";

@Component({
  selector: "app-hotel-list",
  templateUrl: "./hotel-list.component.html",
  styleUrls: ["./hotel-list.component.scss"],
})
export class HotelListComponent implements OnInit {
  hotels;
  loading = true;
  error = null;
  locations: HotelLocation[] = [
    {
      name: "Kampala",
      imgSrc: "../../../assets/img/kampala.jpg",
      hotels: [],
    },
    {
      name: "Fortportal",
      imgSrc: "../../../assets/img/fortportal.jpg",
      hotels: [],
    },
    {
      name: "Mbarara",
      imgSrc: "../../../assets/img/mbarara.jpg",
      hotels: [],
    },
    {
      name: "Jinja",
      imgSrc: "../../../assets/img/jinja.jpg",
      hotels: [],
    },
    {
      name: "Entebbe",
      imgSrc: "../../../assets/img/entebbe.jpg",
      hotels: [],
    },
  ];

  constructor(private hs: HotelDataService) {}

  ngOnInit() {
    this.hs.getHotels(null).subscribe(
      (hotels) => {
        this.hotels = hotels;
        this.loading = false;
      },
      (err) => {
        this.error = err;
      }
    );
  }
}
