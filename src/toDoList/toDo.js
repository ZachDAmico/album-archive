//check comments in login.js
//do i need staff portion of handle login?

//

//WANT TO DISPLAY USER DETAILS TO BE SHOWN IN PROFILE URL
//create user subdirectory

//export and define User component
//should show screen name, actual name, email, and photo - where from?
//return proper JSX for each property to be shown
//REMEMBER PROPS
//test

//WANT TO SHOW NAV BAR AND BE ABLE TO CLICK AND BE LINKED TO CORRECT PAGE
//create NavBar subdirectory
//create NavBar.js
//create Navbar.css
//add imports
//export and define component that allows navigation to correct urls
//need useNavigate()?
//add <ul> element
//add however many <li> needed with styles
//add <Links>
//test

//WANT TO SHOW FORM THAT ALLOWS USER TO INPUT DETAILS FOR NEW ALBUM
//WANT TO SHOW SEPARATE FORM THAT ALLOWS USER TO EDIT EXISTING ALBUM IN COLLECTION
//create forms subdirectory
//create AddAlbum.js
//create AddAlbum.css
//MAKE JUDAS PRIEST YEAR WRONG TO USE FOR EDIT, also have 2 Jeff Buckleys
//create EditAlbum.js
//create EditAlbum.css
//add imports
//export and define component that returns JSX of form to add new album
//need input fields for artist name, album name, album art, and release year
//need drop down <select> for genre
//set state
//useEffect() to tell React when and what to render when state changes
//handle state change/event listener
//handle save button click
//need to add new record to database
//do same for edit, but button is save, not submit

//WANT TO CREATE SUB LIST OF USER'S FAVORITE ALBUMS
//create Favorites.js
//create Favorites.css
//add imports
//export and define component that checks to see if each album in collection
//has been marked as a favorite
//

// WANT TO DISPLAY USER DETAILS AND FAVORITED ALBUMS
//create Profile.js
//create Profile.css
//add imports
//User component will need to be passed with props?
//favorites component will need to be passed with Props?
//add JSX to display use details and favorites
//
//
//
//
//
//----------DONE-------------
// SETUP

// make react app
// make json database
// input chosen records with key value pairs into database

//SET UP REACT-ROUTER-DOM!!!!!!
//add browser router!!!!!

//need auth subdirectory
//create LoginPage.js/welcome

//make API subdirectory in vs code
//create recordsFetchService.js - try postman
//create userFetchService.js - try postman
//create fetch components for each
//get URL for fetch
//make it readable for us - .then =>

//WANT TO DISPLAY ALL RECORDS IN COLLECTION
//make components directory with these inside
//create records subdirectory
//create Records.js
//create RecordDetails.js
//create Records.css
//add imports
//will need to define and export component that displays list of records
//will need to define state and set initial value
//will need to tell React what to render and when - useEffect
//need parent container - <div>?
//need to get each record object's information - map
//will need to return JSX showing list of records in collection
// <ul> with each record being <li>?
//want to display album art via URL - <img>? with src + alt
//test between each
//want to display artist name <li>
//want to display album name <li>
//want to display release year <li>
//want to display genre <li>
//add styles to <ul>, <li>, etc
//create Add New album button
//add styles to button
//add <Link> from button to Add New Form
//REMEMBER PROPS
//add Edit button - should be shown on each album
// - should be separate element
//add styling to edit button
//add <Link> to Edit Album Form
//REMEMBER PROPS
//add delete button - should be on each album
// - should be separate element
//add styling to delete button
//add favorite checkbox - should be on each album
// - should be separate element
//add to .css and implement styles accordingly
//add to App.js along with proper <Routes>
//test
//
//
//

//create User.js
//create User.css
//add imports
