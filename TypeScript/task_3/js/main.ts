/// <reference path="./crud.d.ts" />

// Importation des types et du module CRUD
import { RowID, RowElement } from "./interface";
import * as CRUD from "./crud";

// Définition d'un nouvel élément RowElement
const row: RowElement = {
  firstName: "Guillaume",
  lastName: "Salva",
};

// Insertion de la ligne et récupération de son ID
const newRowID: RowID = CRUD.insertRow(row);

// Mise à jour de la ligne avec un nouvel âge
const updatedRow: RowElement = { ...row, age: 23 };
CRUD.updateRow(newRowID, updatedRow);

// Suppression de la ligne
CRUD.deleteRow(newRowID);
