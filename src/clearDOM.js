const clear = () => {
    var div = document.getElementById('content');
    while(div.firstChild){
        div.removeChild(div.firstChild);
    }
};

export { clear };