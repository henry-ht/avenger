import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroeTablaComponent } from './heroe-tabla.component';

describe('HeroeTablaComponent', () => {
  let component: HeroeTablaComponent;
  let fixture: ComponentFixture<HeroeTablaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroeTablaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroeTablaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
