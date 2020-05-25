import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HotelDetailsComponent } from "./hotels/hotel-details/hotel-details.component";
import { HotelListComponent } from "./hotels/hotel-list/hotel-list.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { LoginComponent } from "./auth/login/login.component";
import { RegisterComponent } from "./auth/register/register.component";
import { CanDeactivateGuard } from "./auth/register/can-deactivate.service";
import { AccountConfirmationComponent } from "./auth/account-confirmation/account-confirmation.component";
import { ResetPasswordComponent } from "./auth/reset-password/reset-password.component";
import { ForgotPasswordComponent } from "./auth/forgot-password/forgot-password.component";
import { BookingsComponent } from "./hotels/bookings/bookings.component";
import { FavouritesComponent } from "./hotels/favourites/favourites.component";
import { AuthGuard } from "./services/auth-guard.service";
import { HotelsComponent } from "./hotels/hotels.component";
import { LocationsComponent } from "./locations/locations.component";
import { LocationDetailsComponent } from "./locations/location-details/location-details.component";
import { BookComponent } from "./book/book.component";
import { CreateLocationComponent } from "./locations/create-location/create-location.component";
import { CreateHotelComponent } from "./hotels/create-hotel/create-hotel.component";

const routes: Routes = [
  { path: "", component: HotelListComponent },
  { path: "hotel/create", component: CreateHotelComponent },
  { path: "hotel/:id", component: HotelDetailsComponent },
  { path: "hotels", component: HotelsComponent },
  { path: "hotels/:location", component: HotelsComponent },
  { path: "locations", component: LocationsComponent },
  { path: "locations/create", component: CreateLocationComponent },
  { path: "location/:id", component: LocationDetailsComponent },
  { path: "bookings", component: BookingsComponent, canActivate: [AuthGuard] },
  { path: "book", component: BookComponent, canActivate: [AuthGuard] },
  { path: "login", component: LoginComponent },
  {
    path: "favourites",
    component: FavouritesComponent,
    canActivate: [AuthGuard],
  },
  { path: "confirmAccount", component: AccountConfirmationComponent },
  { path: "forgotPassword", component: ForgotPasswordComponent },
  { path: "resetPassword", component: ResetPasswordComponent },
  {
    path: "register",
    component: RegisterComponent,
    canDeactivate: [CanDeactivateGuard],
  },
  { path: "not-found", component: PageNotFoundComponent },
  { path: "**", redirectTo: "/not-found" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
