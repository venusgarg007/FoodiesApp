var should = require("chai").should(),
assert = require ("chai").assert,
supertest = require("supertest"),
app = require("../bin/www");

var url = supertest("http://localhost:8080");

describe("Testing the first route of Registration", function(err){
  it("should handle the Registration request", function(done){
     var jsonob = {"username":"navan","email":"navan@gmail.com","password":"navan"};
    url
        .post("/users/register")
        .expect(200)
        .send(jsonob)
        .end(function(err,res){
          if (err) {
				        throw err;
			    }
          
           assert.equal(" details saved ",res.text," res.text is not matched");
            done();
        });
  });
});

describe.skip("Save Restaurant Details", function(err){

  it("It should save details", function(done){

  var myjson ={
				 "city_id":4,
                 "city_name ":"Chandigarh",
                 "restaurant_id":200,
				  "restaurant_name":"Sindhi Sweets",
				  "restaurant_address": "Shop No 56,Sector 21-C,Chandigarh",
				   "featured_image":"http://1593_sindhisweets.limetray.com/assets/user_images/content_images/original/1438170767_982551585_G3333.jpg",
				   "url":"http://www.sindhisweets.co.in/",
				  "cuisine_name":"Italian,Thai,Chinese",
				 "Comment":"This is my comment"
}
    url
        .post("/restaurant/save")
        .expect(200)
        .send(myjson)
        .end(function(err,res){
          if (err){
          	  throw err;
          }
          assert.equal(" Restaurant saved ",res.text,"res.text is not match");

          done();
        });

  });
});


describe.skip("Delete Details of Restaurant", function(err){

  it("It should delete the saved details of restaurant", function(done){

  var myjson ={"restaurant_id":67}
    url
        .delete("/restaurant/delete")
        .expect(200)
        .send(myjson)
        .end(function(err,res){
          if (err){
          	  throw err;
          }
          assert.equal("Restaurant Deleted",res.text,"res.text is not match");

          done();
        });

  }); 

});

describe.skip("UpdateComments", function(err){

  it("It should update the comments", function(done){

  var myjson ={"restaurant_id": 67,"comments":"I love this food"}
    url
        .put("/restaurant/update")
        .expect(200)
        .send(myjson)
        .end(function(err,res){
          if (err){
          	  throw err;
          }
          assert.equal("comments updated",res.text,"res.text is not match");

          done();
        });

  });
});