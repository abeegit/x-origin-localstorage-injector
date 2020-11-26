import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sap-ariba',
  templateUrl: './sap-ariba.component.html',
  styleUrls: ['./sap-ariba.component.sass']
})
export class SapAribaComponent implements OnInit {

  form: any;

  resultMessage: string = "";

  constructor() { }

  ngOnInit(): void {
    this.form = {
      firstName: "",
      lastName: "",
      role: ""
    };
  }

  onSubmit(): void {
    this.resultMessage = "Saved!";
  }
}
