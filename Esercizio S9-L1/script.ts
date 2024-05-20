interface iManageSIM{
    ricarica(sum:number): number,
    chiamata(minuti:number): number,
    chiama404(): number;
    getNumeroChiamata(): number;
    azzeraChiamate(): void
}

class User implements iManageSIM {
    nome: string
    cognome: string
    public credito:number
    public numeroChiamate: number
    constructor(nome:string, cognome:string) {
        this.nome = nome;
        this.cognome = cognome
        this.credito = 0
        this.numeroChiamate = 0
    }
    ricarica(importo: number):number {
        this.credito += importo
        console.log(`${this.nome} ${this.cognome}: hai effettuato una ricarica di ${importo}.` )
        return this.credito;
    }
    chiamata(minuti: number):number {
        const costoChiamataalMinuto = 0.2;
        const costoTotaleDellaChiamata = costoChiamataalMinuto * minuti
        
        if(this.credito > costoTotaleDellaChiamata) {
            this.credito -= costoTotaleDellaChiamata
            this.numeroChiamate += minuti
            console.log(`La chiamata effettuata è durata ${minuti}. Costo della chiamata: ${costoTotaleDellaChiamata}. Credito residuo: ${this.credito}`)
        } else {
            console.log('Impossibile effettuare la chiamata. Credito insufficiente')
        }
        return this.credito
    }
    chiama404(): number {
        console.log(`Credito attuale: ${this.credito}`);
        return this.credito
    } 
    getNumeroChiamata(): number {
        console.log(`Hai effettuato ${this.numeroChiamate} minuti di chiamate`)
        return this.numeroChiamate
    } 
    azzeraChiamate(): void {
        this.numeroChiamate = 0;        
    }

}

const user = new User('Mario', 'Rossi') 
console.log(user)
user.ricarica(5)
user.chiamata(12)
user.chiama404()
user.getNumeroChiamata()
