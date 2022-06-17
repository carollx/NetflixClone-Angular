import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentListItemsComponent } from './content-list-items.component';

describe('ContentListItemsComponent', () => {
  let component: ContentListItemsComponent;
  let fixture: ComponentFixture<ContentListItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentListItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentListItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
