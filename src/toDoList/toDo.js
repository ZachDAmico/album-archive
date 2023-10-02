//check comments in login.js
//do i need staff portion of handle login?

//WALK THROUGH DEBUGGER

//make random button
//use math.random to generate random number
// math.floor to round down to whole integer?
// multiply times number of records - records.length?
//match random generated number to record id
//display record matching that id on page

//how can favorite available for new albums added and edited albums?
//how do i unmark a favorited album?

//----------DONE-------------
// SETUP

// make react app
// make json database

//SET UP REACT-ROUTER-DOM!!!!!!
//add browser router!!!!!
// input chosen records with key value pairs into database

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
//WANT TO DISPLAY USER DETAILS TO BE SHOWN IN PROFILE URL
//create user subdirectory

//export and define User component
//should show screen name, actual name, email, and photo - where from?
//return proper JSX for each property to be shown
//REMEMBER PROPS
//test

//create NavBar subdirectory
//create NavBar.js
//create Navbar.css
//WANT TO SHOW NAV BAR AND BE ABLE TO CLICK AND BE LINKED TO CORRECT PAGE

//add imports
//export and define component that allows navigation to correct urls
//need useNavigate()?
//add <ul> element
//add however many <li> needed with styles
//add <Links>
//test

//WANT TO SHOW NAV BAR AND BE ABLE TO CLICK AND BE LINKED TO CORRECT PAGE

//add imports
//export and define component that allows navigation to correct urls
//need useNavigate()?
//add <ul> element
//add however many <li> needed with styles
//add <Links>
//test

//create forms subdirectory
//create AddAlbum.js
//create AddAlbum.css
//MAKE JUDAS PRIEST YEAR WRONG TO USE FOR EDIT, also have 2 Jeff Buckleys
//create EditAlbum.js
//create EditAlbum.css

//WANT TO SHOW FORM THAT ALLOWS USER TO INPUT DETAILS FOR NEW ALBUM
//WANT TO SHOW SEPARATE FORM THAT ALLOWS USER TO EDIT EXISTING ALBUM IN COLLECTION

//add imports
//export and define component that returns JSX of form to add new album
//need input fields for artist name, album name, album art, and release year
//need drop down <select> for genre
//set state
//useEffect() to tell React when and what to render when state changes
//handle state change/event listener
//handle save button click
//need to add new record to database

//create Profile.js
//create Profile.css
//add imports
//User component will need to be passed with props?
//do same for edit, but button is save, not submit
//export and define edit component
//useParams to get recordId from URL
//initialize state
//fetch album data
//set state variable to populate form fields
//create fields JSX
//create handle submit component - needs to be PUT
//use fetch to send PUT update to database
//style
//test
//WANT TO CREATE SUB LIST OF USER'S FAVORITE ALBUMS
//create Favorites.js
//create Favorites.css
//add imports
//export and define component that checks to see if each album in collection
//has been marked as a favorite

// NEED TO ADD ALL PROPERTIES TO USERS IN REGISTER

// WHY AM I NOT SEEING FETCHES IN NETWORK TAB WHEN SUBMITTING NEW ALBUM?
//having favorite on adding form leaves blank space in collection view
//WANT TO SHOW FORM THAT ALLOWS USER TO INPUT DETAILS FOR NEW ALBUM
//WANT TO SHOW SEPARATE FORM THAT ALLOWS USER TO EDIT EXISTING ALBUM IN COLLECTION

// WANT TO DISPLAY USER DETAILS AND FAVORITED ALBUMS

//favorites component will need to be passed with Props?
//add JSX to display use details and favorites
//
// WANT TO SET UP AUTHENTICATION AND LOGOUT
//watch video for authentication and implement
//
//
//
