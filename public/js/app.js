// create our angular app
const app = angular.module('FootballsApp', [])
// create our app controller
app.controller('MainController', [ '$http', function($http) {
  this.h5 = 'Fantasy Football!!!'
 // because of 2 way binding...anytime the holidays array is updated (add/remove)..
 // this will trigger Angular to update the DOM
  this.authToken = ''
  this.blogs = []
  this.blog = ''
  this.createForm = {};
  this.editBlog = {};

  // createHoliday method
  this.createBlog = () => {
    this.createForm.tags = this.createForm.tags.split(' ')
    console.log(this.createForm.tags);
    $http({
      method:'POST',
      url:'/blogs',
      data: this.createForm
    }).then(response => {
      // holiday was created successfully...what to no now?
      // option 1: call the getHolidays method
      // this.getHolidays()
      // option 2: push object into holidays array
      this.blogs.unshift(response.data)
      this.createForm = {}
      console.log(response)
    }).catch(err => {
      console.log(err)
    })
  } // closes createHoliday

  // getHolidays method
  // get auth token
  this.getBlogs = () => {
    $http({
      method: 'GET',
      url: '/blogs'
    }).then( response => {
      this.authToken = response.data

      this.blogs = response.data
      this.blog = this.blogs[0]
      console.log(this.blogs)
    }).catch( err => { console.log(err)})
  } // close getHolidays

  // deleteHoliday method
  this.deleteBlog = id => {
    $http({
      method:'Delete',
      url: '/blogs/' + id
      // the delete has been successful
    }).then(response => {
      console.log(response.data)
      // target the object in the holidays array and delete it
      // findIndex is a loop just like .forEach, .map, .filter, .reduce
      const removeByIndex = this.blogs.findIndex(blog => blog._id === id)
      // remove it from the array
      this.blogs.splice(removeByIndex, 1)
    }).catch(err => console.log(err))
  } // close deleteHoliday

  // updateCelebrated method
  this.updateBlog = blog => {
    $http({
      method:'PUT',
      url: '/blogs/' + blog._id,
      data: blog
    }).then(response => {
      console.log(response.data.blog)

    }).catch(err => console.log(err))
  } // close updateCelebrated

  // chooseOneHoliday method
  this.chooseOneBlog = blog => {
    this.blog = blog
    console.log(this.blog.name)
  }

  this.increaseLikes = blog => {
    blog.likes +=1;
    this.updateBlog(blog)

  }

  // call the getHolidays method on page load
  this.getBlogs()

  //Edit and Modal
  this.editBlogModal = (blog) => {
    this.editBlog.modal = !this.editBlog.modal;
    this.editBlog.blog = blog;
    console.log(blog.tags);
    let tempTags = blog.tags.slice(0);
    this.editBlog.blog.tags = tempTags.join(' ');
  }
  this.saveEditBlog = (blog) => {
    blog.tags = blog.tags.split(' ')
    console.log(blog.tags);
    this.updateBlog(blog);
    this.editBlog = {};
  }
  this.cancelEditBlog = (blog) => {
    this.editBlog = {};
    console.log(blog);
    this.getBlogs(blog);
  }


}]) // closes app.controller


///////////////////////////////////////////////////////////////////////////////
//Starting to build out code and psuedo sections for our implementation

//
// psuedo for our selection stuff

this.editFootballModal = (football) => {
  this.editFootball.modal = !this.editFootball.modal;
  this.editFootball.football = football;





this.getFiltered = () => {
  $http({
    method: 'GET',
    url: 'https://www.fantasyfootballnerd.com/service/' + filteredVar
  }).then( response => {
    this.authToken = response.data

    // this.blogs = response.data
    // this.blog = this.blogs[0]
    // console.log(this.blogs)
  }).catch( err => { console.log(err)})
}
// for the HTML with API calls
// <form ng-on click //then have modal script bring it up in a modal



// const apiURL = https://www.fantasyfootballnerd.com/service/
// const apiKey = iqiam5yq7fm7

// Build out button on click to pass in value of filterService based on which of our functionality is clicked. Maybe set up a local cache to save the request and then just show the results with toggle hide if they are selected in the filters.

// const
  // not sure how to pass in filter with multiple selectors. Work on other stuff and come back to.
// https://www.fantasyfootballnerd.com/service/players/json/apiKey/QB/
// const apiFormat = "https://www.fantasyfootballnerd.com/service/" + filterService + "json" + apiKey

////https://www.fantasyfootballnerd.com/service/draft-rankings/json/apiKey/1/QB/


// 1 is for ppr set equal to check box
// QB is another filter. figure out how to set to variable and have filters alter. maybe store as object if multiple filters are selected.
=======
// Auth controller set up!
app.controller('AuthController', ['$http', function ($http){
const controller = this;
  this.goApp = function(){
    const controller = this; //add this
    $http({
        method:'GET',
        url: '/app'
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
    controller.loggedInUsername = null;
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
    }, function(){
        console.log('error');
    });
}

}]);

  
