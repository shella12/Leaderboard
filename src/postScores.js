
const result = async (urlScore,name,score) =>{
    const result= await fetch(urlScore, {
         method: 'POST',
         body: JSON.stringify({
             user: name,
             score: score
         }),
         headers: {
           'Content-type': 'application/json; charset=UTF-8',
         },
       })
         .then((response) => response.json())
         .then((json) => console.log(json));
 }

 module.exports = result;