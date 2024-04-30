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
  data["comments"].forEach(element => {
    const username = element.user["username"];
    const image = element.user["image"];
    const content = element["content"];
    const replies = element["replies"];
    const date = element["createdAt"];
    const score = element["score"];

    createCards(username, image, content, date, score, replies);
  });
}

function createCards(username, image, content, date, score, replies) {
  const main = document.getElementById('main');

  const card = document.createElement('div');
  card.setAttribute('class', 'card');


  const divButtons = buttonInteractiveLeft(score);
  const divContent = createContent(username, image.png, content, date, score);

  card.appendChild(divButtons);
  card.appendChild(divContent);

  main.appendChild(card);

  if (replies.length > 0) {
    const line = document.createElement('div');
    line.setAttribute('class', 'line')
    replies.forEach(reply => {

      const cardResponse = document.createElement('div');
      cardResponse.setAttribute('class', 'cardResponse')

      const replyContainer = document.createElement('div');
      replyContainer.setAttribute('class', 'reply-container content');

      const replyCard = createContent(reply.user.username, reply.user.image.png, reply.content, reply.createdAt);

      replyContainer.appendChild(replyCard);
      cardResponse.appendChild(replyContainer);
      cardResponse.appendChild(buttonInteractiveLeft(reply.score))
      line.appendChild(cardResponse)
      main.appendChild(line)
    });

  }

}

function buttonInteractiveLeft(score) {
  const div = document.createElement('div');
  div.setAttribute('class', 'buttons');

  const buttonPositive = document.createElement('img');
  buttonPositive.setAttribute('class', 'button');
  buttonPositive.setAttribute('src', '../images/icon-plus.svg');

  const valueLikes = document.createElement('strong');
  valueLikes.setAttribute('class', 'value');
  valueLikes.textContent = score;

  const buttonNegative = document.createElement('img');
  buttonNegative.setAttribute('class', 'button');
  buttonNegative.setAttribute('src', '../images/icon-minus.svg');


  div.appendChild(buttonPositive);
  div.appendChild(valueLikes);
  div.appendChild(buttonNegative);

  return div;
}

function createContent(username, imageUrl, content, date) {
  const div = document.createElement('div');
  div.setAttribute('class', 'content');

  const header = document.createElement('div');
  header.setAttribute('class', 'header');

  const imgUser = document.createElement('img');
  imgUser.setAttribute('src', imageUrl);

  const strongUserName = document.createElement('strong');
  strongUserName.textContent = username;

  const dateUser = document.createElement('p');
  dateUser.setAttribute('class', 'date')
  dateUser.textContent = date;

  const divReply = document.createElement('div');
  divReply.setAttribute('class', 'divReply')
  divReply.textContent = 'Reply';

  const svgReply = document.createElement('img');
  svgReply.setAttribute('src', '../images/icon-reply.svg')
  divReply.appendChild(svgReply)

  header.appendChild(imgUser);
  header.appendChild(strongUserName);
  header.appendChild(dateUser);
  header.appendChild(divReply);

  const paragraph = document.createElement('p');
  paragraph.textContent = content;

  div.appendChild(header);
  div.appendChild(paragraph);

  return div;
}