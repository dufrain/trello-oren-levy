import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardsOptionsMenuComponent } from './boards-options-menu.component';

describe('BoardsOptionsMenuComponent', () => {
  let component: BoardsOptionsMenuComponent;
  let fixture: ComponentFixture<BoardsOptionsMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardsOptionsMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardsOptionsMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
