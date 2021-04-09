import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http: HttpClient) { }


  uploadFirmware(data) {
    return this.http.post<any>(`${environment._firmwareFileUpload}`,data).pipe(map(user => {
      console.log(user);
      return user;
  }));
  }
}
