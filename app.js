function pesquisar() {
  // Seleciona o elemento HTML com o ID "resultados-pesquisa" e armazena na variável section.
  let section = document.getElementById("resultados-pesquisa");

  // Obtém o valor digitado no campo de pesquisa.
  let campoPesquisa = document.getElementById("campo-pesquisa").value;

  // Verifica se o campo de pesquisa está vazio.
  if (!campoPesquisa) {
    // Se estiver vazio, exibe uma mensagem de erro.
    section.innerHTML = "<p> Nenhum Personagem foi encontrado<p>";
    return;
  }

  // Inicializa uma string vazia para armazenar os resultados da pesquisa.
  let resultados = "";

  // Itera sobre cada personagem na lista de personagens.
  for (personagem of personagens) {
    // Divide o nome do personagem e a pesquisa em palavras para comparação.
    const nomePalavras = personagem.nome.toLowerCase().split(" ");
    const pesquisaPalavras = campoPesquisa.toLowerCase().split(" ");

    // Verifica se todas as palavras da pesquisa estão presentes no nome do personagem.
    let todasPalavrasEncontradas = true;
    for (const palavraPesquisa of pesquisaPalavras) {
      if (!nomePalavras.includes(palavraPesquisa)) {
        todasPalavrasEncontradas = false;
        break;
      }
    }

    // Verifica se todas as palavras da pesquisa estão presentes na descrição do personagem.
    const descricaoPalavras = personagem.descricao.toLowerCase().split(" ")
    let palavrasDescricaoEncontradas = true;
    for( const palavraPesquisa of pesquisaPalavras){
      if(!descricaoPalavras.includes(palavraPesquisa)){
        palavrasDescricaoEncontradas = false;
        break;
      }
    }

    // Verifica se alguma das palavras da pesquisa está presente nas tags do personagem.
    tags = personagem.tags.toLowerCase().split(" ");
    let tagsEncontradas = false;
    for (const palavraPesquisa of pesquisaPalavras) {
      if (tags.includes(palavraPesquisa)) {
        tagsEncontradas = true;
        break;
      }
    }

    // Se alguma das condições acima for verdadeira, o personagem é adicionado aos resultados.
    if (todasPalavrasEncontradas || palavrasDescricaoEncontradas || tagsEncontradas) {
      // Cria um elemento HTML para exibir os detalhes do personagem.
      resultados +=  `
  <div class="item-resultado">
    <h2>
      <img src="${personagem.imagem}" alt="${personagem.nome}">
      <a href="#" target="_blank">${personagem.nome}</a>
    </h2>
    <p class="descricao-meta">${personagem.descricao}</p>
    <p><strong>Ator:</strong> ${personagem.Ator}</p>
    <p><strong>Franquia:</strong> ${personagem.franquia}</p>
    <p><strong>Ano de Lançamento:</strong> ${personagem.anoLancamento}</p>
    <a href="${personagem.link}" target="_blank">Mais Informações</a>
  </div>
  `;
}
  }

  // Se nenhum resultado foi encontrado, exibe uma mensagem de erro.
  if(!resultados){
    resultados = "<p>Nada foi encontrado.Você precisa digitar o nome de um personagem!!<p>";
  }

  // Atribui o conteúdo HTML completo da variável resultados ao elemento section.
  section.innerHTML = resultados;
}