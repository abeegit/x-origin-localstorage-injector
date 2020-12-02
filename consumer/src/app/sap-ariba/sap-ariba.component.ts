import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-sap-ariba',
  templateUrl: './sap-ariba.component.html',
  styleUrls: ['./sap-ariba.component.sass'],
})
export class SapAribaComponent implements OnInit {
  form: any;

  resultMessage: string = '';

  constructor(private title: Title) {
    this.title.setTitle("SAP Ariba form");
  }

  ngOnInit(): void {
    this.form = {
      firstName: '',
      lastName: '',
      role: '',
    };
  }

  onSubmit(): void {
    this.resultMessage = 'Saved!';
  }
}
