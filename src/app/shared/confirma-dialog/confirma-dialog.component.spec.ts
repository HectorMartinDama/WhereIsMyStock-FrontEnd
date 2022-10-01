import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConfirmaDialogComponent } from './confirma-dialog.component';

describe('ConfirmaDialogComponent', () => {
  let component: ConfirmaDialogComponent;
  let fixture: ComponentFixture<ConfirmaDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmaDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmaDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
