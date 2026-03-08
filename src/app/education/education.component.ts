import { Component } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {
education = [

{
title:'B.Tech Computer Science Engineering',
institute:'Sharad Institute of Technology College of Engineering',
marks:'CGPA : 8.45'
},

{
title:'12th Standard (Higher Secondary)',
institute:'Higher Secondary Education',
marks:'Marks : 83.83%'
},

{
title:'10th Standard (Secondary School)',
institute:'Secondary School Education',
marks:'Marks : 79%'
}

];
}
