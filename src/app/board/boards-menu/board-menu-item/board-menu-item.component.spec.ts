import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardMenuItemComponent } from './board-menu-item.component';

describe('BoardMenuItemComponent', () => {
  let component: BoardMenuItemComponent;
  let fixture: ComponentFixture<BoardMenuItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardMenuItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardMenuItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
