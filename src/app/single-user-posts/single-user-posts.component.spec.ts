import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleUserPostsComponent } from './single-user-posts.component';

describe('SingleUserPostsComponent', () => {
  let component: SingleUserPostsComponent;
  let fixture: ComponentFixture<SingleUserPostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleUserPostsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleUserPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
