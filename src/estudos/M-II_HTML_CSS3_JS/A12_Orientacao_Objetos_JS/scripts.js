class contaBancaria {
    constructor(agencia, numero, tipo, saldo) {
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = 0;
    }

    get saldo(){
        return this._saldo;
    }

    set saldo(valor) {
        this._saldo;
    }

    sacar(valor) {
        if(valor > this._saldo) {
            return "Operação negada"
        }
        this._saldo = this._saldo - valor;

        return this._saldo;
    }

    depositar (valor){
        this._saldo = this._saldo + valor;

        return this._saldo;
    }
}

class contaCorrente  extends contaBancaria{
    constructor(agencia, numero) {
        super(agencia, numero);
        this.tipo = 'conta_corrente';
        this.cartaoCredito = this.cartaoCredito;
    }

    get cartaoCredito(){
        return this._cartaoCredito;
    }

    set cartaoCredito(valor){
        this._cartaoCredito = valor;
    }
}

class contaPoupanca extends contaBancaria {
    constructor(agencia, numero) {
        super(agencia, numero);
        this.tipo = 'conta_poupanca';
    }
}

class contaUniversitaria extends contaBancaria {
    constructor(agencia, numero) {
        super(agencia, numero);
        this.tipo = 'conta_universitaria';
    }

    sacar(valor){
        if (valor > 500){
            return 'Operacao negada!'
        }

        this._saldo = this._saldo - valor;
    }
}