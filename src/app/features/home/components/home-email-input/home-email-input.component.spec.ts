import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeEmailInputComponent } from './home-email-input.component';

describe('HomeEmailInputComponent', () => {
  let component: HomeEmailInputComponent;
  let fixture: ComponentFixture<HomeEmailInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeEmailInputComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeEmailInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
