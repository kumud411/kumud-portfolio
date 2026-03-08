import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
services = [
  {
    icon: "bi bi-code-slash",
    title: "Backend Development",
    desc: "Java & Spring Boot"
  },
  {
    icon: "bi bi-box",
    title: "REST API Design",
    desc: "Scalable & Secure"
  },
  {
    icon: "bi bi-person",
    title: "Angular UI",
    desc: "Dynamic Frontends"
  },
  {
    icon: "bi bi-lightning",
    title: "Full Stack",
    desc: "End-to-End Delivery"
  }
];
}
