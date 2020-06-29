import { Component, OnInit } from '@angular/core';
import { PRODUITS } from '../mock-produit';
import { Produit } from '../produit'
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

  addProduit(prod) { 
    let lastProduit = this.produits.slice(-1);
    console.log(lastProduit [0]);
    let newProduit = new Produit;
    newProduit.nom = prod.nom;
    newProduit.prix = prod.prix;
    newProduit.id = lastProduit[0].id+1; 
    this.produits.push(newProduit);
    console.log(newProduit);
  }
}