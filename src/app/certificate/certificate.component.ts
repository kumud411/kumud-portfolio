import { Component } from '@angular/core';

@Component({
  selector: 'app-certificate',
  templateUrl: './certificate.component.html',
  styleUrls: ['./certificate.component.css']
})
export class CertificateComponent {
  
certifications = [

{
title:'NPTEL Soft Skills',
provider:'NPTEL'
},

{
title:'Google Cloud Career Readiness',
provider:'Google Cloud'
},

{
title:'Complete Java Course',
provider:'Udemy'
}

];

}
