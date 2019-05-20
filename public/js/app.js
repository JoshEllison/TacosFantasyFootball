// create our angular app
// const apiURL = 'https://www.fantasyfootballnerd.com/service/' + apiKey
// const apiKey = iqiam5yq7fm7
const app = angular.module('FootballsApp', [])
// create our app controller
app.controller('MainController', [ '$http', function($http) {

//
//https://www.fantasyfootballnerd.com/service/weekly-rankings/json/apiKey/QB/2/1/
// https://www.fantasyfootballnerd.com/service/weekly-idp/json/apiKey/
//https://www.fantasyfootballnerd.com/service/weekly-projections/json/apiKey/QB/1/
//https://www.fantasyfootballnerd.com/service/draft-idp/json/apiKey/
////https://www.fantasyfootballnerd.com/service/draft-rankings/json/apiKey/1/QB/
//https://www.fantasyfootballnerd.com/service/draft-projections/json/apiKey/QB/

  this.h5 = 'Fantasy Football!!!'
 // because of 2 way binding...anytime the holidays array is updated (add/remove)..
 // this will trigger Angular to update the DOM
  // this.authToken = ''
  // this.blogs = []
  // this.blog = ''
  this.createFormDR = ''
  this.formDR = []
  this.creatFormDP = ''
  this.formDP = []
  this.createFormIDPDraft = ''
  this.formIDPDraft = []

  this.createFormWR = ''
  this.formWR = []
  this.createFormDC = ''
  this.formDC = []
  this.weeklyWP = ''
  this.formWP =[]
  this.weeklyIDP = ''
  this.formIDP = []

  this.idpCallDrafts = []
  this.idpCallDraft = ''

  this.draftProjectionsCalls = []
  this.draftProjectionsCall = ''

  this.drDatas = []
  this.drData = ''
  this.wpData = ''
  this.dpData = ''
  this.idpData = ''
  this.wrData = ''
  this.dcData = ''
  this.iData = ''
  // this.formIDP[0] + '/' + this.formIDP[1] + '/'
  // this.editBlog = {};
  // this.tools = [] //fill with buttons
  //DRAFT TOOLS


//position filter doesn't work
this.draftRankings = () => {
  console.log(this.createFormDR);
  $http({
    method:'GET',
    url:'/footballs',
    data: {position: this.createFormDR,
    PPR: this.createFormDRCheck}
  }).then(response => {
    this.formDR.unshift(response.data)
    console.log(response);
    this.callDraftRankings()
  }).catch(err => {
    console.log(err);
  })
}

this.callDraftRankings = () => {
  $http({
    method:'GET',
    url:'/footballs/draftRankings/'+ this.createFormDR
  }).then(response => {
    let parseDataDR = JSON.parse(response.data.body)
    console.log(parseDataDR);
    this.drData = parseDataDR.DraftRankings
    console.log(this.drData);


  }).catch(err => {
    console.log(err);
  })
}

//position works
this.draftProjections = () => {
  console.log(this.createFormDP);
  $http({
    method:'GET',
    url:'/footballs',
    data: {position: this.createFormDP,
    PPR: this.createFormDPCheck}
  }).then(response => {
    this.formDP.unshift(response.data)
    console.log(response);
    this.draftProjectionsCall()
  }).catch(err => {
    console.log(err);
  })
}

this.draftProjectionsCall = () => {
  $http({
    method:'GET',
    url:'/footballs/draftProjections/'+ this.createFormDP
  }).then(response => {
    let parseDataDP = JSON.parse(response.data.body)
    this.dpData = parseDataDP.DraftProjections
    console.log(this.dpData);
  }).catch(err => {
    console.log(err);
  })
}
// not filtering based on position entered... hmm lol
this.draftIDP = () => {
  console.log(this.createFormIDPDraft);
  $http({
    method:'GET',
    url:'/footballs',
    data: {position: this.createFormIDPDraft,
    ppr: this.createFormIDPDraftCheck}
  }).then(response => {
    this.formIDPDraft.unshift(response.data)

    console.log(response);
    this.draftIDPCall()
  }).catch(err => {
    console.log(err);
  })
}

this.draftIDPCall = () => {

  $http({
    method:'GET',
    url:'/footballs/draftIDP/'
  }).then(response => {

    let parseDataIDP = JSON.parse(response.data.body)
    this.idpData = parseDataIDP.week
    console.log(this.idpData);

  }).catch(err => {
    console.log(err);
  })
}

///SEASON TOOLS
//Position filter works
this.weeklyRankings = () => {
  console.log(this.createFormWR);
  $http({
    method:'GET',
    url:'/footballs',
    data: {position: this.createFormWR,
    ppr: this.createFormWRCheck}
  }).then(response => {
    this.formWR.unshift(response.data)
    console.log(response);
    this.weeklyRankingsCall()
  }).catch(err => {
    console.log(err);
  })
}

this.weeklyRankingsCall = () => {
  $http({
    method:'GET',
    url:'/footballs/weeklyRankings/'+ this.createFormWR
  }).then(response => {
    let parseDataWR = JSON.parse(response.data.body)
    this.wrData = parseDataWR
    console.log(this.wrData);
  }).catch(err => {
    console.log(err);
  })
}
//no filtering call so need to filter returned object
this.weeklyDC = () => {
  console.log(this.createFormDC);
  $http({
    method:'GET',
    url:'/footballs',
    data: {position: this.createFormDC,
    ppr: this.createFormDCCheck}
  }).then(response => {
    this.formDC.unshift(response.data)
    console.log(response);
    this.weeklyDCCall()
  }).catch(err => {
    console.log(err);
  })
}

this.weeklyDCCall = () => {
  $http({
    method:'GET',
    url:'/footballs/depthCharts/'
  }).then(response => {
    let parseDataDC = JSON.parse(response.data.body)
    this.dcData = parseDataDC.DepthCharts
    console.log(this.dcData);
  }).catch(err => {
    console.log(err);
  })
}
//doesn't have filters added so we can filter object returned
this.weeklyInjuries = () => {
  console.log(this.createFormInjuries);
  $http({
    method:'GET',
    url:'/footballs/injuries'
  }).then(response => {
    let parseDataI = JSON.parse(response.data.body)
    this.iData = parseDataI
    console.log(this.iData);

  }).catch(err => {
    console.log(err);
  })
}




//postion works
this.weeklyWP = () => {
  console.log(this.createFormWP);
  $http({
    method:'GET',
    url:'/footballs',
    data: {position: this.createFormWP,
    ppr: this.createFormWPCheck}
  }).then(response => {
    this.formWP.unshift(response.data)
    console.log(response);
    this.weeklyWPCall()
  }).catch(err => {
    console.log(err);
  })
}

this.weeklyWPCall = () => {
  $http({
    method:'GET',
    url:'/footballs/weeklyProjections/' + this.createFormWP
  }).then(response => {
    let parseDataWP = JSON.parse(response.data.body)
    this.wpData = parseDataWP
    console.log(this.wpData);
  }).catch(err => {
    console.log(err);
  })
}

//position filter doesn't work
this.weeklyIDP = () => {
  console.log(this.createFormIDP);
  $http({
    method:'GET',
    url:'/footballs',
    data: {position: this.createFormIDP,
    ppr: this.createFormIDPCheck}
  }).then(response => {
    this.formIDP.unshift(response.data)
    console.log(response);
    this.weeklyIDPCall()
  }).catch(err => {
    console.log(err);
  })
}

this.weeklyIDPCall = () => {
  $http({
    method:'GET',
    url:'/footballs/weeklyIDP/' + this.createFormIDP
  }).then(response => {
    let parseDataWIDP = JSON.parse(response.data.body)
    this.wIDPData = parseDataWIDP
    console.log(this.wIDPData);
  }).catch(err => {
    console.log(err);
  })
}

  // createHoliday method
  // this.createBlog = () => {
  //   this.createForm.tags = this.createForm.tags.split(' ')
  //   console.log(this.createForm.tags);
  //   $http({
  //     method:'POST',
  //     url:'/footballs',
  //     data: this.createForm
  //   }).then(response => {
  //     // holiday was created successfully...what to no now?
  //     // option 1: call the getHolidays method
  //     // this.getHolidays()
  //     // option 2: push object into holidays array
  //     this.blogs.unshift(response.data)
  //     this.createForm = {}
  //     console.log(response)
  //   }).catch(err => {
  //     console.log(err)
  //   })
  // } // closes createHoliday

  // getHolidays method
  // get auth token
  // this.getBlogs = () => {
  //   $http({
  //     method: 'GET',
  //     url: '/footballs'
  //   }).then( response => {
  //     this.authToken = response.data
  //
  //     this.blogs = response.data
  //     this.blog = this.blogs[0]
  //     console.log(this.blogs)
  //   }).catch( err => { console.log(err)})
  // } // close getHolidays
  //
  // // deleteHoliday method
  // this.deleteBlog = id => {
  //   $http({
  //     method:'Delete',
  //     url: '/footballs/' + id
  //     // the delete has been successful
  //   }).then(response => {
  //     console.log(response.data)
  //     // target the object in the holidays array and delete it
  //     // findIndex is a loop just like .forEach, .map, .filter, .reduce
  //     const removeByIndex = this.blogs.findIndex(blog => blog._id === id)
  //     // remove it from the array
  //     this.blogs.splice(removeByIndex, 1)
  //   }).catch(err => console.log(err))
  // } // close deleteHoliday
  //
  // // updateCelebrated method
  // this.updateBlog = blog => {
  //   $http({
  //     method:'PUT',
  //     url: '/blogs/' + blog._id,
  //     data: blog
  //   }).then(response => {
  //     console.log(response.data.blog)
  //
  //   }).catch(err => console.log(err))
  // } // close updateCelebrated
  //
  // // chooseOneHoliday method
  // this.chooseOneBlog = blog => {
  //   this.blog = blog
  //   console.log(this.blog.name)
  // }
  //
  // this.increaseLikes = blog => {
  //   blog.likes +=1;
  //   this.updateBlog(blog)
  //
  // }
  //
  // // call the getHolidays method on page load
  // this.getBlogs()
  //
  // //Edit and Modal
  // this.editBlogModal = (blog) => {
  //   this.editBlog.modal = !this.editBlog.modal;
  //   this.editBlog.blog = blog;
  //   console.log(blog.tags);
  //   let tempTags = blog.tags.slice(0);
  //   this.editBlog.blog.tags = tempTags.join(' ');
  // }
  // this.saveEditBlog = (blog) => {
  //   blog.tags = blog.tags.split(' ')
  //   console.log(blog.tags);
  //   this.updateBlog(blog);
  //   this.editBlog = {};
  // }
  // this.cancelEditBlog = (blog) => {
  //   this.editBlog = {};
  //   console.log(blog);
  //   this.getBlogs(blog);
  // }


}]) // closes app.controller


