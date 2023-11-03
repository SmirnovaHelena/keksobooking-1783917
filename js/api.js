const Urls = {
  GET: 'https://27.javascript.pages.academy/keksobooking/data',
  POST: 'https://27.javascript.pages.academy/keksobooking',
};

const makeRequest = (onSuccess, onFail, method, readyData) => {
  fetch(
    Urls[method],
    {
      method: method,
      body: readyData,
    },
  )
    .then((response) => response.ok ? response.json() : response.text().then((data) => Promise.reject(data)))
    .then((data) => {
      onSuccess(data);
    })
    .catch((error) => {
      onFail(error);
    });
};

export { makeRequest };
