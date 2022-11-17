class Lancamento {

    constructor (categoria, tipo, valor) {            
        if (tipo !== "receita" && tipo !== "despesa") {                
            throw new Error ("Lancamento Inválido: Tipo deve ser receita ou despesa")
        }
        if (valor <= 0) {
            throw new Error ("Lancamento Inválido: Valor deve ser maior que zero")
        }
        if (categoria === ""){
            throw new Error ("Lancamento Inválido: A categoria é obrigatória")
        }
        this.categoria = categoria
        this.tipo = tipo
        this.valor = valor
    }

}  