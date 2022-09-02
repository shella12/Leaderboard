
const refresh = async (urlScore) =>{

     const displayObject= await fetch(urlScore,{
         method: 'GET',
         headers: {
             'Content-type': 'application/json; charset=UTF-8',
           },
     })
     .then((response) => response.json())
     .then((json) => console.log(json.result));
 }

 module.exports = refresh;