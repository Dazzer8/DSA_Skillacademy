function estPalindrome(str: string): boolean {
    // Convertir la chaîne en minuscules et supprimer les caractères non alphabétiques
    const cleanStr = str.toLowerCase().replace(/[^a-z]/g, '');
    
    // Vérifier si la chaîne est égale à sa version inversée
    return cleanStr === cleanStr.split('').reverse().join('');
}

// Test de la fonction
const mot = "radar";
if (estPalindrome(mot)) {
    console.log(`${mot} est un palindrome.`);
} else {
    console.log(`${mot} n'est pas un palindrome.`);
}