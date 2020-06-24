import { Component, OnInit } from '@angular/core';
import { PRODUITS } from '../mock-produit';
@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {

  produits = PRODUITS;
  produitSelected: Produit;

  constructor() { }

  ngOnInit(): void {
    
  }

  selectProduit(prod: Produit) {
    this.produitSelected = prod;

  }

}