function checkStringLength (string, length) {
    return string.length <= length;
}

function getRandomPositiveInteger (a, b) {
    const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
    const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
    const result = Math.random() * (upper - lower + 1) + lower;
    return Math.floor(result);
}

let id = 0;
let url = 0;

const descriprion = ['круто', 'бээ'];

function getId () {
  id++;
  return id;
}

function getUrl () {
  url++;
  return `photos/${url}.jpg`;
}

function getUser() {
  return {
    id: getId(),
    url: getUrl(),
    descriprion: descriprion[getRandomPositiveInteger(0, 1)],
    likes: getRandomPositiveInteger(15, 201),
    comments: getRandomPositiveInteger(0, 201)
  }

}
