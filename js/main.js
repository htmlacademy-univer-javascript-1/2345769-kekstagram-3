function checkStringLength (string, length) {
    return string.length <= length;
}

function getRandomPositiveInteger (a, b) {
    const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
    const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
    const result = Math.random() * (upper - lower + 1) + lower;
    return Math.floor(result);
}

const descriprion = ['круто', 'бээ'];

function getUser(id, url) {
  return {
    id: id,
    url: `photos/${url}.jpg`,
    descriprion: descriprion[getRandomPositiveInteger(0, 1)],
    likes: getRandomPositiveInteger(15, 201),
    comments: getRandomPositiveInteger(0, 201)
  }
}

function getUsers(){
  const arrayUsers = []
  for (let i = 1; i <= 25; i++) {
    arrayUsers[i] = getUser(i, i);
  }
  return arrayUsers;