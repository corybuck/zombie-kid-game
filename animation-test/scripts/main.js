

loadSprites()
    .then(
        (data) => JSON.parse(data), 
        (error) => {
            console.error(error);   
        }
    ).then((sprites)=> {
        console.log(sprites);
    });