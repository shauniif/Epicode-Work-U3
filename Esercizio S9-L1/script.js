var User = /** @class */ (function () {
    function User(nome, cognome) {
        this.nome = nome;
        this.cognome = cognome;
        this.credito = 0;
        this.numeroChiamate = 0;
    }
    User.prototype.ricarica = function (importo) {
        this.credito += importo;
        console.log("".concat(this.nome, " ").concat(this.cognome, ": hai effettuato una ricarica di ").concat(importo, "."));
        return this.credito;
    };
    User.prototype.chiamata = function (minuti) {
        var costoChiamataalMinuto = 0.2;
        var costoTotaleDellaChiamata = costoChiamataalMinuto * minuti;
        if (this.credito > costoTotaleDellaChiamata) {
            this.credito -= costoTotaleDellaChiamata;
            this.numeroChiamate += minuti;
            console.log("La chiamata effettuata \u00E8 durata ".concat(minuti, ". Costo della chiamata: ").concat(costoTotaleDellaChiamata, ". Credito residuo: ").concat(this.credito));
        }
        else {
            console.log('Impossibile effettuare la chiamata. Credito insufficiente');
        }
        return this.credito;
    };
    User.prototype.chiama404 = function () {
        console.log("Credito attuale: ".concat(this.credito));
        return this.credito;
    };
    User.prototype.getNumeroChiamata = function () {
        console.log("Hai effettuato ".concat(this.numeroChiamate, " minuti di chiamate"));
        return this.numeroChiamate;
    };
    User.prototype.azzeraChiamate = function () {
        this.numeroChiamate = 0;
    };
    return User;
}());
var user = new User('Mario', 'Rossi');
console.log(user);
user.ricarica(5);
user.chiamata(12);
user.chiama404();
user.getNumeroChiamata();
