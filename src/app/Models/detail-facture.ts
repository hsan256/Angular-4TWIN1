import { Facture } from "./facture";
import { Produit } from "./produit";

export class DetailFacture {
    idDetailFacture: number;
    qte: number;
    prixTotal: number;
    pourcentageRemise: number;
    montantRemise: number;
    facture: Facture;
    produit: Produit;

}
