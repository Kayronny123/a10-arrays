// Agora, vamos manipular os arrays, adicionando ou removendo informações. 
// Para isso, crie **três** novos arrays, chamados `nomeDoArrayOriginalCopia`,
//  e faça o que se pede abaixo nas cópias dos arrays originais;

// - Adicione um item `number` ao primeiro array. 
// Utilize `console.log()` 
// para exibir o original e a cópia;
// - Remova o último item do segundo array.
//  Utilize `console.log()`
//  para exibir o original e a cópia;
// - Remova o segundo item do terceiro array.
//  Utilize `console.log()` 
// para exibir o original e a cópia;

const cores = ["verde", "roxo", "cinza", "branco", "laranja"];
const cores2 = ["vermelho", "rosa", "preto", "amarelo"]
const coresCopias = cores.slice()
console.log(cores, coresCopias)

 
cores.push(1);
console.log("adicionando numero a cores", cores);

coresCopias.splice(4,1);
console.log("removendo último item de coresCopia", coresCopias, cores);

cores2.splice(1,1);
console.log(cores2);

