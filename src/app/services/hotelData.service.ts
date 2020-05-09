import { Injectable } from "@angular/core";
import { Hotel } from "../hotels/hotel.model";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map, take, exhaustMap } from "rxjs/operators";
import { AuthService } from "./auth.service";

@Injectable()
export class HotelDataService {
  constructor(private http: HttpClient, private auth: AuthService) {}

  getHotels() {
    return this.http.get("https://hotelsug.herokuapp.com/api/v1/hotel").pipe(
      map((hotels: any) => {
        return hotels.data;
      })
    );
  }

  getHotelById(id: number): Hotel {
    return;
  }

  registerHotel(hotel: Hotel) {
    return;
  }

  getUsersBookedHotels(token: string) {
    return this.auth.user.pipe(
      take(1),
      exhaustMap((user) => {
        return this.http.get(
          "https://hotelsug.herokuapp.com/api/v1/user/myhotels",
          {
            headers: new HttpHeaders({
              authorization: "bearer " + user.gettoken,
            }),
          }
        );
      })
    );
  }
}
