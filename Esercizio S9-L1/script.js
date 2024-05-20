"use strict";
class User {
    constructor(nome, cognome) {
        this.nome = nome;
        this.cognome = cognome;
        this.credito = 0;
        this.numeroChiamate = 0;
    }
    ricarica(importo) {
        this.credito += importo;
        console.log(`${this.nome} + ${this.cognome} hai effettuato una ricarica di ${importo}.`);
        return this.credito;
    }
    chiamata(minuti) {
        const costoChiamataalMinuto = 0.20;
        const costoTotaleDellaChiamata = costoChiamataalMinuto * minuti;
        if (this.credito > costoTotaleDellaChiamata)
            this.credito -= costoTotaleDellaChiamata;
        this.numeroChiamate++;
        console.log();
        return costoTotaleDellaChiamata;
    }
}
const user = new User('Mario', 'Rossi');
console.log(user);
user.ricarica(5);
