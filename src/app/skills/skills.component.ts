import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {

  skills = [
    { name: 'Java', icon: '☕', percent: 90 },
    { name: 'Spring Boot', icon: '🍃', percent: 85 },
    { name: 'Angular', icon: '🅰', percent: 80 },
    { name: 'TypeScript', icon: '📘', percent: 78 },
    { name: 'MySQL', icon: '🗄', percent: 75 },
    { name: 'HTML5', icon: '🌐', percent: 90 },
    { name: 'CSS', icon: '🎨', percent: 85 },
    { name: 'JavaScript', icon: '⚡', percent: 85 },
        { name: 'Python', icon: '🐍', percent: 70 }   // 👈 Added Python

  ];
}
