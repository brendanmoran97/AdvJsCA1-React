Advanced JavaScript
Continuous Assessment 1 - React Web App Development

N00163619 - Brendan Moran

This project was made using ReactJS, Bootstrap, React Bootstrap, JQuery, JavaScript, HTML and CSS. the web app provides the user with information on Rick and Morty’s characters and episodes. The user can filter the characters to see who is currently dead, alive or unknown. They can also choose to only view episodes from a certain season. 

The application is currently hosted on FireBase. 


User Stories: 
The users of the web app will have varying requirements depending on if they have watched the show or not, or if they want to find a specific piece of information.

As an avid viewer, I want to know the list of episodes my favourite character is in so I can watch only those episodes.
As a user, I want to know how many episodes there in just season one so I can decide how many to watch a night to catch up. 
As an occasional viewer, I want to see how many characters are dead in the show to see if I missed my favourite character dying. 
As a user, I want to see what characters show up in the season finale of season two to see if I was right to think a certain character appeared. 


Wireframes:
A website wireframe, also known as a page schematic or blueprint for a screen, is a visual guide that represents the skeletal framework of a website. React allows the developer to split the code up into components. This increases the reusability of the code and makes the application modular. The images below show the structure of my application.


Requirements: 
Components:
Components are independent and reusable bits of code. They serve the same purpose as JavaScript functions, but work in isolation and returns HTML via a render function. This application was built using a number of components as shown above, for example the <Character/> component is used to create a card for each character in the API. The components are then exported -> 
and imported -> 
depending if they are needed or not. 
State:
State allows special components to be created within React. The state is initialised within the constructor of a component. 


It is then ready to be manipulated later using setState.

Props:
Props are used to control the information/ data shown by a component. 


The modal is being passed the characters into the modal component. Then in the modal component this prop which holds all information on the characters is used to display information about that character. 
Conditional Rendering:
Conditional rendering is used when the modal window is rendered. This prevents a huge amount of requests being pulled from the API when the page is loaded or the state is changed. Clicking the more info button changes the state from false to true. It then uses JQuery to load either all characters in that episode or all episodes a character appears in depending on what page you are on. 
API:
The API I used in this project was the Rick And Morty API. It provides all the information for the web app via JSON with varying endpoints. For my application I used two separate endpoints, characters and episodes. There is no API key needed to authenticate the API. 
Firebase:
The web application can be found at react-app-8d646.firebaseapp.com or by clicking here.

To deploy a project on firebase is a relatively easy process. Once you have created your application, you must install the Firebase CLI (npm install -g firebase-tools). You then need to login to your firebase account using firebase login. You can then create a production build of your project that you will later deploy using firebase init, from there the CLI steps you through the process of setting it up. Once it is ready, you need to use firebase deploy. It will deploy your application and provide you with the URL of your application. 
React Router:
React-Router is for matching URL’s with the various pages within the application. It is the standard routing library used within React. The application provides a navigation system with a guide on how to use the application itself and a contact section as well as the character and episode guide.

React Bootstrap/ Bootstrap:
React Bootstrap and Bootstrap were used to style the application. The libraries provided the necessary functionality for multiple aspects of the application such as the cards for characters and episodes, the grid system and the modal to name a few. 
Discussion:
Overall I was happy with the end result and progression of this project. It was my first time using React and I did find it different and sometimes difficult to wrap my head around. Once I gained a better understanding of how the states/components/props worked, it was easy to see that this was a great way to code more efficiently. 

If I had some extra time I would like to implement ReactNative instead of only having everything responsive for mobile. 
To get it Running:
If you want to this application locally, you need to do the following:
Clone the application’s repository git/clone https://github.com/brendanmoran97/AdvJsCA1-React
Run npm install to install dependencies
Run npm start and the application will launch in a new tab using your default browser. Alternatively you can open it in a browser of your choosing by navigating to http://localhost:3000/
You can now use the application. You are brought directly to the homepage which will allow you to choose which guide you wish to view first. Alternatively you can navigate to the ‘Brendan Moran’ Page located on the right hand side of the NavBar to see some instructions on how to get the most out of the guide.
References:
https://reactjs.org/
https://react-bootstrap.github.io/
https://iadt-advancedjs.github.io/
https://rickandmortyapi.com/documentation/