///////////////////////////////////////////////////////////////////////////////
//Starting to build out code and psuedo sections for our implementation

//
// psuedo for our selection stuff

// this.editFootballModal = (football) => {
//   this.editFootball.modal = !this.editFootball.modal;
//   this.editFootball.football = football;





// this.getFiltered = () => {
//   $http({
//     method: 'GET',
//     url: 'https://www.fantasyfootballnerd.com/service/' + filteredVar
//   }).then( response => {
//     this.authToken = response.data
//
//     // this.blogs = response.data
//     // this.blog = this.blogs[0]
//     // console.log(this.blogs)
//   }).catch( err => { console.log(err)})
// }
// for the HTML with API calls
// <form ng-on click //then have modal script bring it up in a modal

//  create button for specific query ex draft rankings add check for filter ppr or non ppr. On click have modal pop up for query positions with drop down for all or single position in a form. have form on submit call function to query new call.

////////////////// weekly rankings required week position and ppr 1 for yes ppr (check box) . results in array. so set variable to empty array to store results.data
//https://www.fantasyfootballnerd.com/service/weekly-rankings/json/apiKey/QB/2/1/
///service/{SERVICE-NAME}/{FORMAT}/{API-KEY}/{position}/{week}/{ppr}/
// position required and week required //optional ppr
// data example
// {
//     "Week": 2,
//     "PPR": 1,
//     "Position": "QB",
//     "Rankings": [
//         {
//             "week": "2",
//             "playerId": "14",
//             "name": "Drew Brees",
//             "position": "QB",
//             "team": "NO",
//             "standard": "24.80",
//             "standardLow": "18.92",
//             "standardHigh": "32.00",
//             "ppr": "24.80",
//             "pprLow": "18.92",
//             "pprHigh": "32.00",
//             "injury": null,
//             "practiceStatus": null,
//             "gameStatus": null,
//             "lastUpdate": null
//         },


