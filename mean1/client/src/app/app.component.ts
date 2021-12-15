import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Client';
  str: any;
  result: string = "";
  userForm: any;
  constructor(private service: AppService, private http: HttpClient, private formBuilder: FormBuilder) {
    {
      this.userForm = this.formBuilder.group({
        name: ['', Validators.required], //Validators <- that Service is from Angular
        email: ['', Validators.required],//ValidationService this is Our Custom Service
        phone: ['+91', Validators.required],
        profile: ['', Validators.required],
      });
    }
  }

  ngOnInit() {
  }
  FrontEndTech() {
    this.service.getDetails().subscribe((Response) => {
      this.str = Response;
      console.log("Data From Server :", this.str);
    })
  }

  getAllStudents()
  {
    this.service.getFormDetails().subscribe(res=>{
      this.userForm = res;
    })
  }

  ToServer(data: any) {
    this.service.postDetails(this.userForm.value).subscribe(result => {
      console.log(result);
      alert("Student record added successfully");
    },
      err => {
        alert("somthing went wong !!!!");
      });

  }
}
