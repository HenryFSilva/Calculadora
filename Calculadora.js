class Calculadora {
    static soma = (...args) => {
        let total = 0
        for (let i = 0; i < args.length; i++) {
            if (typeof args[i] !== 'number') {
                return 'Erro: Todos os argumentos devem ser números';
            }
            total += args[i];
        }
        return total
    };

    static subt  (...args)  {
        if (args.some(arg => typeof arg !== 'number')) {
            return 'Erro: Todos os argumentos devem ser números';
        }
        let total = args[0];
        for (let i = 1; i < args.length; i++) {
            total -= args[i];
        }
        return total;
    };


    static div (...args)  {
        let total = args[0];
        for (let i = 1; i < args.length; i++) {
            total /= args[i];
        }
        return total;
    };

    static mult = (...args) => {
        if (args.some(arg => typeof arg !== 'number')) {
            return 'Erro: Todos os argumentos devem ser números';
        }
        let total = args[0];
        for (let i = 1; i < args.length; i++) {
            total *= args[i];
        }
        return total;
    };
}
console.log(Calculadora.soma(2, 5));
console.log(Calculadora.subt(5, 2));
console.log(Calculadora.div(6, 2));
console.log(Calculadora.mult(3, 3));