# Build a Basic Express App - The Blog Post Edition

In this activity, you will create your own Express App. It will return fake data just like the "Student App" we just finished building together.

## Complete the following tasks:

- Create a default node application using npm init

- Run npm install

- Install Express using npm

- Create app.js and include the code to create a running Express app that listens on port 3000

- Edit the package.json file to designate app.js as the starting point for your application

- Start your app

- Verify that it is running by checking your console for your "listening" message

- Stop your app (Ctrl-Z or Cmd-Z)

## Now that your server is listening on port 3000, let's add functionality. Complete the following tasks:

- Add a top-level route that returns the phrase "This is the top route in the Blog Post API"

- Start your app

- Verify it works by browsing to http://localhost:3000/ (Links to an external site.)

- Stop your app

## Now let's add a simple router. Complete the following tasks:

- Create a folder in your project named src. Under it, create a routes folder.

- In the routes folder, add a blogposts.route.js

  - In the route file, create an export called app. In that export, define an Express router.

- Within the export, create a GET route handler for getting all blog posts. Return a phrase like "You have reached the router handler for get all blog posts."

- Also within the export, create the route-matching text string "/api/blogposts/" using app.use().

- Back in your app.js file right before the app.listen(), connect to the router you just built. Hint: use require(route)(app)

- Start your app

- Verify it works by browsing to http://localhost:3000/api/blogposts/ (Links to an external site.) and also verify that http://localhost:3000/ (Links to an external site.) still works.
  Stop your app

## Now let's add a simple controller and route our HTTP requests to it. Complete the following tasks:

- In the src folder, create a controllers folder.

- In the controllers folder, add a blogposts.controller.js

- In the controller file, create a function called exports.findall().

  - Return a phrase like "You have reached the controller method for get all blog posts."

- Back in your router file inside the app export, add a require for your controller.

- Also in the router, modify your GET handler to call the findAll() method in your new controller

- Start your app

- Verify it works by browsing to http://localhost:3000/api/blogposts/ (Links to an external site.) and also verify that http://localhost:3000/ (Links to an external site.) still works. NOTE: Check the message for /api/blogposts carefully to make it is coming from the controller.

- DON'T STOP YOUR APP

## Now that we've come this far, let's create .http file to send HTTP requests to our Express app.

- Create a test.http file at the top level of your project

- Add GET requests for http://localhost:3000/ (Links to an external site.) and http://localhost:3000/api/blogposts/ (Links to an external site.)

- Click the "Send Request" button to test each request separately. Hint: Make sure you separate your request using 3 hashtags (#)

## Finally, let's add a route that can handle parameters. Complete the following tasks:

- If your app is still running, stop it

- In the router, add a GET handler with an id parameter that will return a single blog post by id. Connect it to a controller method named findById()

- In the controller file, create a function called exports.findById(). Return a phrase like "You have reached the controller method requesting the blog post with id of" followed by the id. Hint: If you name your parameter id in the route handler, you can access it here using req.params.id

- Start your app

- Verify it works by browsing to http://localhost:3000/api/blogposts/13.
