import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { UpgradecommandService } from './upgradecommand.service';
import { RouterTestingModule } from '@angular/router/testing';
describe('UpgradecommandService', () => {
  let service: UpgradecommandService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule,RouterTestingModule],
    });
    service = TestBed.inject(UpgradecommandService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
