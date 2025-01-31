// Importation des types définis dans `interface.ts`
import { RowID, RowElement } from "./interface";

// Déclaration des fonctions (sans implémentation)
export declare function insertRow(row: RowElement): RowID;
export declare function deleteRow(rowId: RowID): void;
export declare function updateRow(rowId: RowID, row: RowElement): RowID;