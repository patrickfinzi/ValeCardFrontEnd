import { TestBed } from '@angular/core/testing';

import { TodosProdutosService } from './todos-produtos.service';

describe('TodosProdutosService', () => {
  let service: TodosProdutosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodosProdutosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
