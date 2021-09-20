import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-agregar-pokemon',
  templateUrl: './agregar-pokemon.component.html',
  styleUrls: ['./agregar-pokemon.component.scss']
})
export class AgregarPokemonComponent implements OnInit {

  pokemonForm = new FormGroup({
    nombre: new FormControl('', [Validators.min(3), Validators.required]),
    peso: new FormControl('', [Validators.required]),
    familia: new FormControl('', Validators.required),
  });

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.pokemonForm.valid) {
      this.http.post('http://localhost:5000/pokemon/agregar', this.pokemonForm.value).subscribe(console.log)
    }
  }

}
