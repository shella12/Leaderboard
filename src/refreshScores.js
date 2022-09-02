const refresh = async (urlScore) => {
  const displayObject = await fetch(urlScore, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => json.result);

  return displayObject;
};

module.exports = refresh;