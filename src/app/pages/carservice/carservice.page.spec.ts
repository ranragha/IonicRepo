import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CarservicePage } from './carservice.page';

describe('CarservicePage', () => {
  let component: CarservicePage;
  let fixture: ComponentFixture<CarservicePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarservicePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CarservicePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
