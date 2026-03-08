import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
contacts = [

{
icon:'bi bi-envelope',
label:'Email',
value:'kumudpatil88@gmail.com'
},

{
icon:'bi bi-telephone',
label:'Phone',
value:'+91 8788237709'
},

{
icon:'bi bi-geo-alt',
label:'Location',
value:'Pune, Maharashtra, India'
}

];


}
