# Taco's Fantasy Advice

### Located at:
#### Git Hub - https://github.com/docholliday211/TacosFantasyFootball
#### Deployed on Heroku: https://tacos-fantasy-advice.herokuapp.com/ (only works during football season due to API constraints)

#### Made by: Josh Ellison aka "wildcard" - Aaron Reinheimer aka "A-A-RON" - Thad Stinson aka "Odin's Beard"

-----README.md-----

# ABOUT
Taco's Fantasy Advice is an app built to help a person plan a draft board for fantasy football.  It allows a
user to search through several filters in order to build a draft board specific to the user's wants.
The filters use the fantasyfootball.com API to retreive information that is updated weekly throughout the season.

It can be found here: https://www.fantasyfootballnerd.com/.

Taco's Fantasy Advice is a full CRUD app utilizing the MEAN stack (Mongoose, Express, Angular, Node.js).  Since
it allows a user to create an individualized draft board, it was neccessarry to install bcrypt for login
authorization.

## Making the App
This app build was a first in many ways.  It is a first time group developement, and the group utilized Angular
for the first time.  The group used Trello to keep track of work tasks and Skitch to build wireframes (two more
firsts). Communication and paired programming became paramount in the building of this app and we were able to
accomplish this task in 5 days.

## Issues and Limitations
The team first had to overcome a CORS issue with the API.  Then we found that the API stringifies it's JSON 
results.  Due to this, the team had to .parse() the information being returned.  This caused some filtering
issues for the app, but we enventually were able to get it to function properly.  The group also had issues
with getting only one div of information to show at a time.  With this being the very first Angular build for
the group, we had to move on to more pressing issues in order to finish the app in the allotted time period.
