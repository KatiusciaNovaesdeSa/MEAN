import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthService} from '../../services/auth.service';
import { PlayerDashboardComponent } from './player_dashboard.component';

describe('PlayerDashboardComponent', () => {
  let component: PlayerDashboardComponent;
  let fixture: ComponentFixture<PlayerDashboardComponent>;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerDashboardComponent ],
      providers: [
        { provide: AuthService, useValue: { isAuthenticated: () => false }}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
