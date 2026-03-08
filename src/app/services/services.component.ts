import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
services = [

{
icon:'bi bi-globe',
title:'Web Development',
description:'Full stack web applications using modern frameworks and best practices for scalable solutions.'
},

{
icon:'bi bi-window',
title:'Frontend Development',
description:'Responsive, pixel perfect interfaces with Angular, TypeScript and modern CSS.'
},

{
icon:'bi bi-hdd-stack',
title:'Backend Development',
description:'Robust server side applications using Java, Spring Boot and MySQL database.'
},

{
icon:'bi bi-plug',
title:'API Development',
description:'RESTful API design with authentication, documentation and performance optimization.'
}

];

}
