fetch("https://golden-whispering-show.glitch.me")
    .then(function(file){return file.json()})
    .then(function(file){
        var lastId = file[file.length-1].id
        console.log(lastId);
        document.getElementById("addNewItems").addEventListener("submit", addNewItem);
        function addNewItem(e){
            e.preventDefault();
            const newData = {
                id: (lastId + 1),
                image: document.getElementById("newImage").value,
                price: document.getElementById("newPrice").value,
                title: document.getElementById("newTitle").value
            };
            console.log(newData);
            fetch("https://golden-whispering-show.glitch.me",{
                method: "POST",
                headers: {                              //Neaišku, kam skirta
                    "Content-type": "application/json", //
                },                                      //
                body: JSON.stringify(newData),
            })
            .then(result => {
                result.json()
            })
            .then(
                alert("Succes"),
                location.href = "index.html"
            )
            .catch((erorr) => {
                alert("erorr")
            })
        }
    })