import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharDesignComponent } from './char-design.component';

describe('CharDesignComponent', () => {
  let component: CharDesignComponent;
  let fixture: ComponentFixture<CharDesignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharDesignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
