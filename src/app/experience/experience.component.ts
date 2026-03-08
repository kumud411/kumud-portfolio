import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {

  experiences = [
    {
      role: 'Full Stack Developer Intern',
      type: 'Internship',
      company: 'SARG Softech',
      responsibilities: [
        'Developed scalable full stack applications',
        'Implemented REST APIs with Spring Boot',
        'Built Angular UI components',
        'Implemented JWT authentication and Spring Security'
      ]
    }
  ];
}
