const seededGenerator = (date, hour) => {
  const m = 9;
  const d = date.getDate();
  const result = ((d + hour) % m) / 10;

  return result;
};

const fetchAPI = (date) => {
  return new Promise((resolve) => {
    let result = [];

    for (let hour = 15; hour <= 23; hour++) {
      if (seededGenerator(date, hour) < 0.5) result.push(hour + ":00");
      if (seededGenerator(date, hour + 7) < 0.5) result.push(hour + ":30");
    }

    resolve(result);
  });
};

const submitAPI = (formData) => true;

const fakeAPI = {
  fetchAPI: fetchAPI,
  submitAPI: submitAPI,
};

export default fakeAPI;
