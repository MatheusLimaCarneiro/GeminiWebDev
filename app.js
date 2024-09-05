function pesquisar() {
    // Seleciona o elemento HTML com o ID "resultados-pesquisa" e armazena na variável section.
    let section = document.getElementById("resultados-pesquisa");
  
    // Inicializa uma string vazia para armazenar os resultados da pesquisa.
    let resultados = "";
  
    // Itera sobre cada personagem na lista de personagens.
    for (personagem of personagens) {
      // Constrói o HTML para cada item de resultado, incluindo a imagem, nome, descrição e link.
      // A string é concatenada à variável resultados.
      resultados += `
        <div class="item-resultado">
          <h2>
            <img src="${personagem.imagem}" alt="Jake Peralta">
            <a href="#" target="_blank">${personagem.nome}</a>
          </h2>
          <p class="descricao-meta">${personagem.descricao}</p>
          <a href="${personagem.link}" target="_blank">Mais Informações</a>
        </div>
      `;
    }
  
    // Atribui o conteúdo HTML completo da variável resultados ao elemento section.
    section.innerHTML = resultados;
  }