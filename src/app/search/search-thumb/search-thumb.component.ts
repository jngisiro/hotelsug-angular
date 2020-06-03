import { Component, OnInit, Input } from "@angular/core";
import { Hotel } from "src/app/hotels/hotel.model";
import { Router } from "@angular/router";

@Component({
  selector: "app-search-thumb",
  templateUrl: "./search-thumb.component.html",
  styleUrls: ["./search-thumb.component.scss"],
})
export class SearchThumbComponent implements OnInit {
  @Input() hotel: Hotel;

  constructor(private router: Router) {}

  ngOnInit() {}

  onSelect() {
    this.router.navigate(["hotel", this.hotel.id]);
  }
}
