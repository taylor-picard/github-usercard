import axios from 'axios';
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
const followersArray = ['tetondan', 'dustinmyers', 'justsml', 'luishrd', 'bigknell'];

for(let i = 0; i < followersArray.length; i++){
  findCard(followersArray[i]);
}

function findCard (user) {
  axios.get(`https://api.github.com/users/${user}`)
  .then(response => {
    document.querySelector('.cards').appendChild(githubCard(response.data));
  })
  .catch(err => console.error(err));
}


/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this data in order to use it to build your component function

    Skip to STEP 3 (line 34).
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/





/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

function githubCard(gitInfo){
  const card = document.createElement('div');
    card.classList.add('card');
  const img = document.createElement('img');
    img.src = gitInfo.avatar_url;
    img.alt = 'user avatar';
    card.appendChild(img);
  const cardInfo = document.createElement('div');
    cardInfo.classList.add('card-info');
    card.appendChild(cardInfo);
  const name = document.createElement('h3');
    name.classList.add('name');
    name.textContent = gitInfo.name;
    cardInfo.appendChild(name);
  const login = document.createElement('p');
    login.classList.add('username');
    login.textContent = gitInfo.login;
    cardInfo.appendChild(login);
  const location = document.createElement('p');
    location.textContent = `Location: ${gitInfo.location}`;
    cardInfo.appendChild(location);
  const profile = document.createElement('p');
    profile.textContent = `Profile:`;
    cardInfo.appendChild(profile);
  const pageLink = document.createElement('a');
    pageLink.href = gitInfo.url;
    pageLink.textContent = gitInfo.html_url;
    profile.appendChild(pageLink);
  const followers = document.createElement('p');
    followers.textContent = `Followers: ${gitInfo.followers}`;
    cardInfo.appendChild(followers);
  const following = document.createElement('p');
    following.textContent = `Following: ${gitInfo.following}`;
    cardInfo.appendChild(following);
  const bio = document.createElement('p');
    bio.textContent = `Bio: ${gitInfo.bio}`;
    cardInfo.appendChild(bio);

    return card;
}

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
