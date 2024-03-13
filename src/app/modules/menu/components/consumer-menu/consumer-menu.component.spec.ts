import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumerMenuComponent } from './consumer-menu.component';

describe('ConsumerMenuComponent', () => {
  let component: ConsumerMenuComponent;
  let fixture: ComponentFixture<ConsumerMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConsumerMenuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsumerMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
