import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { HotelDataService } from "../services/hotelData.service";
import { Hotel } from "../hotels/hotel.model";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.scss"],
})
export class SearchComponent implements OnInit {
  results: Hotel[];
  loading: boolean = false;
  constructor(private route: ActivatedRoute, private data: HotelDataService) {}

  ngOnInit() {
    this.loading = true;
    this.route.queryParams.subscribe((queryParams) => {
      let query = {};
      Object.keys(queryParams).forEach((key) => {
        if (queryParams[key] !== "") {
          query[key] = queryParams[key];
        }
      });

      this.data.getHotelsParams(query).subscribe(
        (response: any) => {
          this.results = response.data;
          console.log(this.results);
          this.loading = false;
        },
        (err) => {
          this.loading = false;
          console.log(err);
        }
      );
    });
  }

  onSearch() {}
}
