const shirtsApiUrl = 'http://localhost:9000/userInfo';

export const postUser = async (user) => {
  const response = await fetch(shirtsApiUrl, {
    method: 'POST',
    body: JSON.stringify(user),
    headers: { 'Content-Type': 'application/json' },
  });

  const data = await response.json();
  return data;
};

export const getUser = async (user) => {
  const response = await fetch(shirtsApiUrl, {
    method: 'GET',
    body: JSON.stringify(user),
    headers: { 'Content-Type': 'application/json' },
  });

  const data = await response.json();
  return data;
};
