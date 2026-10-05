const sistema = require('./sistema');

describe('verificarMaioridade', () => {
    test('deve retornar false para 15 anos', () => {
        expect(sistema.verificarMaioridade(15)).toBe(false);
    });

    test('deve retornar true para 18 anos', () => {
        expect(sistema.verificarMaioridade(18)).toBe(true);
    });

    test('deve retornar true para 21 anos', () => {
        expect(sistema.verificarMaioridade(21)).toBe(true);
    });
});


describe('calcularIMC', () => {
    test('deve calcular o IMC corretamente', () => {
        expect(sistema.calcularIMC(70, 1.75)).toBeCloseTo(22.86);
    });
});


describe('formatarNome', () => {
    test('deve formatar o nome corretamente', () => {
        expect(sistema.formatarNome('Lucas', 'Silva')).toBe('Silva, Lucas');
    });
});


describe('ehPar', () => {
    test('deve retornar true para número par', () => {
        expect(sistema.ehPar(10)).toBe(true);
    });

    test('deve retornar false para número ímpar', () => {
        expect(sistema.ehPar(7)).toBe(false);
    });

    test('deve retornar true para o número 0', () => {
        expect(sistema.ehPar(0)).toBe(true);
    });
});


describe('celsiusParaFahrenheit', () => {
    test('deve converter 0°C para 32°F', () => {
        expect(sistema.celsiusParaFahrenheit(0)).toBe(32);
    });

    test('deve converter 100°C para 212°F', () => {
        expect(sistema.celsiusParaFahrenheit(100)).toBe(212);
    });

    test('deve converter -40°C para -40°F', () => {
        expect(sistema.celsiusParaFahrenheit(-40)).toBe(-40);
    });
});


describe('adicionarHobby', () => {
    test('deve aumentar o tamanho da lista e adicionar o novo hobby', () => {
        const lista = ['futebol', 'música'];
        const resultado = sistema.adicionarHobby(lista, 'leitura');

        expect(resultado).toHaveLength(3);
        expect(resultado).toContain('leitura');
    });
});


describe('dividir', () => {
    test('deve realizar uma divisão normalmente', () => {
        expect(sistema.dividir(10, 2)).toBe(5);
    });

    test('deve lançar erro ao dividir por zero', () => {
        expect(() => sistema.dividir(10, 0))
            .toThrow('Divisão por zero não permitida');
    });
});


describe('criarAluno', () => {
    test('deve criar o aluno com os dados corretos', () => {
        expect(sistema.criarAluno('Lucas', 'Informática')).toEqual({
            nome: 'Lucas',
            curso: 'Informática',
            ativo: true
        });
    });
});


describe('aplicarDesconto', () => {
    test('deve aplicar desconto de 10%', () => {
        expect(sistema.aplicarDesconto(100, 10)).toBe(90);
    });

    test('deve manter o preço quando o desconto for 0%', () => {
        expect(sistema.aplicarDesconto(100, 0)).toBe(100);
    });
});


describe('validarTamanhoSenha', () => {
    test('deve retornar false para senha com 5 caracteres', () => {
        expect(sistema.validarTamanhoSenha('12345')).toBe(false);
    });

    test('deve retornar true para senha com 8 caracteres', () => {
        expect(sistema.validarTamanhoSenha('12345678')).toBe(true);
    });
});
