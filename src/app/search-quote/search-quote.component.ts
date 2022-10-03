import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CitazioneService } from './citazione.service';
import { CitazioneCercata } from './CitazioneCercata';

@Component({
  selector: 'app-search-quote',
  templateUrl: './search-quote.component.html',
  styleUrls: ['./search-quote.component.css']
})
export class SearchQuoteComponent implements OnInit {
  citazioni: CitazioneCercata[] = [];
  form: FormGroup;

  constructor(private citazioneService: CitazioneService, public fb: FormBuilder) {
    this.form = fb.group({
      'quote': [],
    });
  }
  ngOnInit(): void {
    let citazioni: CitazioneCercata[] = [];
    let citazione: CitazioneCercata = {
      idCitazione: "",
      idArtista: "",
      idLibro: "",
      content: ""
    };
    }
  
  findCitazione(): void{
    let stringaRicercata = this.form.controls['quote'].value;
    this.citazioneService.getAllCitazioni(stringaRicercata).subscribe(
      response => {this.citazioni = response;
        alert(this.citazioni.values)}
    );
  }


}