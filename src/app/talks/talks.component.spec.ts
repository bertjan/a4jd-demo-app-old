
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { TalksComponent } from './talks.component';

describe('TalksComponent', () => {
  let component: TalksComponent;
  let fixture: ComponentFixture<TalksComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TalksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TalksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
