const contact = () => {
    var documentNode = document.getElementById('content');

    var headingNode = document.createElement('h1');
    documentNode.appendChild(headingNode);
    var textNode = document.createTextNode('Contact Us');
    headingNode.appendChild(textNode);

    var firstHeading = document.createElement('h2');
    documentNode.appendChild(firstHeading);
    var address = document.createTextNode('Address:');
    firstHeading.appendChild(address);

    var secondHeading = document.createElement('h2');
    documentNode.appendChild(secondHeading);
    var contactPhone = document.createTextNode('By Phone:');
    secondHeading.appendChild(contactPhone);

    var thirdHeading = document.createElement('h2');
    documentNode.appendChild(thirdHeading);
    var contactEmail = document.createTextNode('By Email:');
    thirdHeading.appendChild(contactEmail);

    // var imageNode = document.createElement('img');
    // documentNode.appendChild(imageNode);
    // imageNode.src = 'https://cdn.vox-cdn.com/thumbor/FP91hWPMtwqrgFMIlWi4z7MxwKY=/0x0:1762x1174/1200x900/filters:focal(843x447:1123x727)/cdn.vox-cdn.com/uploads/chorus_image/image/63047503/Nama.0.jpg';
    // // imageNode.appendChild(img);

    // var copyNode = document.createElement('p');
    // documentNode.appendChild(copyNode);
    // var copyText = document.createTextNode('Good place to eat');
    // copyNode.appendChild(copyText);
    // documentNode.appendChild(textNode);
}

export { contact };

// var documentNode = document.getElementById('content');

// var headingNode = document.createElement('h1');
// var textNode = document.createTextNode('Victor\s Restaurant');
// var restaurantName = headingNode.appendChild(textNode);

// documentNode.appendChild(restaurantName);