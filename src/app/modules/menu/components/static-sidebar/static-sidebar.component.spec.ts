import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticSidebarComponent } from './static-sidebar.component';

describe('StaticSidebarComponent', () => {
  let component: StaticSidebarComponent;
  let fixture: ComponentFixture<StaticSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StaticSidebarComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(StaticSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
