import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectLengBtnComponent } from './select-leng-btn.component';

describe('SelectLengBtnComponent', () => {
  let component: SelectLengBtnComponent;
  let fixture: ComponentFixture<SelectLengBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SelectLengBtnComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SelectLengBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
