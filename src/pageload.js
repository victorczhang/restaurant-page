const pageLoad = () => {
    var documentNode = document.getElementById('content');
    documentNode.setAttribute('class', 'front-page')

    var imageNode = document.createElement('img');
    documentNode.appendChild(imageNode);
    imageNode.src = 'https://media.cntraveler.com/photos/5ab00e8c24403c5249d92ccc/master/w_4000,h_2688,c_limit/isana-sushi_Yasuyuki-Takagi_2018_5U4A5519.jpg';

    var reserveBtn = document.createElement('button');
    reserveBtn.innerHTML = 'RESERVATIONS';
    reserveBtn.type = 'button';
    documentNode.appendChild(reserveBtn);


    var headingNode = document.createElement('h1');
    documentNode.appendChild(headingNode);
    var textNode = document.createTextNode('Victor\'s Restaurant');
    headingNode.appendChild(textNode);

    var secondHeading = document.createElement('h2');
    documentNode.appendChild(secondHeading);
    var descriptionNode = document.createTextNode('Omakase at non-omakase prices');
    secondHeading.appendChild(descriptionNode);

    // var imageNode = document.createElement('img');
    // documentNode.appendChild(imageNode);
    // imageNode.src = 'https://media.cntraveler.com/photos/5ab00e8c24403c5249d92ccc/master/w_4000,h_2688,c_limit/isana-sushi_Yasuyuki-Takagi_2018_5U4A5519.jpg';

    var copyNode = document.createElement('p');
    documentNode.appendChild(copyNode);
    var copyText = document.createTextNode('Our mission is to deliver quality seafood and an Omakase experience here in the heart of San Francisco using sustainable shellfish and local farms. This allows us to keep costs low and make the omakase experience accesible for all.');
    copyNode.appendChild(copyText);
}

export { pageLoad };

// var documentNode = document.getElementById('content');

// var headingNode = document.createElement('h1');
// var textNode = document.createTextNode('Victor\s Restaurant');
// var restaurantName = headingNode.appendChild(textNode);

// documentNode.appendChild(restaurantName);