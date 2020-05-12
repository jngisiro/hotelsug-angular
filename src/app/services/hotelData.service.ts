import { Injectable } from "@angular/core";
import { Hotel } from "../hotels/hotel.model";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map, take, exhaustMap, catchError } from "rxjs/operators";
import { AuthService } from "./auth.service";
import { domain, local } from "./url.service";

@Injectable()
export class HotelDataService {
  constructor(private http: HttpClient, private auth: AuthService) {}

  getHotels() {
    return this.http.get(domain + "/api/v1/hotel").pipe(
      map((hotels: any) => {
        return hotels.data;
      })
    );
  }

  getHotelById(id: number): Hotel {
    return;
  }

  registerHotel(hotel: Hotel) {
    return this.http.post(domain + "/api/v1/hotel", hotel);
  }

  getUsersBookedHotels(token: string) {
    return this.auth.user.pipe(
      take(1),
      exhaustMap((user) => {
        return this.http.get(domain + "/api/v1/user/myhotels", {
          headers: new HttpHeaders({
            authorization: "bearer " + user.gettoken,
          }),
        });
      })
    );
  }

  // LOCATIONS DATA

  getLocations() {
    return this.http.get(domain + "/api/v1/locations").pipe(
      map((locations: any) => {
        return locations.data;
      })
    );
  }

  createLocation(name, url) {
    return this.http.post(domain + "/api/v1/locations", {
      name,
      imageUrl: url,
    });
  }

  imageUpload() {
    return this.http.get(domain + "/api/v1/hotel/upload-hotel-image");
  }
}
