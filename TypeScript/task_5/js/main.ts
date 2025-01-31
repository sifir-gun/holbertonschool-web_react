// Définition des interfaces avec un "branding" unique
export interface MajorCredits {
	_majorCreditBrand: void; // Propriété de branding pour identifier les MajorCredits
	credits: number;
}
  
export interface MinorCredits {
	_minorCreditBrand: void; // Propriété de branding pour identifier les MinorCredits
	credits: number;
}
  
// Fonction pour additionner les MajorCredits
export function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
	return { _majorCreditBrand: undefined, credits: subject1.credits + subject2.credits };
}
  
// Fonction pour additionner les MinorCredits
export function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
	return { _minorCreditBrand: undefined, credits: subject1.credits + subject2.credits };
}