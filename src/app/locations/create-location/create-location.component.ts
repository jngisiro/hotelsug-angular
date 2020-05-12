import { Component, OnInit } from "@angular/core";
import { HotelDataService } from "src/app/services/hotelData.service";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-create-location",
  templateUrl: "./create-location.component.html",
  styleUrls: ["./create-location.component.scss"],
})
export class CreateLocationComponent implements OnInit {
  loading: boolean = false;
  constructor(private hotelService: HotelDataService) {}

  ngOnInit() {}

  onSubmit(form: NgForm) {
    const { name, imgUrl } = form.value;
    this.hotelService.imageUpload().subscribe(
      (response) => console.log(response),
      (err) => console.log(err)
    );
  }
}
