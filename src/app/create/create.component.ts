import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-create",
  templateUrl: "./create.component.html",
  styleUrls: ["./create.component.css"]
})
export class CreateComponent implements OnInit {
  formData;
  constructor() {}

  ngOnInit() {
    this.formData = new FormGroup({
      name: new FormControl("", Validators.compose([Validators.required])),
      dob: new FormControl("", Validators.compose([Validators.required])),
      phoneNumber: new FormControl(
        "",
        Validators.compose([
          Validators.required])
      ),
      emailAddress: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern("[^ @]*@[^ @]*")
        ])
      )
    });
  }
  onSubmit(data){
    alert("User - "+data.name+" created");
  }
}
