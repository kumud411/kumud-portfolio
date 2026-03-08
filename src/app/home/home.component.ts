import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
   scrollProjects() {
    document.getElementById("projects")?.scrollIntoView({ behavior: 'smooth' });
  }

  scrollContact() {
    document.getElementById("contact")?.scrollIntoView({ behavior: 'smooth' });
  }

  viewResume() {
    window.open("assets/resume.pdf", "_blank");
  }

}
