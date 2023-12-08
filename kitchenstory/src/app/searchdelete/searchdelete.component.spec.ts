import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchdeleteComponent } from './searchdelete.component';

describe('SearchdeleteComponent', () => {
  let component: SearchdeleteComponent;
  let fixture: ComponentFixture<SearchdeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchdeleteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SearchdeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
