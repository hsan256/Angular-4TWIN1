import { Rayon } from './rayon';
import { Stock } from './stock';

export class Produit {
  idProduit: number;
  codeProduit: string;
  libelleProduit: string;
  prixUnitaire: number;
  rayon: Rayon;
  stock: Stock;
}