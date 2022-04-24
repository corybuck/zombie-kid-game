

function loadSprites() {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", "../shared/assets/sprites.json");
        xhr.onreadystatechange = function (ev) {
            if(xhr.readyState === 4 && xhr.status === 200) {
                resolve(xhr.response || xhr.responseText)
            }
        };
        xhr.onerror = reject;
        xhr.send();
    });
}