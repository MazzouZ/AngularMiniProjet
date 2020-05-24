import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FouraddDialogeComponent } from './fouradd-dialoge.component';

describe('FouraddDialogeComponent', () => {
  let component: FouraddDialogeComponent;
  let fixture: ComponentFixture<FouraddDialogeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FouraddDialogeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FouraddDialogeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
