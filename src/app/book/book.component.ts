import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { MatSnackBar } from "@angular/material";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-book",
  templateUrl: "./book.component.html",
  styleUrls: ["./book.component.scss"],
})
export class BookComponent implements OnInit {
  minDate = new Date();

  constructor(private route: ActivatedRoute, private snackBar: MatSnackBar) {}

  ngOnInit() {}

  openSnackBar(msg) {
    this.snackBar.open(msg);
  }

  onSubmit(form: NgForm) {
    console.log(form.value);
  }
}
