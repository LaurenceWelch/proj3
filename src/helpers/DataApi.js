class DataApi {
  get(url) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        fetch(url)
          .then(response => {
            if (response.ok) {
              return response.json();
            } else {
              throw new Error('Something went wrong!');
            }
          })
          .then(json => {
            resolve(json);
          })
          .catch(err => {
            reject(err);
          });
      }, 1000);
    });
  }
}

export default new DataApi();
