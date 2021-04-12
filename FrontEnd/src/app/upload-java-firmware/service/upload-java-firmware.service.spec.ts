import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { UploadJavaFirmwareService } from './upload-java-firmware.service';
import { HttpClientModule } from '@angular/common/http';


describe('UploadJavaFirmwareService', () => {
  let service: UploadJavaFirmwareService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule,HttpClientModule],

    });
    service = TestBed.inject(UploadJavaFirmwareService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
