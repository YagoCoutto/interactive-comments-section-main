
fetch('../data.json')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    processarDados(data);
  })
  .catch((error) => {
    console.error('Erro ao carregar os dados:', error);
  });

function processarDados(data) {
  // Aqui você pode processar os dados obtidos do arquivo JSON
  console.log(data["comments"][1].replies)
  data["comments"].forEach(element => {
    const username = element.user["username"];
    const image = element.user["image"];
    const content = element["content"];
    
    data["comments"][1].replies.forEach(element =>{
      //criar uma função para chamar os replies
    })

    createElements(username, image, content)
  });

}

function createElements(username, image, content) {
  const fragment = document.createDocumentFragment();
  const main = document.getElementById('main');

  const card = document.createElement('div');
  card.setAttribute('id', 'idCard');

  function buttonIteractiveLeft() {
    const fragment = document.createDocumentFragment();
    const div = document.createElement('div');
    div.setAttribute('id', 'divButtons')

    const buttonPositive = document.createElement('button');
    buttonPositive.append('+');
    fragment.appendChild(buttonPositive);

    const valueLikes = document.createElement('strong');
    valueLikes.setAttribute('id', 'iteractionsValue')
    valueLikes.append('20');
    fragment.appendChild(valueLikes)

    const buttonNegative = document.createElement('button');
    buttonNegative.append('-');
    fragment.appendChild(buttonNegative);

    div.appendChild(fragment);
    return div;
  }

  function divContent() {
    const fragment = document.createDocumentFragment();

    const div = document.createElement('div');
    div.setAttribute('id', 'divContent');

    /*Header */
    const divHeader = function () {
      const div = document.createElement('div');
      div.setAttribute('id', 'idHeader')


      const imgUser = document.createElement('img');
      imgUser.setAttribute('id', 'imgUser')
      imgUser.src = image.png;
      fragment.appendChild(imgUser)

      const strongUserName = document.createElement('strong');
      strongUserName.setAttribute('id', 'strongName')
      strongUserName.append(username);
      fragment.appendChild(strongUserName);

      const dateUser = document.createElement('p');
      dateUser.setAttribute('id', 'date')
      dateUser.append('2 meses');
      fragment.appendChild(dateUser);

      const svgReply = document.createElement('img');

      const strongReply = document.createElement('strong');
      strongReply.append('Reply');

      const divReply = document.createElement('div');
      divReply.appendChild(svgReply);
      divReply.appendChild(strongReply);
      fragment.appendChild(divReply);


      div.appendChild(fragment);
      return div;
    }

    /*coments */
    const divComents = function () {
      const div = document.createElement('div');

      const paragrapho = document.createElement("p");
      paragrapho.append(content);
      fragment.appendChild(paragrapho);

      div.appendChild(fragment);
      return div;
    }

    fragment.appendChild(divHeader())
    fragment.appendChild(divComents())

    div.appendChild(fragment)
    return div;
  }

  fragment.appendChild(buttonIteractiveLeft());
  fragment.appendChild(divContent());

  card.appendChild(fragment);
  main.appendChild(card);
}


//CRUD Criar, ler, atualizar e excluir comentários e respostas
//Comentários positivos e negativos
//Veja o layout ideal para o aplicativo dependendo do tamanho da tela do dispositivo
//Veja os estados de foco para todos os elementos interativos na página
//Bônus : se você estiver construindo um projeto puramente front-end, use localStoragepara salvar o estado atual no navegador que persiste quando o navegador é atualizado
//Bônus : construa este projeto como um aplicativo full-stack

