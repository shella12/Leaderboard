const idfunc = async (url) => {
  const idfetch = await fetch(url, {
    method: 'POST',
    body: JSON.stringify({
      name: 'New game',
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((obj) => obj.result)
    .then((array) => array.split(' '))
    .then((result) => result[3]);

  return idfetch;
};

module.exports = idfunc;