const shirtsApiUrl = 'http://localhost:9000/userInfo';

// POST (add a shirt)
const postUser = async (user) => {
  const response = await fetch(shirtsApiUrl, {
    method: 'POST',
    body: JSON.stringify(user),
    headers: { 'Content-Type': 'application/json' },
  });

  const data = await response.json();
  return data;
};

// const getUser = async (user) => {
//   const response = await fetch(shirtsApiUrl, {
//     method: 'POST',
//     body: JSON.stringify(user),
//     headers: { 'Content-Type': 'application/json' },
//   });

//   const data = await response.json();
//   return data;
// };

export default postUser;
