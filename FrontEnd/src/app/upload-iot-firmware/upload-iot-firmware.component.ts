import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UploadIotFirmware} from '../model/model'
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { ServicesService } from './services.service'

@Component({
  selector: 'app-upload-iot-firmware',
  templateUrl: './upload-iot-firmware.component.html',
  styleUrls: ['./upload-iot-firmware.component.css']
})
export class UploadIotFirmwareComponent implements OnInit {

 uploadIot:UploadIotFirmware;
 public file : File;
 fileToUpload: File;
  constructor(private router:Router, private http: HttpClient,private ServicesService: ServicesService ) { }

  ngOnInit(): void {
    this.uploadIot={
      versionName: '',
      fileName:'',
      Type:''
    }
  }
  postMethod(files: FileList) {
    this.fileToUpload = files.item(0);
    if(this.fileToUpload == null){
      alert("File not uploaded")
    }
    else{
     
      let formData:FormData = new FormData(); 
      formData.append('file', this.fileToUpload); 
      formData.append('folder', '/otap/otap_usr/OTAP');
       console.log(formData)
      this.ServicesService.uploadFirmware(formData).pipe().subscribe(data =>
      {
        debugger
        console.log(data)
       
      })
    // this.http.post(`${environment._firmwareFileUpload}`,formData).pipe().subscribe((val)=>{
    //   console.log(val)
    // })
     }
  }  

  
  public onClicking()
  {
   
    

  }

  
 

  public reset(accountForm: NgForm){

    accountForm.resetForm();
   
  }

  dash(){
    this.router.navigate(['Firmware']);
  }
}
