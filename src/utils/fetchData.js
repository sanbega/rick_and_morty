const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const API = 'https://rickandmortyapi.com/api/character/'


const fetchData = (url_api) => { 
    return  new Promise ((resolve, reject) => {
    let xhttp = new XMLHttpRequest()
    xhttp.open('GET', url_api, true)
    xhttp.onreadystatechange = () => {
    if (xhttp.readyState === 4 ) {
        (xhttp.status === 200) 
            ? resolve(JSON.parse(xhttp.responseText))  //este if ternario te dice si la condicion se cumple ejecuta esto
            : reject(new Error('Error', url_api)) // else ternario  
    }
    xhttp.send() 
    }
})
}

module.exports = fetchData