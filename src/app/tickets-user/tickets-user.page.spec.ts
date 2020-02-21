import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TicketsUserPage } from './tickets-user.page';

describe('TicketsUserPage', () => {
  let component: TicketsUserPage;
  let fixture: ComponentFixture<TicketsUserPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TicketsUserPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TicketsUserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
