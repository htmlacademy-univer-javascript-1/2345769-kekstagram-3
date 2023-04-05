import { getRandomPositiveInteger} from "./util.js";
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
}

const arrayUsers = getUsers;

export{arrayUsers};
