# Project3

Final project for the KU coding bootcamp.<br>
https://fitnessfinder.herokuapp.com

# Technologies Used <br>

- React <br>
- Node <br>
- Express <br>
- HTML5 <br>
- CSS <br>
- Javascript <br>
- Mongo <br>


# New Technologies

- Mlab <br>
- Bcrypt<br>
- Passport<br>
- Reactstrap <br>

# API's
-Google Maps <br>
-Meetup API <br>
-Eventbrite <br>

# Created by

Jacqueline Kolze (Back end) [GitHub](https://github.com/Jkolze1) <br>
Savannah Niemeyer (Front end) [GitHub](https://github.com/sniemeyer1)

# Links

https://fitnessfinder.herokuapp.com <br>
https://jkolze1.github.io/Project3/

## Process

###### Some rough digital mockups of layout essentials:

---

![Splash Page](/public/assets/images/mockups/SplashPage.png 'Splash Page')

###### This is the first page a user sees when they open the app. Logo with high res photo in background. This page will have a timeout set for a few seconds when the app loads.

---

![Sign Up or Sign In](/public/assets/images/mockups/SignUpSignIn.png 'Sign Up or Sign In')

###### The first page that opens gives the user options to sign up or log in. Users can log in with their email or via facebook.

---

![Sign Up](/public/assets/images/mockups/SignUpPage.png 'Sign Up')

###### Sign up redirects here. User will input their info into a form to create an account.

---

![Home](/public/assets/images/mockups/Userhome.png 'User Home')

###### After sign in, the user is directed here. The home button on the bottom nav bar will also redirect here. The nav bar at the bottom includes buttons that link to Home, Events, Connect, and Maps. This page displays the user's profile as well as links to modals that show the users "favorited" places/groups/events.

---

![Find Events](/public/assets/images/mockups/FindEvents.png 'Find Events')

###### Events button will redirect here. Users can search for upcoming local events with parameters via Active.com's API, and a modal will display results. Users can then save events in which they are interested in their favorites database.

---

![Connect](/public/assets/images/mockups/Connect.png 'Connect')

###### Connect button will redirect here. Users can search for fitness clubs or groups using Meetup's API. Search results will appear in a modal. Users can save their favorites to their favorites database.

---

![Maps of Local Parks](/public/assets/images/mockups/Maps.png 'Maps')

###### Map button will redirect here. Once location parameter is entered (or hometown is checked), a modal will display with a map, using Google Maps API. Users can save their favorite places to their personal database.

---

###### Examples of digital mockups round 2:

![Sign In](/public/assets/images/mockups2/signin.png 'sign in')

###### For the simple login/Sign up component, Passport is used for authentication, MongoDB to store user info, and Bcrypt to hash out sensitive materials.

---

![Home](/public/assets/images/mockups2/home.png 'home')

###### Buttons that redirect to search pages will display on on home page and eventually there will be a container that shows a user's favorited items. Footer buttons are available on all pages for intuitive navigation.

---

![Find Events](/public/assets/images/mockups2/findevents.png 'find events')

###### A form will allow a user to search parameters and location, as well as the option to view their saved events. The meetup and places pages will have a near-identical layout.

---

![Find Places](/public/assets/images/mockups2/places.png 'places')

###### The places page will allow a user to see the top-rated places based on Yelp.

---