////////////////// depth chart filter by team. Do 2 positions for everything but WR (3)
//https://www.fantasyfootballnerd.com/service/depth-charts/json/apiKey/
// data format {
//     "DepthCharts": {
//         "ARI": {
//             "RB": [
//                 {
//                     "team": "ARI",
//                     "position": "RB",
//                     "depth": "1",
//                     "playerId": "240",
//                     "playerName": "Rashard Mendenhall"
//                 },



////////////////// injuries leave empty for current week or drop down for previous weeks.
//https://www.fantasyfootballnerd.com/service/injuries/json/apiKey/1/
// 1 in this example would be for week 1. blank is for current week
// {
//     "Week": 1,
//     "Injuries": {
//         "ARI": [
//             {
//                 "week": "1",
//                 "playerId": "0",
//                 "playerName": "Javier Arenas",
//                 "team": "ARI",
//                 "position": "CB",
//                 "injury": "Hip",
//                 "practiceStatus": "Full Practice",
//                 "gameStatus": "Probable",
//                 "notes": "",
//                 "lastUpdate": "2013-09-09",
//                 "practiceStatusId": 0
//             },

////////////////// idp weekly same format
// https://www.fantasyfootballnerd.com/service/weekly-idp/json/apiKey/
// {
//     "week": "4",
//     "rankings": [
//         {
//             "rank": "1",
//             "player": "J.J. Watt",
//             "team": "HOU",
//             "position": "DE"
//         },


