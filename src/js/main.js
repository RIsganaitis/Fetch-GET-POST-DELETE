fetch("https://golden-whispering-show.glitch.me")
    .then(function(file){return file.json()})
    .then(function(file){
        console.log(file);
        file.forEach(element => {
            let advertBlock = document.createElement("div");
            // document.querySelector(".blocks").append(advertBlock);
            let img = document.createElement("img");
            let price = document.createElement("p");
            let title = document.createElement("p");
            let deleteBtn = document.createElement("button");
            img.src = element.image;
            price.textContent = "€" + element.price;
            title.textContent = element.title;
            deleteBtn.innerText = "Ištrinti";
            document.querySelector(".blocks").append(advertBlock);
            document.querySelector(".blocks > div:last-child").append(img);
            document.querySelector(".blocks > div:last-child").append(title);
            document.querySelector(".blocks > div:last-child").append(price);
            document.querySelector(".blocks > div:last-child").append(deleteBtn);
        });
})

// document.querySelectorAll("button").addEventListener("click", removeFunction);
// function removeFunction(id){
//         fetch("https://golden-whispering-show.glitch.me" + "/" + 1, {
//           method: 'DELETE'
//         }).then(() => {
//            console.log('removed');
//         }).catch(err => {
//           console.error(err)
//         });
// }