import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from '../models/pokemon';

@Injectable({
  providedIn: 'root'
})
export class ManipService {

  private http = inject(HttpClient)
  private router = inject(Router)

  constructor() { }


  getAllPokemon()
  {

  }

  getPokemon(p:Pokemon)
  {
    
  }
}
