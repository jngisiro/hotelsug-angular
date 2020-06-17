import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavigationComponent } from "./navigation/navigation.component";
import { HotelThumbComponent } from "./hotels/hotel-thumb/hotel-thumb.component";
import { HotelDetailsComponent } from "./hotels/hotel-details/hotel-details.component";
import { HotelListComponent } from "./hotels/hotel-list/hotel-list.component";
import { HotelDataService } from "./services/hotelData.service";
import { LocationComponent } from "./hotels/location/location.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { AuthService } from "./services/auth.service";
import { AuthGuard } from "./services/auth-guard.service";
import { RegisterComponent } from "./auth/register/register.component";
import { LoginComponent } from "./auth/login/login.component";
import { CanDeactivateGuard } from "./auth/register/can-deactivate.service";
import { Summarise } from "./hotels/hotel-list/summarise.pipe";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { LoadingComponent } from "./loading/loading.component";
import { AuthInterceptor } from "./services/authInterceptor.service";
import { BookingsComponent } from "./hotels/bookings/bookings.component";
import { FavouritesComponent } from "./hotels/favourites/favourites.component";
import { AccountConfirmationComponent } from "./auth/account-confirmation/account-confirmation.component";
import { ForgotPasswordComponent } from "./auth/forgot-password/forgot-password.component";
import { ResetPasswordComponent } from "./auth/reset-password/reset-password.component";
import { LocationDetailsComponent } from "./locations/location-details/location-details.component";
import { LocationsComponent } from "./locations/locations.component";
import { HotelsComponent } from "./hotels/hotels.component";
import { BookComponent } from "./book/book.component";
import { CreateLocationComponent } from "./locations/create-location/create-location.component";
import { CreateHotelComponent } from "./hotels/create-hotel/create-hotel.component";
import { HeroComponent } from "./hero/hero.component";
import { FooterComponent } from "./footer/footer.component";
import { SearchComponent } from "./search/search.component";
import { SearchThumbComponent } from "./search/search-thumb/search-thumb.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "./material/material.module";
import { MatSnackBarModule, MatSnackBar } from "@angular/material";

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HotelThumbComponent,
    HotelDetailsComponent,
    HotelListComponent,
    LocationComponent,
    PageNotFoundComponent,
    RegisterComponent,
    LoginComponent,
    Summarise,
    LoadingComponent,
    BookingsComponent,
    FavouritesComponent,
    AccountConfirmationComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    LocationDetailsComponent,
    LocationsComponent,
    HotelsComponent,
    BookComponent,
    CreateLocationComponent,
    CreateHotelComponent,
    HeroComponent,
    FooterComponent,
    SearchComponent,
    SearchThumbComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatSnackBarModule,
  ],
  providers: [
    HotelDataService,
    AuthService,
    AuthGuard,
    CanDeactivateGuard,
    MatSnackBar,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
