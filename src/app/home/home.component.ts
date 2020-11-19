import { File } from "./home.interface";
import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  title = "angularjs";
  files = [];

  form: FormGroup = this.createForm({
    id: 1,
    name: null,
    file: null,
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  createForm(model: File): FormGroup {
    return this.fb.group(model);
  }

  // isFile(arg: File) {
  //   return (
  //     arg &&
  //     arg.name &&
  //     arg.file &&
  //     typeof arg.name == "string" &&
  //     typeof arg.file == "string"
  //   );
  // }

  onSubmit() {
    this.files.push(this.form.value);
    this.form.controls.file.reset();
    this.form.controls.name.reset();
    this.form.controls["id"].setValue(this.form.value.id + 1);
  }
}
