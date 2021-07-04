import Chatshot from '../assets/projects/chatshot2.png'
import Cocktail from '../assets/projects/cocktail.png'
import Hotel from '../assets/projects/hotel.png'
import Jamming from '../assets/projects/jamming.png'
import Quiz from '../assets/projects/quiz.png'
import Ravenous from '../assets/projects/ravenous.png'
import Search from '../assets/projects/searchappscreenshot.png'
import Pokedex from '../assets/projects/pokedexscreenshot.png'


export const data = [
    {
      id: 1,
      title: 'React Landing Page',
      description:
        'React project using hooks, useContext and an external CMS for the data.  Fully fledged page including data filtering, API usage and responsive design',
      img: Hotel,
      url: ' https://danhotelreactdemo.netlify.app/',
    },
    {
      id: 2,
      title: 'Jamming',
      description:
        'Spotify Playlist creator.  User can search spotify and create a playlist, log-in through OAuth2, then push their custom playlist back to their spotify account',
      img: Jamming,
      url: 'https://danielwilstrop.github.io/jamming/'
    },
    {
      id: 3,
      title: 'Searchy! - Google Clone',
      description:
        'Simple google home page clone, using the wikipedia API for the search results. Lots of accesibilty features were added to this project as part of the learning curve',
      img: Search,
      url: 'https://danielwilstrop.github.io/searchappclone/'
    },
    {
      id: 4,
      title: 'Uni-Chat',
      description:
        'Full-Stack chat app based on needing a place to chat with OU students.  Has user registration and log-in, password encryption, web sockets, mongoDB, web tokens, node and express',
      img:Chatshot,
      url: 'https://webchat-unichat.herokuapp.com/'
    },
    {
    id: 5,
    title: 'Cocktail Recipes',
    description:
      'React app for searching cocktail recipes from the Cocktail DB API, full use of hooks and React Context, responsive design and axios for data fetching',
    img:Cocktail,
    url: 'https://danielwilstrop.github.io/cocktailfinder/#/'
    },
    {
    id: 6,
    title: 'Quiz Time',
    description:
        'Typescript based quiz app with user input and selections used to fetch the data from a trivia API, I used this as a way to learn typescript and its features beyond javascript ',
    img:Quiz,
    url: 'https://danielwilstrop.github.io/typescriptquiz/'
    },
   {
    id: 7,
    title: 'Ravenous',
    description:
        'Search for local restaurants in your area using Yelp for user reviews and the location/contact details, with simple filtering of the data returned from the API',
    img:Ravenous,
    url: 'https://danielwilstrop.github.io/ravenous/'
    },
    {
      id: 7,
      title: 'Pokedex',
      description:
          'Demonstrating filtering of API data with react usecontext() and vanilla JS data manipulation.  All encased in a pokedex to relive soem childhood memories!',
      img:Pokedex,
      url: 'https://danielwilstrop.github.io/pokedex/'
      },
  ];
  
 