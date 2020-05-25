import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit,
  AfterContentInit,
} from "@angular/core";
import { HotelDataService } from "src/app/services/hotelData.service";
import { Hotel } from "../hotel.model";
import { NgForm } from "@angular/forms";
import { take, exhaustMap, catchError } from "rxjs/operators";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Component({
  selector: "app-create-hotel",
  templateUrl: "./create-hotel.component.html",
  styleUrls: ["./create-hotel.component.scss"],
})
export class CreateHotelComponent
  implements OnInit, AfterViewInit, AfterContentInit {
  coverImage;
  images: [];
  uploadUrl;
  currentTab: number = 0;
  @ViewChild("tabs", { static: true }) _tabs: ElementRef;
  @ViewChild("nextBtn", { static: true }) nextBtn: ElementRef;
  @ViewChild("prevBtn", { static: true }) prevBtn: ElementRef;
  @ViewChild("form", { static: true }) form;
  @ViewChild("steps", { static: true }) steps: ElementRef;
  tabs;
  submit = false;

  constructor(
    private hotelService: HotelDataService,
    private http: HttpClient
  ) {}

  ngOnInit() {}

  ngAfterViewInit() {}

  ngAfterContentInit() {
    this.tabs = this._tabs.nativeElement.children;
    this.showTab(this.currentTab);
  }

  onFileChange(event) {
    console.log(event.target.files[0]);
  }

  onFilesChange(event) {
    console.log(event.target.files);
  }

  splitIntoArray(str): [] {
    if (str) {
      return str.split(",");
    } else {
      return undefined;
    }
  }

  onSubmit(form: NgForm) {
    let {
      hotelName,
      description,
      summary,
      location,
      address,
      coordinates,
      facilities,
      languages,
      rules,
      coverImage,
      images,
    } = form.value;

    facilities = this.splitIntoArray(facilities);
    coordinates = this.splitIntoArray(coordinates);
    languages = this.splitIntoArray(languages);
    images = this.splitIntoArray(images);

    if (rules) {
      rules = rules.split("\n");
    } else {
      rules = undefined;
    }

    const newHotel: Hotel = {
      name: hotelName,
      description,
      summary,
      location: {
        address: location,
        description: address,
        region: "West Nile",
        coordinates,
      },
      coverImage,
      facilities,
      languages,
      rules,
      images,
      availability: true,
    };

    this.hotelService
      .imageUpload()
      .pipe(
        take(1),
        exhaustMap((response: any) => {
          console.log(response);
          return this.http
            .put(response.result.url, newHotel.coverImage, {
              headers: new HttpHeaders().set("Content-Type", "image/jpeg"),
            })
            .pipe(
              exhaustMap((res: any) => {
                this.coverImage = response.result.key;
                return this.hotelService.registerHotel(newHotel);
              })
            );
        })
      )
      .subscribe(
        (response) => {
          console.log(response);
        },
        (err) => console.log(err)
      );

    // this.hotelService.imageUpload().subscribe((response: any) => {
    //   console.log(response.result);
    //   newHotel.coverImage = response.result.key;
    // });

    // this.hotelService.registerHotel(newHotel).subscribe(
    //   (response) => console.log(response),
    //   (err) => console.log(err)
    // );
  }

  private showTab(n: number) {
    this.tabs[n].style.display = "block";

    // ... and fix the Previous/Next buttons:
    if (n == 0) {
      this.prevBtn.nativeElement.style.display = "none";
    } else {
      this.prevBtn.nativeElement.style.display = "inline";
    }

    if (n == this.tabs.length - 1) {
      this.submit = true;
    }
    // ... and run a function that displays the correct step indicator:
    this.fixStepIndicator(n);
  }

  nextPrev(n) {
    // Hide the current tab:
    this.tabs[this.currentTab].style.display = "none";
    // Increase or decrease the current tab by 1:
    this.currentTab = this.currentTab + n;
    // if you have reached the end of the form... :
    if (this.currentTab >= this.tabs.length) {
      this.onSubmit(this.form);
      return false;
    }
    // Otherwise, display the correct tab:
    this.showTab(this.currentTab);
  }

  fixStepIndicator(n) {
    // This function removes the "active" class of all steps...
    var i,
      x = this.steps.nativeElement.children;
    for (i = 0; i < x.length; i++) {
      x[i].className = x[i].className.replace(" active", "");
    }
    //... and adds the "active" class to the current step:
    x[n].className += " active";
  }
}
