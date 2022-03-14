import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriasListagemComponent } from './categorias-listagem.component';

describe('CategoriasListagemComponent', () => {
  let component: CategoriasListagemComponent;
  let fixture: ComponentFixture<CategoriasListagemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriasListagemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriasListagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
