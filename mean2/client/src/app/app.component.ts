import { Component, OnInit } from '@angular/core';
import { EappServiceService } from './eapp-service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title :any= 'Client';
  constructor(private service:EappServiceService)
  { 
  }
  ngOnInit()
  {
    this.getBatchesFromAPI()
  }
  getBatchesFromAPI()
  {
    this.service.getBatches().subscribe((Response)=>{
      console.log("Data From Server :",Response);
    });
  }
}
