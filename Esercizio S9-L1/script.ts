interface iManageSIM{
    ricarica(sum:number): number,
    chiamata(minuti:number): number,
   // chiama404(): number;
   // getNumeroChiamata(): number;
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
        console.log(`${this.nome} + ${this.cognome} hai effettuato una ricarica di ${importo}.` )
        return this.credito;
    }
    chiamata(minuti: number):number {
        const costoChiamataalMinuto = 0.20;
        const costoTotaleDellaChiamata = costoChiamataalMinuto * minuti

        if(this.credito > costoTotaleDellaChiamata)
        this.credito -= costoTotaleDellaChiamata
        this.numeroChiamate++
        console.log()
        return costoTotaleDellaChiamata;
        } 
        

    }
  /*  chiama404(): number {
        throw new Error("Method not implemented.");
    } */
/*    getNumeroChiamata(): number {
        throw new Error("Method not implemented.");
    } */

const user = new User('Mario', 'Rossi') 
console.log(user)
user.ricarica(5)
