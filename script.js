const alert = document.querySelector(".alert")
function getInputValue(){
    var inputVal = document.getElementById("myInput").value;
     fetch('https://www.omdbapi.com/?apikey=e4db3ced&t='+(inputVal))
            .then((response) => {
        return response.json();})
            .then((myJson) => {
           console.log (myJson.Error);
       if (myJson.Error){alert.inerHtml="error"};
        console.log(myJson.Title,myJson.Plot,myJson.Ratings[1].Value,myJson.Runtime,myJson.Director);
        console.log(myJson);
    const filmas = function() {
        document.write(" Filmo pavadinimas: " + myJson.Title + "<br>" + " Filmo_aprasimas: " + myJson.Plot + "<br>" + " reitingas: " + myJson.Ratings[1].Value + "<br>" + " trukme: " + myJson.Runtime + "<br>" + " rezisierius: " + myJson.Director);}
        filmas();
});
}



