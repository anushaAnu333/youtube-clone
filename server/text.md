import express
create application app=express()
to run this application we should listen port number

connect to mongo db atlas
.env
config->db->mongoose connection->export->import in index.js->inside listen port aynsc try{
await connection
}
catch(err){

}

mongo atlas->cluster0->collection

new folder->models->new file User.js
import mongoose
create user schema

(when we login we should be able to upload new videos comments)
in name .it should be string reuired and unique
email
password,img,subscriber,subscribeduser(we are taking array and in this array we are having all the subscribed users)when we create our channel its going to be empty string and when we subscribe in the channel is going to be that channels user id

timestamp-its gonna create creation and upadted date of this user

create file video.js
videoscheme---userid,title,description
commentschema

another folder-router

another folder controller
we make crud operation in controller


req-what we are getting from user
res-what we are sending
test is working..that means we sent request

to visible the res on screen put res.json("..")