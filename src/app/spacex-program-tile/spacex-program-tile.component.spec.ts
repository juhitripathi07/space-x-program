import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpacexProgramTileComponent } from './spacex-program-tile.component';

describe('SpacexProgramTileComponent', () => {
  let component: SpacexProgramTileComponent;
  let fixture: ComponentFixture<SpacexProgramTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpacexProgramTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpacexProgramTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
