import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GigsAddComponent } from './gigs-add.component';

describe('GigsAddComponent', () => {
  let component: GigsAddComponent;
  let fixture: ComponentFixture<GigsAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GigsAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GigsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
