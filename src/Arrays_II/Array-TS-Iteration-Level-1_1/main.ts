
function myDrinks()
{
    let getraenke: string[] = [
        "Coca-Cola",
        "Apfelsaft",
        "Pepsi",
        "Traubensaft",
        "Sprite",
        "Orangensaft",
        "Red Bull Energy Drink",
        "Fanta"
    ];

    getraenke.sort();
    console.log(getraenke);


    let liste = document.getElementById("drink-list");
    if(liste)
    {
        liste.innerHTML = ""; // löscht Inhalt
        getraenke.forEach(drink=>{
            let li = document.createElement("li");
            li.textContent = drink;
            liste.appendChild(li);
        })
    }

}

myDrinks();


