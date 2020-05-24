import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoureditDialogeComponent } from './fouredit-dialoge.component';

describe('FoureditDialogeComponent', () => {
  let component: FoureditDialogeComponent;
  let fixture: ComponentFixture<FoureditDialogeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoureditDialogeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoureditDialogeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
