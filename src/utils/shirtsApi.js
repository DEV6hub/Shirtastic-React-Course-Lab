const shirtsApiUrl = 'http://localhost:9000/shirts';

// POST (add a shirt)
export const postShirt = async (shirt) => {
  fetch(shirtsApiUrl, {
    method: 'POST',
    body: JSON.stringify(shirt),
    headers: { 'Content-Type': 'application/json' },
  });
};

// PUT (update a shirt)
export const putShirt = async (shirt) => {
  fetch(`${shirtsApiUrl}/${shirt.id}`, {
    method: 'PUT',
    body: JSON.stringify(shirt),
    headers: { 'Content-Type': 'application/json' },
  });
};

// GET (fetch all shirts)
export const getShirts = async () => {
  const response = await fetch(shirtsApiUrl);
  if (response.status !== 200) throw new Error(`${response.status} ${response.statusText}`);
  const data = await response.json();
  console.log('shirts', data);
  return data;
};
