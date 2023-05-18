// Escopo Léxico:

const nome = "Luiz";

function callName() {
  console.log(nome);
}

falaNome();

// Uma função léxica é uma função que tem acesso às variáveis e funções definidas no seu ambiente de criação. Se uma função está dentro de outra função, ela pode acessar as variáveis e funções da função externa. No entanto, a função externa não pode acessar as variáveis e funções da função interna.

// Por exemplo, se temos uma função chamada "pai" e dentro dela há uma função chamada "filho", o "filho" pode usar as variáveis e funções definidas dentro de "pai", mas "pai" não pode usar as variáveis e funções definidas em "filho".

// Isso permite que as funções léxicas sejam mais flexíveis e reutilizáveis, pois podem ser criadas com base no contexto em que estão definidas.