////////////////// weekly projections position filter same weekly filter options
//https://www.fantasyfootballnerd.com/service/weekly-projections/json/apiKey/QB/1/

// {
//     "Week": 1,
//     "Position": "QB",
//     "Projections": [
//         {
//             "week": "1",
//             "playerId": "14",
//             "position": "QB",
//             "passAtt": "39.0",
//             "rushTD": "25.0",
//             "passYds": "317.0",
//             "passTD": "2.0",
//             "passInt": "1.0",
//             "rushAtt": "1.0",
//             "rushYds": "1.0",
//             "rushTD": "0.0",
//             "fumblesLost": "0.0",
//             "receptions": "0.0",
//             "recYds": "0.0",
//             "recTD": "0.0",
//             "fg": "0.0",
//             "fgAtt": "0.0",
//             "xp": "0.0",
//             "defInt": "0.0",
//             "defFR": "0.0",
//             "defFF": "0.0",
//             "defSack": "0.0",
//             "defTD": "0.0",
//             "defRetTD": "0.0",
//             "defSafety": "0.0",
//             "defPA": "0.0",
//             "defYdsAllowed": "0.0",
//             "displayName": "Drew Brees",
//             "team": "NO"
//         },

// ////////////////idp draft rankings filter by position S LB DE CB DT////////////////
//https://www.fantasyfootballnerd.com/service/draft-idp/json/apiKey/
// can pass in position ex S at end
// {
//     "DraftIDP": [
//         {
//             "rank": "1",
//             "player": "Luke Kuechly",
//             "team": "CAR",
//             "position": "LB",
//             "bye": "7"
//         },

////////////////// draft rankings//////////
////https://www.fantasyfootballnerd.com/service/draft-rankings/json/apiKey/1/QB/
// 1 is for ppr set equal to check box
// QB is another filter. figure out how to set to variable and have filters alter. maybe store as object if multiple filters are selected.
// {
//     "PPR": 1,
//     "DraftRankings": [
//         {
//             "playerId": "259",
//             "position": "RB",
//             "displayName": "Adrian Peterson",
//             "fname": "Adrian",
//             "lname": "Peterson",
//             "team": "MIN",
//             "byeWeek": "5",
//             "nerdRank": "1.826",
//             "positionRank": "1",
//             "overallRank": "1"
//         },

////////////////// draft projections fantasy points////////////////
//https://www.fantasyfootballnerd.com/service/draft-projections/json/apiKey/QB/
// const apiURL = https://www.fantasyfootballnerd.com/service/
// const apiKey = iqiam5yq7fm7
// {
//     "DraftProjections": [
//         {
//             "playerId": "14",
//             "completions": "422",
//             "attempts": "640",
//             "passingYards": "4992",
//             "passingTD": "40",
//             "passingInt": "17",
//             "rushYards": "28",
//             "rushTD": "1",
//             "fantasyPoints": "335",
//             "displayName": "Drew Brees",
//             "team": "NO"
//         },

// Build out button on click to pass in value of filterService based on which of our functionality is clicked. Maybe set up a local cache to save the request and then just show the results with toggle hide if they are selected in the filters.

// const
  // not sure how to pass in filter with multiple selectors. Work on other stuff and come back to.
// https://www.fantasyfootballnerd.com/service/players/json/apiKey/QB/
// const apiFormat = "https://www.fantasyfootballnerd.com/service/" + filterService + "json" + apiKey





// Auth controller set up!
app.controller('AuthController', ['$http', function ($http){
const controller = this;
  this.goApp = function(){
    $http({
        method:'GET',
        url: '/footballs'
    }).then(function(response){
        controller.loggedInUsername = response.data.username;
    }, function(){
        console.log('error');
    });
}



this.createUser = () => {
  $http({
          method:'POST',
          url: '/users',
          data: {
              username: this.createUsername,
              password: this.createPassword
          }
      }).then(function(response){
          console.log(response);
          // controller.createUsername = null;
          // controller.createPassword = null;
      }, function(){
          console.log('error');
      });
}


this.logOut = function () {
  $http({
    method: 'DELETE',
    url: '/sessions'
  }).then(function (response) {
    console.log(response);
    // controller.loggedInUsername = null;
  }, function (error){
    console.log(error);
  })
}

this.logIn = function(){
    $http({
        method:'POST',
        url: '/sessions',
        data: {
            username: this.loginUsername,
            password: this.loginPassword
        }
    }).then(function(response){
        console.log(response);
        controller.loginUsername = null;
        controller.loginPassword = null;
        // controller.goApp();
    }, function(){
        console.log('error');
    });
}

}]);
