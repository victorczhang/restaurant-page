const pageLoad = () => {
    var documentNode = document.getElementById('content');

    var headingNode = document.createElement('h1');
    documentNode.appendChild(headingNode);
    var textNode = document.createTextNode('Victor\'s Restaurant');
    headingNode.appendChild(textNode);

    var secondHeading = document.createElement('h2');
    documentNode.appendChild(secondHeading);
    var descriptionNode = document.createTextNode('Omakase at non-Omakase Prices');
    secondHeading.appendChild(descriptionNode);

    var imageNode = document.createElement('img');
    documentNode.appendChild(imageNode);
    imageNode.src = 'https://cdn.vox-cdn.com/thumbor/FP91hWPMtwqrgFMIlWi4z7MxwKY=/0x0:1762x1174/1200x900/filters:focal(843x447:1123x727)/cdn.vox-cdn.com/uploads/chorus_image/image/63047503/Nama.0.jpg';
    // imageNode.appendChild(img);

    var copyNode = document.createElement('p');
    documentNode.appendChild(copyNode);
    var copyText = document.createTextNode('Good place to eat');
    copyNode.appendChild(copyText);
    // documentNode.appendChild(textNode);
}

export { pageLoad };

// var documentNode = document.getElementById('content');

// var headingNode = document.createElement('h1');
// var textNode = document.createTextNode('Victor\s Restaurant');
// var restaurantName = headingNode.appendChild(textNode);

// documentNode.appendChild(restaurantName);