import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarshipsComponent } from './starships.component';

describe('StarshipsComponent', () => {
  let component: StarshipsComponent;
  let fixture: ComponentFixture<StarshipsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarshipsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarshipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
