import { Component, OnInit, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.sass'],
})
export class LandingComponent implements OnInit, OnDestroy {

  form: any;

  name: any = "";

  resultMessage: string | null = null;

  resultMessageTimeout: any = null;

  constructor(private title: Title) {
    this.title.setTitle("SAP Ariba look-alike form");
  }

  ngOnInit(): void {
    this.form = {
      firstName: "",
      lastName: "",
      role: ""
    };
  }

  getValue(input: HTMLInputElement) {
    return input.value;
  }

  ngOnDestroy(): void {
    clearTimeout(this.resultMessageTimeout);
  }

  onSubmit(): void {
    const { firstName, lastName, role } = this.form;
    console.log(firstName, lastName, role);
    localStorage.setItem("firstName", firstName);
    localStorage.setItem("lastName", lastName);
    localStorage.setItem("role", role);

    this.resultMessage = 'Saved!';

    this.resultMessageTimeout = setTimeout(() => this.resultMessage = null, 2000);
  }

}
