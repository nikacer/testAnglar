import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarPokemonComponent } from './agregar-pokemon.component';

describe('AgregarPokemonComponent', () => {
  let component: AgregarPokemonComponent;
  let fixture: ComponentFixture<AgregarPokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarPokemonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
