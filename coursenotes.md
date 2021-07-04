# Introduction
## Building modern user interfaces with React
* React is one of the most popular JavaScript libraries for building user interfaces. It relies on reusable components, not templates, allowing developers to render views where data changes over time.

* Transcripts
 Have you visited any websites lately? The answer is probably yes. And if you've visited websites lately, you've probably visited a website that was built with React. React is one of the most popular libraries for building user interfaces and companies like Twitter, Netflix, Airbnb, and PayPal use it to power their front-end experiences. My name is Eve Porcello and I've been using, and teaching, and writing about React for about six years now. React is really awesome and having a good command of the fundamentals will help you build projects of all sizes. In this course, we're going to get hands-on experience with React's core concepts, and we'll also explore concepts like testing, data fetching, and routing. This is going to be really fun. So let's get into it and build some cool stuff together.

 ## What you should know before watching this course
* Transcripts
Before we jump into learning React, there's a few things that you might want to know before getting started. First of all, React is JavaScript, so a little bit of JavaScript knowledge would be really helpful before we get started. We'll also be using ES6 Syntax throughout, but I'll be explaining that as we go along. Finally, we will be installing some packages using npm. But really that's all you need to get started learning React. So let's get to it.

# 1.0 What is React?
## 1.1 What is React?
* React is a JavaScript library used to creat user interfaces.
* It was created at Facebook and open-sourced in March of 2013.
* Since then, React has expandad beyond the web with React Native, a tool that allows you to create native mobile applications using React.
* Trancripts
React is a JavaScript library that you can use to create user interfaces. It was created at Facebook and open-sourced in March of 2013. Since then, React has expanded beyond the web with React Native, a tool that allows you to create native mobile applications using React. One of the best resources that you have at your disposal when learning React is the React Docs. These are updated on a really regular basis and are very well-written. You can also follow along with the React blog for articles on the team's new releases and future plans. React is an increasingly popular library with tens of thousands of stars on GitHub and use in production by huge companies like Twitter, Netflix, and Microsoft. But the point of using React is not just because it's popular, but because it's fun to use and because its component architecture makes it faster and easier to build amazing products for the web and even for native platforms.

# 1.2 Setting up Chrome tools for React
* Trancripts
To really get ready to work on React projects, it's a good idea to install the React Developer Tools. Let's take a look at how you would do this with Chrome. So using Google, I'll just search for the Chrome Web Store and I'll search for React Developer Tools. So this'll take me to this extensions page and I want to click Add to Chrome, and I'll click Add Extension to add this to my browser. Now, once I've done this, I can open up my developer tools. If you're on a Mac, you can hit Command + Option + J or on a PC, Control + Shift + J to open those up. So once the developer tools are open, what you can do is click on this little right arrow icon and find the tab that says Components. This is going to show you all of the different components that are on this page. Now that we have the React Developer Tools installed, you'll see this little icon, this little React icon in the toolbar of Chrome. This is just telling you that react is running on the page. So we'll see this highlighted on localhost:3000 and we'll also see it everywhere on the internet that uses React. So if we go to the React documentation, we'll see this little logo highlighted. As our applications become more robust with a lot of components, this tab will be a lifesaver when we're trying to understand our project structure and to debug issues.

# 1.3 Setting up Firefox developer tools for React
* Transcipts
The React developer tools are also available for Firefox. So let's search for the React developer tools here in that browser. So this will bring up a link and I'm going to click Add to Firefox. And I'll also allow this by clicking Add. And now the React developer tools have been added to our browser. So if we open up local host 3,000 where our Create React app project is running, we see the React icon, which means React is being used on this page and we can use the developer tools. A quick way to access the React developer tools in Firefox is to right click and select Inspect Element and then this will open up the panel. We can select the Components tab and then this'll show us all of the different components that are on the page. At this point, just one, our app component. Now if we go back to the React documentation and hit a quick refresh, we'll see that that React logo is present in our toolbar and then if we open the Components tab we'll see this is a page made up of a whole lot of components. And we're going to, of course, build our own in the next lesson. So in short, having the developer tools on hand is really important as you're writing code and debugging that code.

# 2.0 Intro to React Elements
## 2.1 Installing Create React App
* Transcripts
One of the most common tools for creating a new React application is here. It's Create React App. Create React App will give us a React project structure, the ability to use the latest JavaScript features, and tools for optimizing your app for production. To get started with Create React App, we're going to go over to our terminal. And if you're on a PC, you'll open up your command prompt. And I want to make sure that Node is installed. So I'm going to type node -v and it'll tell me what version. If you see anything version eight or higher, then you can use Create React App. And if you need to update your version of Node, you can always go to nodejs.org. Here, you can download the latest versions. We also want to make sure that we have NPM installed. More than likely our NPM version will be okay because it should correspond to our Node version. Here I'm at 6.14, it just needs to be 5.6 or higher. Now that we have Node and NPM installed, what I can do is I can run npx create-react app, and then I want to name my project. So NPX is the package runner, Create React App is the tool to build our project. And the next thing I'll send here is the name of the project. So let's just call this react-essentials. And this might take a second to run. It happened, it worked. So now that this has been installed... And just know that I sped that up a lot. So if yours happened a little slower, no worries. The first thing we're going to do is I'll cd, I'll change directory into that folder, react-essentials, and then I'm going to run NPM start. So when I run NPM start, we'll see this pop open localhost:3000 in a browser. This is just a local server that's running your files. Now, if that went horribly for you, and you're seeing a bunch of red errors, as you try to run those things or any other problems, please don't worry. What you can do instead is you can use CodeSandbox So CodeSandbox is a code editor that runs in the browser and it's pretty cool how we get to it. We can type react.new into the browser, and this will take us to a brand new React project. And this is at the same place that I am with my own project here. So this is our app component. We have a tree of different files here. And this is exactly what I've installed using Create React App. Now our application is running. In the next video, we'll take a closer look at what Create React App has set up for us.

## 2.2 Generating a Project
* Transcripts
One of the most common tools for creating a new React application is here. It's Create React App. Create React App will give us a React project structure, the ability to use the latest JavaScript features, and tools for optimizing your app for production. To get started with Create React App, we're going to go over to our terminal. And if you're on a PC, you'll open up your command prompt. And I want to make sure that Node is installed. So I'm going to type node -v and it'll tell me what version. If you see anything version eight or higher, then you can use Create React App. And if you need to update your version of Node, you can always go to nodejs.org. Here, you can download the latest versions. We also want to make sure that we have NPM installed. More than likely our NPM version will be okay because it should correspond to our Node version. Here I'm at 6.14, it just needs to be 5.6 or higher. Now that we have Node and NPM installed, what I can do is I can run npx create-react app, and then I want to name my project. So NPX is the package runner, Create React App is the tool to build our project. And the next thing I'll send here is the name of the project. So let's just call this react-essentials. And this might take a second to run. It happened, it worked. So now that this has been installed... And just know that I sped that up a lot. So if yours happened a little slower, no worries. The first thing we're going to do is I'll cd, I'll change directory into that folder, react-essentials, and then I'm going to run NPM start. So when I run NPM start, we'll see this pop open localhost:3000 in a browser. This is just a local server that's running your files. Now, if that went horribly for you, and you're seeing a bunch of red errors, as you try to run those things or any other problems, please don't worry. What you can do instead is you can use CodeSandbox So CodeSandbox is a code editor that runs in the browser and it's pretty cool how we get to it. We can type react.new into the browser, and this will take us to a brand new React project. And this is at the same place that I am with my own project here. So this is our app component. We have a tree of different files here. And this is exactly what I've installed using Create React App. Now our application is running. In the next video, we'll take a closer look at what Create React App has set up for us.

## 2.3 Creating React Elements
* ReactDOM.render(): What we've done here is we've used the React library to create an element. So we're using JavaScript to create HTML elements to create our DOM on the page.

So ReactDOM.render, the first argument that it takes in is the element that we want to create. So I can say React.createElement. Then I pass in the name of the tag that I want to create. Then I pass in any properties that I want to create, so at this point, it's just going to be null, I don't want to have any properties. And then the final thing we'll add is some sort of a message, so I'll just say "Hello World". This will create an h1 on the page.

So remember, our first argument that we send to ReactDOM.render is what we want to create. The second argument that we send is where we want to put it. So in other words, where in our HTML document that's in this public folder should I inject our React code.

ReactDOM.render(
  React.createElement("h1", null, "Hello World!"),
  document.getElementById('root')
);

* Transcripts
With our environment set up, let's actually write some code. So first, we want to use this function here that's in our index.js file to actually take the elements that we create, and add them to our DOM, add them to the page. So to do a little clean up on this index file is where I want to begin. I want to delete line five. I also want to delete everything from 13 to 16. We're basically just getting rid of all the stuff related to the service worker. And we're also going to remove our React.Strict mode and App. We'll come back to that a little bit later. For now, the important thing that I want to talk about is this ReactDOM.render function. So ReactDOM.render, the first argument that it takes in is the element that we want to create. So I can say React.createElement. Then I pass in the name of the tag that I want to create. Then I pass in any properties that I want to create, so at this point, it's just going to be null, I don't want to have any properties. And then the final thing we'll add is some sort of a message, so I'll just say hey everyone, and cool. This will create an h1 on the page. Now since I've also gotten rid of that App component, I can go ahead and remove that from line four, just if I want to be a real neatnik about it. So then if we go over to localhost:3000, check it out. We're saying hey to everyone because we've created this React element. So a couple things that I want to talk about, how this is working. So remember, our first argument that we send to ReactDOM.render is what we want to create. The second argument that we send is where we want to put it. So in other words, where in our HTML document that's in this public folder should I inject our React code. And if you scroll down in this file, you'll see a div here with an ID of root. So this is letting us know that this is being injected right here into this file. The other thing that we notice here is if we open up our console, command + option + J, or control + shift + J on a PC. We can open up this elements tab, and we see that inside of our div, and this is small but if we look closely here, it says div with an ID of root. That's what's part of the HTML document. And then we're injecting this h1 directly into there. What we've done here is we've used the React library to create an element. So we're using JavaScript to create HTML elements to create our DOM on the page. Now currently, the second argument that we're sending, remember, this was for properties. I can pass any properties that I'd like to this element. So we're going to add a style property, and then we're going to pass in the data for what type of style we want to add. So I'm just going to throw in this nested object here, color: blue. And if we take a look at our app, we'll see blue is not defined. That makes sense, blue is actually a string. Nice. So now this has applied that to our element. Take a look, we see our style attribute, our style property has been added to the h1. So that's that, we've created our first element using React.createElement. And if we want to apply any properties, we're just going to pass those via the second argument to that function.

## 2.4 Refactoring Elements Using JSX
* The structure below is used to render contents through HTML TAGS to the DOM using React. It works fine for small pages/apps. So, this works, but this is a whole lot of nesting. Consider a time where you're building an actual entire page. You're building divs and headings, and lists, and things like this. That's a lot of nesting and that's going to be prone to a lot of errors. So, now is a really good time to incorporate JSX.

ReactDOM.render(
    React.createElement(
        "HTML TAG",
        properties,
        React.createElement("h1", {style: { color: "blue" } }, "Hello World")
    ),
    document.getElementById('root')
);

* JSX or JavaScript as XML, is a language extension that allows you to write tags directly in JavaScript.  So, this syntax, this JSX syntax. It doesn't run in the browser natively. This is why using Create React App is super helpful because Babel is a tool that's working behind the scenes. Now, if you're curious about how Babel works, you can take a look at the https://babeljs.io compiler page. Then we're going to go ahead and click on Try it out. So, Babel is this incredibly useful tool that you'll find in a ton of different JavaScript projects. And if you're writing JSX or you're writing some sort of new JavaScript syntax that isn't supported. Babel will do the hard work of compiling your code behind the scenes.

ReactDOM.render(
  <ul>
    <li>Monday</li>
    <li>Tuesday</li>
    <li>Wednesday</li>
  </ul>,
  document.getElementById('root')
);

* Transcripts
In the previous video, we rendered an <h1> to the DOM using React. It's one small element, right? So, using a createElement call "wasn't that big video". Consider though that I wanted to render an unordered list, and the unordered list had many different items. That would be a whole lot of createElement calls. So, let me just demonstrate this. I'll add a UL here, I'll change the second argument to no, and then the third thing I wana add here is the child of the UL. So, React.createElement("li", null, "Monday"), then I'm going to need to add a few more of this. And out of laziness, I'm going to copy and paste them. I hope you won't hold that against me. But then we're going to go ahead and type Wednesday, and I could go all the way to Friday, but I'll make it stop here at Thursday. Okay, cool. So, now if I go back to our browser, we have a nice unordered list here, Monday, Tuesday, Wednesday, Thursday. So, this works, but this is a whole lot of nesting. Consider a time where you're building an actual entire page. You're building divs and headings, and lists, and things like this. That's a lot of nesting and that's going to be prone to a lot of errors. So, now is a really good time to incorporate JSX. JSX or JavaScript as XML, is a language extension that allows you to write tags directly in JavaScript. So, let me show you what I mean, let's replace them this. But instead of using our React.createElement call, What I want to add is our unordered list. But this is going to look very HTML, right? We're going to add our list items for money, for Tuesday, and for Wednesday. So, now if we go back, we see all of those are being rendered appropriately. So, this syntax, this JSX syntax. It doesn't run in the browser natively. In other words, if I just tried to add this to an HTML page and I tried to see what happened, it wouldn't work. As soon as it hit this first JSX bracket, we would see an error. This is why using Create React App is super helpful because Babel is a tool that's working behind the scenes. Now, if you're curious about how Babel works, you can take a look at the https://babeljs.io compiler page. Then we're going to go ahead and click on Try it out. So, Babel is this incredibly useful tool that you'll find in a ton of different JavaScript projects. And if you're writing JSX or you're writing some sort of new JavaScript syntax that isn't supported. Babel will do the hard work of compiling your code behind the scenes. So, we can take our code, for example, let's just grab this whole react, Dom dot render. I'm going to post it in this (indistinct). So, check it out, this is what this looks like. We see all of these different createElement calls. So, it's the same thing, our browsers going to run these createElement calls, but we have the nice developer tool of working with JSX, so that we don't have to get involved in writing all of this stuff. That's too much. So, this is our first introduction to JSX, along the way we'll talk about more tips and tricks you can use to make JSX even more powerful.

## Questions

Question 1 of 8
Which tool in the Create React App will compile the following JSX code for you?
ReactDOM.render(
     <ul>
          <li>Monday</li>
          <li>Tuesday</li>
          <li>Wednesday</li>          
     </ul>,
     document.getElementById("root")
);
Correct answer:
Babel

Question 2 of 8
To ensure that React code adheres to best practices, which command should be included in the index.js file?
Correct answer:
React.StrictMode

Question 3 of 8
When you are ready to use the Create React App tool, what is the correct keyword to run on the command line?
Correct answer:
npx, `npx` is a package runner that is used to create a new React application.

Question 4 of 8
Which function would replace the ??? placeholders in the following code to create this React element?
???(
     React.createElement("h1", null, "Heyyyyy Everyone!"),
     document.getElementById("root")
);
Correct answer:
ReactDOM.render

Question 5 of 8
When you open your index.js file, you will see the following code. What does this mean?
     <StrictMode>
          <App />
     </StrictMode>,
Correct answer:
You will be warned when your code is in violation of React's best practices and rules.

Question 6 of 8
If you run npx create-react-app react-essentials in your terminal to install the Create React App. What does the npx part of the command stand for?
You are correct!
the package runner

Question 7 of 8
How would you use React to create an unordered list with one item?
You are correct!
React.createElement(
"ul",
null,
React.createElement("li",null,"First element"))
Feedback
The `ul` and `li` tags should appear inside nested `createElement` functions.

Question 8 of 8
How can you display "Hey" in blue using React?
You are correct!
React.createElement(
"h1",
 {style: {color: blue}}, 
"Hey")
Feedback
The three arguments should contain the html tag, the property, and the display text.

# 3.0 React Components
## 3.1 Creating a React Component
* Components
Think of a component as being a building block. It's a little piece of the UI that we're going to use to describe one part of our application. 
We create a component by creating a function. And the function returns JSX, it returns this UI element that we're going to be able to add to the Dom.
Remember, a component is a function that returns UI.
* So think about a component as being this function that returns a little bit of UI. Then we can compose these functions. We can compose these components together to create a larger application.
* Transcripts
Now that we're developing an understanding of how to create elements, we want to create our first component. Think of a component as being a building block. It's a little piece of the UI that we're going to use to describe one part of our application. So the first thing that we'll do is we'll actually make use of a component that already is in our project. And that's that app component that I was referring to before. So the app component is here in this app JS file, and we create a component by creating a function. And the function returns JSX, it returns this UI element that we're going to be able to add to the Dom. So we see at the bottom of this file, it says export default app. So this means that I need to import this into my Index file. So let's go ahead and import app from dot slash App. Then we're going to replace the unordered list with our app component. Now this is being rendered instead of that unordered list that we created. So now let's go back to our app JS file and we're going to create a couple of different components. So this is kind of cool. We're going to first start out by removing everything that's inside of the header here. So we're going to delete our header from the app component. Now that we've deleted our header, we've also deleted the logo that's being imported, so we can cut that out as well. So let's go ahead and just place an H-one in here, we'll say header, then we're going to say H-two main, and then we'll say H-three footer. Now, if I go back here, we see the header, the main and the footer. And what I want to do is I want to create components that are going to occupy all three of these slots. So I'll start with the header. Remember, a component is a function that returns UI. So our function is going to return, in this case, a header, and this is going to read "Eve's kitchen." All right, so now what I can do to render the header inside of our app, is I can replace the H-one with the tag. So it's going to look like this. It's going to look like this, header. Let me zoom in on that a little bit. Back over here. Check it out, we have Eve's kitchen. Then if we look up our components, we see the header is now in place. How cool is that? So let's go ahead and create our main component. So our main function is going to return a section and the section will have a paragraph that reads, "We serve the most delicious food around." Now, remember this is our component. So we're going to use JSX and we're going to add this tag here. So we'll say main. And we're going to use this self-closing tag, this slash close to open and close it at the same time. We're not trying to nest anything inside of that, we're just trying to have a display. So let's hit our refresh here, we have main and header. And if I close this, we see, "We serve the most "delicious food around." All right, this thing is coming together. The final step is we want to create a footer. All right, so inside of here, we'll say, "It's true." Then we'll replace the H-three with footer. And now if you take a look, "It's true," is here, we inspect and all of these are populating our components. So all of them are part of our app component. Pretty neat. So think about a component as being this function that returns a little bit of UI. Then we can compose these functions. We can compose these components together to create a larger application.

## 3.2 Adding Component Properties
* Let's take a look at how we can use components to display dynamic data.
* Every react component has access to this object called props. So, we're going to pass props into this function. The props object is going to hold all of the different properties for our component. So, to add values to this component, we'll need to add them to the place where the component is being rendered. In other words, wherever the component is inside of the app. Then if we scroll back up to the Header Componente instead of displaying Luiz, we're going to use a JSX expression here and we'll open and close curly braces and put props.name inside.
* So, think of props as being this little kind of backpack that you can place information in for every single component. When we render the component, we pass the properties into the component, and then in the component itself, we're going to display them using this dot notation.
* Transcripts
In the previous video we created components. In this video, let's take a look at how we can use components to display dynamic data. Now, our restaurant is pretty cool and all but, do you really want to display my name? No way, you probably want to display your own name. So, let's go ahead and do it. Let's go back to our header component, and our header is displaying Eve, right? So let's go back to our header component. Every react component has access to this object called props. So, we're going to pass props into this function. The props object is going to hold all of the different properties for our component. So let's just console log this and see what this looks like. We'll go back over here and we'll see that this object is just an empty object, there's nothing in it so far. So, to add values to this component, we'll need to add them to the place where the component is being rendered. In other words, wherever the component is inside of the app. So the way that we're going to set this is we're going to say name and you can call these properties whatever you want. The name of this property is "Name" because I want to replace Eve's kitchen with someone else's name. So let's go ahead and replace this name with "Cindy." Then if we scroll back up to the top instead of displaying Eve, we're going to use a JSX expression here and we'll open and close curly braces and put props.name inside. So now that props.name is inside where console logging the object, so name has been added as a key, and then we can see Cindy's Kitchen has replaced, whatever props.name was. So then if we change it again, Horacio, back here, how cool is that? So we want to add properties to some more of our components as well. Okay, so the next thing I want to do is I'll add a property to the main component. Right now, our tech says, "we serve the most delicious food around," why don't we replace delicious with something dynamic? So, we will add an adjective. "Amazing," and now that we've added this, we can go back up here to our main component and we can replace delicious with props.adjective. So we'll start by passing props and then we will access this via these curly braces. All right. So, we're building kind of like a little template here, we're able to display whatever data we want to. All right, let's add one more property to the footer component. But this time instead of sending a plain string, what I really want is the year. So, we're going to say year equal to an opening closing curly brace, then I'm going to use the date constructor in JavaScript. So I'll say new date, and then there's this method we can chain on here called get full year. Now get full year is going to return whatever year it is. So, if you're watching this next year, hello from the past (laughs) this will still work in whatever year you're in. So, we can go ahead and replace everything that's inside of this footer with props. So we'll say, props and then I'll say, copyright props.year. Awesome. So, think of props as being this little kind of backpack that you can place information in for every single component. When we render the component, we pass the properties into the component, and then in the component itself, we're going to display them using this dot notation.

## 3.3 Working with Lists
* Transcripts
So far we've passed properties to components in a few different ways . We've used strings, we've used this cool little date function here. But what if we have some more data? How do we display that data in the component tree? Well, to demonstrate this, let's create a little more data, we're going to create a dishes array. Add Macaroni and Cheese, we'll add Salmon. And we'll add Tofu with vegetables. So remember, this is your restaurant. So obviously put all of your favorite foods on your own list, don't let me tell you how to run your restaurant. But now that we have our dishes, we're going to display this list in our main component. So in order to make this work, we need to map over it. Something that helps me sometimes when I'm writing code is to break everything down into little chunks. Like if I have to display a list, let me make sure I can map over it first, before adding it to a component. So we'll say dishes dot map. And then we'll for each one of these dishes, we want to console log the dish. Alright, let's see what we get. We'll pop this open in the console. And we should see Macaroni and Cheese, Salmon, Tofu with vegetables, so it looks like it's working. Okay, so that worked. So now what I need to do is make the data available to the component. So the first thing we'll do is we'll add the property. So I'll say dishes equals dishes. Notice here that because we're passing a variable in, we're using the curly braces, the only time we're going to use the quotes is when we're sending a string. Then I can cut this dishes dot map part. And I can move it up to our main component. Now, this is going to live inside of an unordered list. And we're going to put this inside of a JSX expression. So one thing here, I want to make sure that I'm pulling dishes from properties. So that's important we'll start with that. And then second, we're going to replace the console log with a list item. And then we're going to say that each one of these dishes should be displayed. And nice, we should see that all of these are being listed. Now something I'm not that crazy about is the fact that this is centered and we see our bullet points on the side. So a couple things we could do with that. You could add CSS in line. So you could say style equals. And then this is another one of these JSX expressions. So we're going to pass an object of styles into our unordered list. So I could say, textAlign left. Let's see how that looks. Yeah, it looks like it brings everything in line here. So we could add it there, we could add it to our app CSS instead. But I kind of like demonstrating that you can just add quick styles using this style property directly in the component. Another thing to note about this is textAlign. We're not using the CSS train case, the little hyphen. As soon as we do that, we see errors. Instead we have to use the JavaScript camel case. So lowercase 't' and then any other subsequent letters are capitalized. All right, we're looking good here, but there's one thing we need to still fix. If we open the console, we'll notice there's a warning here about keys. In the next video. We're going to fix this.

## 3.4 Adding Keys to List Items
* In the previous video, we rendered a list of menu items dynamically. Meaning that if I added another item to our list, like Minestrone, this item would be added dynamically.
* Each child in a list must have a unique key property. So a key is like an ID that helps keep everything in sync. It's possible that our array items might get out of sync when rendering the curse, particularly if something is added to the dom at the beginning or the middle of the list instead of the end.
* Keys help React identify which items have changed, are added, or are removed. Keys should be given to the elements inside the array to give the elements a stable identity:

const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) =>
  <li key={number.toString()}>
    {number}
  </li>
);

The best way to pick a key is to use a string that uniquely identifies a list item among its siblings. Most often you would use IDs from your data as keys:

const todoItems = todos.map((todo) =>
  <li key={todo.id}>
    {todo.text}
  </li>
);

When you don’t have stable IDs for rendered items, you may use the item index as a key as a last resort. We don’t recommend using indexes for keys if the order of items may change. This can negatively impact performance and may cause issues with component state.

const todoItems = todos.map((todo, index) =>
  // Only do this if items have no stable IDs
  <li key={index}>
    {todo.text}
  </li>
);

* Now even though this works well, the re-app documentation actually recommends against this because it says that there can be problems with rendering, which is kind of not the point of keys in the first place. So what we can do instead, is we can adjust our dishes array to instead of returning these strings, we can return objects.

Before:

function Main(props) {
  return(
    <section>
      <p>We serve the most {props.adjective} food around.</p>
      <ul style={{textAlign: "left"}}>
        {props.dishes.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </section>
  )
}
const dishes = ["Macaroni", "Salmon", "Vegetables"];

function App() {
  return (
    <div className="App">
      <Header name="Aurora" />
      <Main adjective="amazing" dishes={dishes} />
      <Footer year={new Date().getFullYear()}/>
    </div>
  );
}

After:

function Main(props) {
  return(
    <section>
      <p>We serve the most {props.adjective} food around.</p>
      <ul style={{textAlign: "left"}}>
        {props.dishes.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </section>
  )
}
const dishes = ["Macaroni", "Salmon", "Vegetables"];
const dishObjects = dishes.map((item, index) => ({
  id: index, 
  title: item
}))
console.log(dishObjects)

function App() {
  return (
    <div className="App">
      <Header name="Aurora" />
      <Main adjective="amazing" dishes={dishObjects} />
      <Footer year={new Date().getFullYear()}/>
    </div>
  );
}

Keys can help you keep your data in sync as your application state changes over time. And it's a warning that we always want to clear. So we make sure that everything is rendering appropriately.

* Transcripts
 (Narrator) In the previous video, we rendered a list of menu items dynamically. Meaning that if I added another item to our list, like Minestrone, this item would be added dynamically. Now if we look at our console, which we already sort of did, this is letting us know that each child in a list must have a unique key property. So to explore that error in a little more detail, it's nice that I can click this link and this will take me to the keys documentation. So a key is like an ID that helps keep everything in sync. It's possible that our array items might get out of sync when rendering the curse, particularly if something is added to the dom at the beginning or the middle of the list instead of the end. So it's Java Script right? So there's a couple different ways that we can handle this. Now the first thing that I'll do is let me scroll up a little bit. I'm going to add an "i", an index, so that I can keep track of this every time we loop through our dishes properties. So let's go ahead and say key=i. And now if we go back to our app, we see that the warning is cleared. Now even though this works well, the re-app documentation actually recommends against this because it says that there can be problems with rendering, which is kind of not the point of keys in the first place. So what we can do instead, is we can adjust our dishes array to instead of returning these strings, we can return objects. So all we need to do here is we need to write a little transformation function. And this is going to map over the dishes and then for each dish, we're going to return an object and whenever we return an object from a function like this, in line, we need to wrap it in parenthesis. So the ID here will be i and the title will be dish. Let me make sure that this is working as I hope. We're going to console log dish objects. Now if we look at this, we see four different objects in our array, each with a ID and a title. So it's important to note that a technique like this is pretty different, even though we're still using i, than it is up here, because we're building this object before we actually pass it to the component as a property. So now instead of passing the array of strings, we're going to pass an array of objects. Now scrolling up to the top, instead of the i being passed here, we'll just pass in the dish. The key for each will be dish.id and the title for each will be dish.title. Alright, let's see how we do. I'll hit a refresh just to keep things honest and we don't see any warnings going on. I still am seeing that console log from the header, that's annoying. Let's get rid of that. Alright, now everything is clear. So your data already might look like this too. So you can just use the ID from your array of objects or some other unique field, if you're dealing with these types. Keys can help you keep your data in sync as your application state changes over time. And it's a warning that we always want to clear. So we make sure that everything is rendering appropriately.

## 3.5 Displaying Images with React
* We can add images to our React apps, just like we do with HTML. To start, we'll decide where to place the image. So let's put this thing right in our main component. Now the first thing I'll have to do is to import it. So the restaurant.jpeg file is here in the source folder. So we will say import restaurant from ./restaurant.jpeg. 
* That's how we handle images in our app. We first are going to import it as a variable, like restaurant. We pass the name of that variable into the source attribute. We can set maybe a height or other properties of that image. And then we always want to make sure that we add an alt tag so that our application is as accessible as possible.
* Trancripts
Now that we know how to add text to our React application, let's go ahead and add an image. Now this can feel confusing at first, but we can add images to our React apps, just like we do with HTML. To start, we'll decide where to place the image. So let's put this thing right in our main component. Now the first thing I'll have to do is I'll need to import it. So the restaurant.jpeg file is here in the source folder. So we will say import restaurant from ./restaurant.jpeg. Now that we've imported this, we can place it. So let's go ahead and put it right between the paragraph and our unordered list. So an image looks like that. We will use the source. So we'll say SRC equals and now we don't have to use any sort of file system stuff, dots, slashes, things like that. Instead, we can just use a JSX expression, a couple curly braces, and pass to the name of the variable. Okay, back to our screen, it looks good. It's really big, but we can fix that simply by adding a height property. And that looks much better. We also could put in a URL. So I'm just going to replace this really quick with a URL to the GitHub API. All you have to do is put in your GitHub name. Mine is EvePorcello.png. So just replace mine with yours. Now if I go back, we see it's loading that image from that URL. So let's go back. I want the restaurant image. We're building a website about a restaurant. And even though this is looking good, there's one other problem. So it says image elements must have an alt prop either with meaningful text or an empty string for decorative images. So this is meaningful, right? We're showing a napkin, it's providing some context about what type of business this is. So we want to make this accessible. In other words, if someone is using a screen reader or other assistive technology, we want this description to be read. So we'll say napkin and fork at a restaurant table. Is that what this is? Fork, how about silverware? That looks better. So now nothing has really changed in the output, but that warning has been cleared. So those accessibility warnings are built into Create React app. And I think those are really nice, 'cause they can help us to build more accessible applications for everybody. That's how we handle images in our app. We first are going to import it as a variable, like restaurant. We pass the name of that variable into the source attribute. We can set maybe a height or other properties of that image. And then we always want to make sure that we add an alt tag so that our application is as accessible as possible.

## 3.6 Using Fragments
* Currently our App component is being rendered by the react ReactDOM.render function. This is our index.js file.
* Adjacent JSX elements must be wrapped in an enclosing tag. So in other words, AppOne and AppTwo are adjacent. They're next to each other, but they're not wrapped with a container. If I was to wrap this with a div, we would see that this will render appropriately. So what we're running into here is kind of a rule with JSX. We're seeing that we only can render one component. We can't render two sibling components unless they're wrapped in some sort of another tag, like a div or a section or something like this. 
* Now this limitation with react means that there's a lot of extra wrapping divs that have been added to all sorts of different projects. So one way that we can get around this is I could say React.Fragment, and then I'll close the React.fragment as well. So let's go back. Let's look at our DOM by inspecting the element. And we'll take a look at this. And we see, we have an app that has the header, section and the footer. And then we have an h1, and all of this is inside of our root. So we haven't added anything extra. What the fragment is doing is it's allowing this to act like a wrapper, but it's not actually adding anything into the DOM.
Before:
    ReactDOM.render(
        <div>
            < App />
            < AppTwo />
        </div>,
        document.getElementById('root')
    );

After:
    ReactDOM.render(
        <React.Fragment>
            < App />
            < AppTwo />
        </React.Fragment>,
        document.getElementById('root')
    );

Short:
    ReactDOM.render(
        <>
            < App />
            < AppTwo />
        </>,
        document.getElementById('root')
    );

* The fragment is a really, really cool feature to allow us not to kind of junk up the DOM by adding too many elements.

* Transcripts
- Currently our App component is being rendered by the react ReactDOM.render function. This is our index.js file. And what I want to do is I want to break this. I want to have some fun breaking stuff, and we're going to actually render an additional component alongside the App. And I'm going to call this other App, AppTwo, AppTwo also AppTwo, so what we'll say here is that we want to return h1 and in the h1 we want to display, This is the second App. Okay. So now that I had saved all of this got straight out, but what I actually want to do is I want to render AppTwo next to our App component. So in other words, I want both of them to render together. So that's kind of the idea. If I save this, though, we see there's an error. What this says is that Adjacent JSX elements must be wrapped in an enclosing tag. So in other words, AppOne and AppTwo are adjacent. They're next to each other, but they're not wrapped with a container. If I was to wrap this with a div, we would see that this will render appropriately. We have our second app down here and our first app here at the top. So what we're running into here is kind of a rule with JSX. We're seeing that we only can render one component. We can't render two sibling components unless they're wrapped in some sort of another tag, like a div or a section or something like this. Now this limitation with react means that there's a lot of extra wrapping divs that have been added to all sorts of different projects. So one way that we can get around this is I could say React.Fragment, and then I'll close the React.fragment as well. So let's go back. Let's look at our DOM by inspecting the element. And we'll take a look at this. And we see, we have an app that has the header, section and the footer. And then we have an h1, and all of this is inside of our root. So we haven't added anything extra. What the fragment is doing is it's allowing this to act like a wrapper, but it's not actually adding anything into the DOM. So this is pretty cool. There's even a shorter hand for this though. I can remove React.Fragment and React.Fragment. And instead use this shortened fragment syntax, no react fragment is needed, and the output will be exactly the same. So let's actually change this. I'm going to get rid of AppTwo. I'm going to get rid of the fragment and I'm going to get rid of this. Get rid of the entire AppTwo, and actually migrate back over to the App.js. Now this is using this div to enclose everything, but this is a place where you could use a fragment again, if you didn't want to have that wrapper div getting rid of it would mean that you're going to have a lot of angry red lines, meaning that something is probably going to go wrong, but you can add the fragment back in and this will render everything. Now we do lose the styles that we had from the App class. But if you wanted to use something like this, you definitely could. And just a note about that className, notice with ReactclassName, instead of class. So that's something to be aware of that you're going to get a warning if you do add class instead of className. So that's a lot of little quirks about the react library, but just something to be aware of. The fragment is a really, really cool feature to allow us not to kind of junk up the DOM by adding too many elements.

## Questions

Question 1 of 18
Which transformation function can be written to set the dishes array to return objects?
You are correct!
const dishObjects = dishes.map((dish, i) => ({ id: i, title: dish }));

Question 2 of 18
The following code produces an error in React. How can the code be rewritten to properly display the contents of the App and AppTwo functions?
  ReactDOM.render(
    <App />
    <AppTwo />,
    document.getElementById("root"));
You are correct!
  ReactDOM.render(
    <div>
      <App />
      <AppTwo />
    </div>,
    document.getElementById("root"));
Feedback
In JSX, you cannot render two sibling components unless they are both wrapped inside another tag.

Question 3 of 18
If you want to create a list with the following items, how should you set up your dishes array?
  Macaroni and Cheese 
  Salmon
  Pizza with Vegetables
  Spaghetti
  Ice Cream
  Cake
You are correct!
  const dishes = [
      "Macaroni and Cheese",
      "Salmon",
      "Pizza with Vegetables",
      "Spaghetti",
      "Ice Cream",
      "Cake"
  ];

Question 4 of 18
Which img tag will not generate a warning, and also help people who use assistive devices?
You are correct!
  <img src={restaurant} 
  height={200} 
  alt="napkin and silverware" />
Feedback
The use of the `alt` property provides meaningful information to those who are not able to see the image properly.

Question 5 of 18
How would you include a reference to a picture from your current local directory into your React.js code?
You are correct!
import restaurant from "./restaurant.jpg";
Feedback
A valid reference contains the pathname, the filename, and the name to use as an object reference.

Question 6 of 18
How can you convert the following code to use keys?
  const dishes = [
    "Dish 1",
    "Dish 2" ];
  dishes.map((dish) => console.log(dish));
You are correct!
  const dishes = [
    "Dish 1",
    "Dish 2" ];
  const dishObjects = dishes.map(dish, i) ==> ({ id: i, title: dish }));
  console.log(dishObjects);
Feedback
To use keys, you need to create key names and generate unique identifiers. In this case, the key names are `id` and `title`.

Question 7 of 18
Which code block will correctly render two apps together using a shortened fragment syntax?
You are correct!
  ReactDOM.render(
      <>
            <App />
            <AppTwo />
      </>,
      document.getElementById("root")
  );

Question 8 of 18
How can the following code be rewritten to use React.js fragments, while not creating additional tags to the DOM?
  ReactDOM.render(
    <div>
      <App />
      <AppTwo />
    </div>,
    document.getElementById("root"));
You are correct!
  ReactDOM.render(
    <React.Fragment>
      <App />
      <AppTwo />
    </React.Fragment>,
    document.getElementById("root"));
Feedback
The `React.Fragment` construct allows sibling components to be rendered together without creating any additional html tags.

Question 9 of 18
If you import the following image into your React application, what text can you add to make it more accessible?
  <img src={restaurant} />
You are correct!
  <img
      src={restaurant}
      alt="napkin and silverware at a restaurant table"
  />

Question 10 of 18
You have a function called App inside of a file named App.js. Which code would you need to put inside your index.js file to utilize the App function?
You are correct!
  import App from "./App";
  ReactDOM.render(<App />, document, getElementById("root"));
Feedback
To use the `App` function, you must import the function, and then call it from `ReactDOM.render`.

Question 11 of 18
You are making a flyer and would like a person's name to appear before the word Kitchen. Which function call would correctly accomplish this in React?
You are correct!
  function Header(props) {
    return (
        <header>
          <h1>{props.name}'s Kitchen</h1>
        </header>  ); }
Feedback
Changing the function to accept a parameter and referencing that parameter's property will cause the person's name to be printed.

Question 12 of 18
There is a function called App and another called Header. What is the correct function code to render the contents of the Header function from within the App function?
You are correct!
  function App() {
    return (
      <div classname="App">
        <Header />
        <h2>Main</h2>
        <div>); }
Feedback
Enclosing the `Header` function within angle brackets will cause the contents of the function to be rendered.

Question 13 of 18
What will be displayed in the developer console when the following code block is rendered on a webpage?
  <ul style=({ textAlign: "left" })>
      {props.dishes.map((dish) => (
        <li>{dish}</li>))}
  </ul>
You are correct!
The console will display the warning Each child in a list should have a unique "key" prop.
Feedback
The console will display the warning because each element needs a unique key to help identify it.

Question 14 of 18
Given a list called dishes and a function parameter name called props, what is the correct statement that will print the contents as unordered list elements on a webpage using React?
You are correct!
  {props.dishes.map((dish) => (
      <li>{dish}</li>
  ))}
Feedback
The correct way to print a list is to call the `map` function on the list `dishes` that is attached to the `props` function parameter.

Question 15 of 18
It is important to incrementally test code as it is written. What is the correct way to set up a list and print the contents to the developer console?
You are correct!
  const mylist = [
    "Item 1",
    "Item 2",
    "Item 3"
  ];
  mylist.map((item)  =>  console.log(item));
Feedback
The correct way is to declare a variable using items separated by commas and enclosed inside square brackets.

Question 16 of 18
You want to add the copyright year to your webpage using a function called Footer. Which of these represents the correct function call?
You are correct!
  <Footer year={new Date().getFullYear()} />
Feedback
The correct way to pass in a parameter is to provide a property name which equals the content we want to send. In this case, the content is the output of a JavaScript function.

Question 17 of 18
How should the header component appear if you replace the name "Eve's Kitchen" with the new name "Horacio's Kitchen" stored in a variable?
You are correct!
  function Header(props) {
      console.log(props);
      return (
            <header>
                <h1>{props.name}'s Kitchen</h1>
            </header>
      );
  }

Question 18 of 18
You want to create a component that returns a header named "Eve's Kitchen". To render this header, what is the next necessary code block?
  function Header() {
      return (
            <header>
                <h1>Eve's Kitchen</h1>
            </header>
      );
  }
You are correct!
  function  App() {
      return (
            <div className="App">
                <Header />
            </div>
      );
  }

# 4.0 React State in the Component Tree
## 4.1 Conditional Rendering
* Another thing we can do within a react component tree is render components conditionally.

* Exemple
function SecretComponent() {
  return (
    <h1>Secret information for authorized users only.</h1>
  )
}

function RegularComponent() {
  return(
    <h1>Everyone can see this component.</h1>
  )
}

//Using ConditionalAPP component to render our component conditionally based on properties
function ConditionalApp(props){
  if(props.authorized) {
    return (
      <SecretComponent />
    )
  } else{
    return (
      <RegularComponent />
    )
  }
}

ReactDOM.render(   
    < ConditionalApp authorized={false} />,
  document.getElementById('root')
);

or, using Ternary sintax instead of if statement:

function ConditionalApp(props){
  return (
    <>
      {props.authorized ? <SecretComponent /> : <RegularComponent />}
    </>
  )
}

* Transcripts
Another thing we can do within a react component tree is render components conditionally. So to demonstrate this let's first tear down our little restaurant here. So basically all I want to do is get rid of anything related to our restaurant. Our dishes are going to go away, our header, our main, we'll get rid of our photo. And just in the spirit of simplifying things, we want to add this div. So we will say components here eventually. So let's just make sure that's working. Nice. Now, the next thing I want to do is I want to create a couple different components. The first component is going to be called SecretComponent. Now this is a super secret component that only people who are authorized are going to be able to see. So I'll say super secret information for authorized users only. Okay. Now the next thing I want to do, how about secret? So you can read everything. Awesome. So the next thing that we'll do is we will say function RegularComponent. And our regular component is going to return an h1 as well. This time, it'll say everyone can see this component. So we're going to render that in the event that our user is not logged in. So now what we can do is we can delete our return from the app, and we're going to use the app component to render our component conditionally based on properties. So we're going to have a property and specifically we are going to have a property in our index js file called authorized. So when I render the app component, I'm going to add this authorized property and we'll initialize it to false. Now, if we go back to our app, we now can write the logic for conditional rendering. So we'll say if props.authorized, if that's true, then we want to return the SecretComponent. Otherwise in our else block, we'll return the RegularComponent. All right. So now it says everyone can see this component. That's pretty cool. If we go back to the index and switch this to true, we see our secret information for authorized users only. Now remember our react tools, if you look at this and we select components and I'm going to pop this open in its own window 'cause no one can read that. We can see that our app component, if we select it authorized this set to true. But if I change the authorized property to false, check it out, it's going to update. Everybody can see it when we're not authorized. Let's take this one step further. So back in our app component, right now, we are conditionally rendering based on this if block, but we can also kind of refactor this a little bit to use a terser syntax. So what I'm going to do is I'll replace our if basically I'm just trying to grab everything that isn't these components. So I'm going to need these components still. Now at this point, we're going to add a return and inside of the return we'll add a fragment because these are so useful. Now we'll add a JSX expression. Now here's the inline part. So we're going to say props.authorized. So if this is true, we'll add a question mark here. So anything that comes after the question mark is the component that will be displayed. So if true, render this, if false render the regular component. So let's paste this here and we'll give that a save. And if we go back to our code, we should see that authorized is true. This is rendering appropriately. And of course, if we change it to false, either in our actual code or in the developer tools, we're going to see that this updates. So two different ways to get to the same result. We're using an if statement at first, and then we use this inline ternary if statement to make our syntax a little shorter. Use whatever feels right to you but these are two different ways of doing it.

## 4.2 Destructuring arrays and objects
* Access certain items from our array, in the way that we typically do, which is we use these square brackets, and then we access everything by index. So zero, one and two. Giving it a save we see that this is our second item, our tent. There's another way that we can access items in an array though. Objects are very easy to access the values, because we have key value pairs, and we can reach out to the key, and get the value back.

const checkList = ["boots", "tent", "headlamp"];
console.log(checkList[1])
checkList.forEach(item => console.log(item))

* Array Destructuring
Arrays are a little trickier though, because we can't use a key as a lookup. But what we can do is we can use array destructuring. To do this I'm going to get rid of the name of the variable, and I'll replace it with this empty array here. Now, the first thing I want to add here is, I'll say most Important Item. Then I want to console log most Important Item. Because I've created this variable inside of the array brackets, what it's actually going to do, is it'll give me the first item in the array. 

const [mostImportantItem] = ["boots", "tent", "headlamp"];
console.log(mostImportantItem)
//boots

const [first, second] = ["boots", "tent", "headlamp"];
console.log(first, second)
//boots tent

const [ , , third] = ["boots", "tent", "headlamp"];
console.log(third)
//headlamp

* So this gives us a nice way to dig into arrays, and actually assign variable names to items within the array.
* Destructuring can also be used and is often used with React, when it comes to the props object. Exemple:

function SecretComponent() {
  return (
    <h1>Secret information for authorized users only.</h1>
  )
}

function RegularComponent() {
  return(
    <h1>Everyone can see this component.</h1>
  )
}

BEFORE (With props keys)
function ConditionalApp({props}){
  return (
    <>
      {props.authorized ? <SecretComponent /> : <RegularComponent />}
    </>
  )
}

AFTER (With destructuring objects props)
function ConditionalApp({authorized}){
  return (
    <>
      {authorized ? <SecretComponent /> : <RegularComponent />}
    </>
  )
}

Finally, rendering:
ReactDOM.render(   
    < ConditionalApp authorized={false} />,
  document.getElementById('root')
);

* So this is object destructuring. We're going to be able to use the key in the object. So for example, if I say props, and I go back props.authorized, console log props, remember this is just an object. Each one of this objects keys are going to be available, whenever I am passing them in this destructured object. So we can say authorized, and then as many as we wanted to add we could.

* Object destructuring is going to make the syntax in our components a little cleaner, by destructuring the props object, and then array destructuring is going to help us in a second, when we start to talk about stale.

* Transcripts
 Something we need to cover before we get to handling state in our React Apps, is array destructuring. So if you're not familiar with this, let's look at a regular array. I'm going to call this checklist, and inside of my checklist, I will create an array of items that I might take on a hiking trip. I'll take some boots, a tent, and a headlamp. With our checklist created, I can console log it. So let's take a look at this in our browser. We see our boots, tent and headlamp. The next thing I want to do is access certain items from our array, in the way that we typically do, which is we use these square brackets, and then we access everything by index. So zero, one and two. Giving it a save we see that this is our second item, our tent. There's another way that we can access items in an array though. Objects are very easy to access the values, because we have key value pairs, and we can reach out to the key, and get the value back. Arrays are a little trickier though, because we can't use a key as a lookup. But what we can do is we can use array destructuring. To do this I'm going to get rid of the name of the variable, and I'll replace it with this empty array here. Now, the first thing I want to add here is, I'll say most Important Item. Then I want to console log most Important Item. Because I've created this variable inside of the array brackets, what it's actually going to do, is it'll give me the first item in the array. Just to verify we see that this is boots. And we can add as many of these as we want to. I could say second, I could say second. Now, if we go back, we should see boots and tent. You can also decide not to create a variable name for every single item. So what I can do is let's say I wanted to access the headlamp, and I wanted to give that a name. I would just skip over anything I don't want to use with these commas. Those will act as a placeholder. So the first one is for boots, the second one is for tent, and then I can say light. Now when I save this, and actually when I console log this, this will give me the headlamp. So this gives us a nice way to dig into arrays, and actually assign variable names to items within the array. Destructuring can also be used and is often used with React, when it comes to the props object. So object destructuring, if we take a look at our App.js, can help us when we have a lot of property names. In this case we don't, but let's go ahead and replace props, with the curly braces and authorized. Then I can remove props. and authorized is just going to work as I expect it to. So this is object destructuring. We're going to be able to use the key in the object. So for example, if I say props, and I go back props.authorized, console log props, remember this is just an object. Each one of this objects keys are going to be available, whenever I am passing them in this destructured object. So we can say authorized, and then as many as we wanted to add we could. So there we go. So two different types of destructuring. Object destructuring is going to make the syntax in our components a little cleaner, by destructuring the props object, and then array destructuring is going to help us in a second, when we start to talk about stale.

## 4.3 Understanding the useState Hook
* Managing state in a React application is really important. And the most modern way to handle state variables in an app is to use a function called useState.
* What useState is doing is it returns an array. The first item in the array is undefined at the moment, we need to define it. This is our state variable. And then the second item is a function that we're going to use to update state.
* Using useState Hook

Exemple:
  function StateApp() {
    const what = useState();
    console.log(what)
  //(2) [undefined, ƒ]
  // 0: undefined
  // 1: ƒ ()
    return (
      <h1>Hello Word</h1>
    )
  }

  ReactDOM.render(
    <React.Fragment>
      < StateApp />
    </React.Fragment>,
    document.getElementById('root')
  );

Exemple using initial state:
  function StateApp() {
      const what = useState("Happy");
      console.log(what)
    //(2) ["Happy", ƒ]
    // 0: "Happy"
    // 1: ƒ ()
      return (
        <h1>Hello Word</h1>
      )
    }

    ReactDOM.render(
      <React.Fragment>
        < StateApp />
      </React.Fragment>,
      document.getElementById('root')
    );
  
Exemple using desctructuring:
We're going to pass an initial state into our useState function. So when our app first runs, the initial state is going to be happy. Now, if we take a look at this, we see that the array has position zero, happy. Now, remember all the way back to the previous video, where we looked at array destructuring. The reason that I told you about that was because we want to use array destructuring to pop out that first item in the array and give it a name. So we're going to call this emotion. Now, if we console log emotion, we're going to see happy. All right. So now we can manage this state variable and we can use it maybe to display the emotion somewhere in the component.

  function StateApp() {
    const [initialEmotion] = useState("Happy");
    console.log(initialEmotion)
    //Happy
    return (
      <h1>Current Emotion: {initialEmotion}. </h1>
    )
  }

  ReactDOM.render(
    <React.Fragment>
      < StateApp />
    </React.Fragment>,
    document.getElementById('root')
  );

* Updating state
We know that useState returns a pair. The first item is the state value. The second is a function that we can use to update the state. Now you can call this whatever you want, but typically we call it set and then whatever the name of that variable is.

  function StateAppTwo() {
    const [initialEmotion, setEmotion] = useState("Happy");
    console.log(initialEmotion)
    //Happy
    return (
      <>
      <h1>Current Emotion: {initialEmotion}. </h1>
      <button onClick={() => setEmotion("Frustrated")}>Set Frustrated</button>
      </>
    )
  }

  ReactDOM.render(
    <React.Fragment>
      < StateApp />
    </React.Fragment>,
    document.getElementById('root')
  );

* So a couple things about the anatomy of our code here, the first item in our useState array is the state variable, setEmotion or whatever we call this function is going to update the state. And then we pass in whatever we want the initial state to be into the useState function. This doesn't always have to be a string, it could be a boolean, it could be a number. It could be anything you want it to be, but this is going to allow us to manage any sort of local variables that we want to keep track of.

## 4.4 Working with useEffect
*  Another important Hook that's part of the React library is useEffect. It's typically used to manage side effects that aren't related to the components render. So things like console messages, loading data, and sometimes animations can benefit from useEffect.

* Now useEffect also takes in a second argument and this argument is called the dependency array.

** Now, if you pass an empty array the props and state inside the effect will always have the initial values. So it really means that the effect is not going to be called again after the first render. (Now we are getting a little message here React Hooks, exhaustive, dependencies, blah, blah, blah. React is asking us to add emotion to this dependency array, but really I only want this to be called one time so this is okay in this situation). But you can use this array to keep track of values so let me show you what I mean. I'm going to pass emotion into this and now I can see every time this is being updated. 

* So useEffect is going to watch this state value if it changes it will call the function.

* Transcripts
Another important Hook that's part of the React library is useEffect. It's typically used to manage side effects that aren't related to the components render. So things like console messages, loading data, and sometimes animations can benefit from useEffect. So let's take a basic look at it and then later in the course we're going to use useEffect to fetch data. The first thing we'll do is we'll import useEffect from the React library and then we're going to use the useEffect Hook here on line seven in order to console log the current emotion, so the current state value. UseEffect takes in a callback function so we're going to use this function here and inside the function we'll use a console.log and in it it should just read It's emotion around here. Okay, so now let's open up the console and immediately on render it says It's happy around here! It's enthusiastic around here! If I click Frustrate, It's frustrated around here! So this is allowing us to do something that doesn't have to do with the render of the component, but it's just a side effect. Now useEffect also takes in a second argument and this argument is called the dependency array. And there's a couple different ways that you can manage this. Now, if you pass an empty array the props and state inside the effect will always have the initial values. So it really means that the effect is not going to be called again after the first render. So even if I click on other buttons here, it will only going to have that first message. Now we are getting a little message here React Hooks, exhaustive, dependencies, blah, blah, blah. React is asking us to add emotion to this dependency array, but really I only want this to be called one time so this is okay in this situation. But you can use this array to keep track of values so let me show you what I mean. I'm going to pass emotion into this and now I can see every time this is being updated. So useEffect is going to watch this state value if it changes it will call the function. Now, this can be more interesting if we add another state value. So we're going to say secondary and setSecondary and we'll set this equal to useState and this time our secondary emotion will be tired. You can be happy and tired at the same time I can promise you that. So we're going to go ahead and say useEffect we'll pass emotion into the first one. Let's add another useEffect Hook and we'll say useEffect and we will say console.log. Now this time we want to log the secondary emotion. This time we want to actually remove both of these so let's pull the dependency arrays for the moment and let's also add an additional button. So this additional button will say setSecondary, enthusiastic will change to crabby. And we'll say, Make crabby and I want this one to say, Make happy now. Cool. So at this point it says current emotion is happy let's also display the secondary and secondary. Okay, so working the chain here we've added our state value we have removed both dependency arrays and I want to show you what our outcome is. So if I call set emotion, Make Happy or Frustrate or Enthuse, check it out all of these logs are calling. So we see it's frustrated it's crabby, but really we only want to console log if the value of the console log has changed. So let's add the dependency array back we're starting to understand why we might want this. So now this useEffect we'll watch the emotion change this one we'll watch the secondary emotion change. So frustrate is the first emotion it's just going to log It's frustrated around here! Then if I click Make Crabby it'll just log It's crabby around here! So useEffect helps us in all sorts of situations this is a first look at it but again, we'll use it later to load some data.

## 4.5 Incorporating useReducer
*  A reducer function's most simple definition is it takes in the current state and it returns a new state.
* So instead of hard coding this behavior into onChange events we can abstract it away into its own function. 

BEFORE
function CheckBox() {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    console.log(`The checkbox is checked: ${checked}`)
  }, [checked]);

  return (
    <>
     <input type="checkbox" value={checked} onChange={()=>setChecked((checked)=>!checked)} />
     <p>{checked ? "Checked" : "Not Checked"}</p>
    </>
  )
}

AFTER
function CheckBoxTwo() {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    console.log(`The checkbox is checked: ${checked}`)
  }, [checked]);

  // A reducer function's most simple definition is it takes in the current state and it returns a new state.
  function toggle() {
    setChecked((checked)=>!checked)
  }

  return (
    <>
     <input type="checkbox" value={checked} onChange={toggle} />
     <p>{checked ? "Checked" : "Not Checked"}</p>
    </>
  )
}

* Now, we can take this a step further, using another one of these react hooks called useReducer. So let me show you how this works. Instead of importing useState, We're going to import useReducer. And useReducer is going to do something pretty cool. It's going to make it such that we don't even have to write this extra function. We're going to call the function here, toggle. This is the updated function. And useReducer takes in two arguments. So the first argument that it takes in I'll put here on line six, is the function. So this is the reducer function that we're going to use. Here we go. And let's add a comma there, so we separate the arguments. The second argument is the same as the first argument in useState, it's the initial state. So let's give that a save. And now we see that this is working as we expect. 

function CheckBoxThree() {
  const [checked, toggle] = useReducer(
    (checked)=>!checked,
    false
  );

  useEffect(() => {
    console.log(`The checkbox is checked: ${checked}`)
  }, [checked]);

  return (
    <>
     <input type="checkbox" value={checked} onChange={toggle} />
     <p>{checked ? "Checked" : "Not Checked"}</p>
    </>
  )
}

So that's a little upgrade from useState to useReducer. We've created a reducer function that takes in the current state and returns a new state. Then we can use that function to update the state for the checkbox.

* Trancripts
Let's consider a checkbox and how we might manage it, say using react. So the first thing I want to do is let's get rid of all of our previous code in the app. We're going to get rid of these buttons and we just want to have an input here and the input will have a type checkbox. Cool. Alright, so let's take a look at this running. We should see our little checkbox. Now I'm going to use this little window trick here. I'm going to hit F3 button, and place my code window next to my browser. Alright, so now we can see everything that's going on. Now, the next thing that I want to do here is I want to start to handle the state of this checkbox. So we'll use useState, we're going to create a value called checked and then a function for updating this called setChecked. And this will be set equal to useState. And the initial state will be false. Now, we can then assign the value of this input to whatever the value of checked is. Then, we're going to add an onChange and the onChange is going to be a function that anytime this changes, anytime the value changes here we're going to call that function. That's going change the state. So, here we have setChecked, we take in the value and we return whatever the opposite is. Now I know that this screen is impossible to read. There we go. (laughs) So there we go. We have our function in line. We don't really know what's going on until we add a little string here. So let's add a paragraph around a JSX expression. That's going to check whatever the value of checked is. If it's checked, then we return checked. If not, we return not checked. There we go. It's responding as we expect. Now, this is working well but, we're expecting developers to send the right thing to this function. So, we're always expecting them to use setChecked and to send this kind of complicated toggle to the function. Now, we could expect them always to do the right thing or we could ask them to provide the toggle. Also I realized we're not using use effects so let's get rid of that. So, let's inside of our function. We'll create another function called toggle. And now we can take all of the logic from the onChange that we just wrote by hand. And we can encapsulate this in this toggle function. So now, instead of sending the whole function we'll send the name of the function. Alright, so this should work just the same. We haven't really changed anything. So from now on, we're going to refer to this function by a different name, and we're going to call it a reducer. A reducer function's most simple definition is it takes in the current state and it returns a new state. If checked is false, it should return the opposite, which is true. So instead of hard coding this behavior into onChange events we can abstract it away into its own function. Now, we can take this a step further, using another one of these react hooks called useReducer. So let me show you how this works. Instead of importing useState, We're going to import useReducer. And useReducer is going to do something pretty cool. It's going to make it such that we don't even have to write this extra function. We're going to call the function here, toggle. This is the updated function. And useReducer takes in two arguments. So the first argument that it takes in I'll put here on line six, is the function. So this is the reducer function that we're going to use. Here we go. And let's add a comma there, so we separate the arguments. The second argument is the same as the first argument in useState, it's the initial state. So let's give that a save. And now we see that this is working as we expect. So that's a little upgrade from useState to useReducer. We've created a reducer function that takes in the current state and returns a new state. Then we can use that function to update the state for the checkbox.

## Questions

Question 1 of 11
How can you change the following code to incorporate the useReducer Hook?
  const [checked, setChecked] = useState(false);
  function toggle() { 
    setChecked(checked) => !checked); }
You are correct!
  const [checked, toggle] = useReducer(
      (checked) => !checked, false);
Feedback
One purpose of the `useReducer` Hook is to prevent hardcoding by encapsulating code that processes user input into a new function.

Question 2 of 11
Using array destructuring, which code block returns only the item headlamp from the following array of items?
  const checklist = ["boots", "tent", "jacket", "headlamp"];
  console.log(checklist);
You are correct!
  const [, , , light] = ["boots", "tent", "jacket", "headlamp"];
  console.log(light);

Question 3 of 11
The following code is an example of destructuring an array. What will be displayed in the developer console after the code is executed?
  const [, , light] = ["boots", "tent, "road"];
  console.log(light);
You are correct!
  road
Feedback
The developer console will display `road`, since the variable `light` is in the third index of the array declaration

Question 4 of 11
When you render the app component and set <App authorized={true} />, what will your app display?
  function App(props) {
      if (props.authorized) {
            return <SecretComponent />;
      } else {
            return <RegularComponent />;
      }
  }
You are correct!
The text associated with the SecretComponent function

Question 5 of 11
How can you rewrite the following code to have the same functionality, but with fewer keywords?
  function App(props) {
    if (props.authorized) {
      return <SecretComponent / >;
    } else {
      return <RegularComponent />; }}
You are correct!
  function App(props) {
    return (
      <>
        {props.authorized ? <SecretComponent /> : <RegularComponent />}
      </>); }   
Feedback
You can use `?` and `:` as shorthand for `if-else` code blocks.

Question 6 of 11
You want to create a webpage that displays a certain message based on a user being authorized. What is the proper application of a conditional render to accomplish this task?
You are correct!
  function App(props) {
    if (props.authorized) {
      return <SecretComponent / >;
    } else {
      return <RegularComponent />; }}
Feedback
You can use the `if-else` control flow statements to create a conditional rendering.

Question 7 of 11
Using the useReducer Hook with the code below, what should be returned?
  function app() {
      const [checked, toggle] = useReducer(
            (checked) => !checked,
            false
      );
You are correct!
  not checked

Question 8 of 11
What is the purpose of the useEffect Hook?
You are correct!
  to manage side effects that are not related to the component's render
Feedback
The `useEffect` Hook is useful to perform additional work behind the scenes, without affecting the appearance of the webpage.

Question 9 of 11
Which code correctly shows the useEffect Hook used with the dependency array argument to track values?
You are correct!
  useEffect(() => {
      console.log('It's ${emotion} around here!');
  },  [emotion]);

  Question 10 of 11
The _____ Hook is used to define states inside a React.js application.
You are correct!
useState
Feedback
The `useState` Hook allows a developer to create and use states in a React.js application.

Question 11 of 11
The first item that the useState Hook returns is:
You are correct!
an array

# 5.0 Asunchronous React
## 5.1 Fetching data with Hooks
* Trancripts
- [Narrator] One of the most common tasks that we need to perform as developers is to fetch data from remote sources. So we're going to grab some data from the GitHub API. If I go to api.github.com/users, this will give me a list of all of the GitHub users and their data as JSON. Now the next thing I can do, is I can use slash whatever my username is and that'll give me all of my data. So this is giving me a little JSON object of all of my GitHub information. So from my react application I want to make a call to this API, and I'm going to use, use effect to make that work. And actually I'll use a combination of use effect and use state. So here's what we'll do. First I'm going to paste that link in so that we kind of know what that looks like, second, I'm going to import use state and use effect from react, then I'm going to replace our fragment here with a div, and that div is going to be the component that displays all of our data coming back from the API. Now, we need to create a data variable and a function to update the data. And so we'll call use state and we'll send an initial state of null because we won't have any data when our app loads. Next I want to use, use effect. Use effect takes in this callback function and we're going to fetch from this API. Now we could just fetch this entire URL, but I want to make this a little bit more flexible so that I can fetch information by login. So login is going to come from our properties. So we'll destructure this, we'll say login, and then no matter which user I'm searching for, I'm going to be able to use the same function. Now, once I do this, I'm going to say "dot then" we'll take the response and we'll convert it to JSON, then we're going to call set data, and then I'm going to pass in this empty array, because we only want to fetch data when the component renders. So the next thing we want to do is, we're going to say, if there's some data, we want to return a div, inside of that div we're going to use this little function called JSON.stringify, and we're going to stringify the data. So we just want to display that big blob of data over here in the window. Otherwise, in other words if there's no data, we'll say no user available. So at the beginning, it's pretty fast but it said no user for a minute. Then this is giving me that data back. But what it's saying is that the login is undefined. That's kind of weird. It's working ish, but it says undefined. So what I forgot to do, was I need to pass in a login. I'm going to do this over here in the index file. So here on line six, I'm going to say login equals, and you can put your own in here but I'll say Eve Porcello, now this will give me all of that data. All right, so we used use effect, to fetch some data from a remote source, in the next video, I'm going to show you how to display it.

## 5.2 Displaying data from an API
* Transcripts
In the previous video, we were able to fetch this little blob of data from our GitHub API. In this video what I want to do is show you how to display the results by just taking a look at the data that you got back. So, at this point, I have this string of five little blob of data. I feel like our UI could look a little better than that, ultimately. So, let's go ahead and handle this. Want to wrap our return to div in parentheses here. Now, inside of this, what we're going to do is we're going to display an h1, the way that we're going to access the value is what's return is a full object, right? So, if we have some data, data represents the entire thing. So data dot login would represent a login. Data dot name would represent the name. So here we have our name. We're starting to put this thing together. Then we could say maybe location. Tahoe City, California. Then I could also use this to display my avatar photo. So in our image, first we want to add the alt text so we'll say, we'll make this flexible too. We'll say data dot login. And then the location of this avatar is at avatar URL, data dot avatar URL and we display all of that on the page. So our component now displays the data from this call. Now, what happens if something goes wrong? What happens if we don't get the data? Well in the next video, I'll show you how to handle different states of loading error and data in your application.

## 5.3 Handling loading states
* Trancripts
When we make an HTTP request to an API, there are three possible States. We have pending or loading, we have success like we see here where all of our data has been fulfilled, and then we have failed. A lot of times if we make our requests may be to a broken URL, we just have this empty screen and we want to let our user know that something has gone wrong. So we can make some adjustments to our component here to make this work a little nicer. And that's going to involve, a couple other useState calls. So we're going to create one of these for loading, so we'll say set loading, and I'll set that equal to useState, which will be null. And then I'll say error, setError. And the initial state for a loading, shouldn't really be null, it should be false, there we go. So, from here we can adjust our use effect call a bit, what we're going to say is, "If there's null login, we want to just return. We want to jump out of this useEffect call." Otherwise we want to set loading to true. We also can chain on another dot then here, and we're going to say set loading false, after we've updated that data. Now finally we want to throw in a catch, and the catch is going to call setError. Okay. The other thing I want to do here as a means of cleanup is let's go ahead and pass login, into the dependency array for useEffect. So what this will allow us to do, is any time that value changes, that's when we want to call it. Now, we will also want to handle our loading state, so we'll say, "If loading return an h1 that says loading." Then we want to say if there's an error, let's return a pre tag, with JSON.stringify error, null, and 2. So this'll just, if there's any sort of error, it's going to display that on the page for us, and this two is just going to format our JSON so that we can actually read it. And finally, we're going to say, "If there's no data, return null." Now, instead of wrapping this in our, if statement, this is going to be kind of the default behavior. Hopefully we have some data, hopefully everything goes well, and we can display our component. Alright. So, with all of that done. We can hit a refresh again, we're going to be able to see that loading state at the very very beginning, then if there's any sort of error, we'll handle that too. Now in production, we'll do do more with the error maybe we'll track it, we'll log it, We'll try to make another request, but while we're in development. It's okay to render these error details, just so that we can see what they are. So this is kind of the breakdown of every one of these asynchronous calls to an API. We have a loading state where we're waiting on some data, We have a complete state where we have the data that we want, like here. And then we may have an error state, if there is some sort of a problem. Handling all of these States adds a little bit more code, but handling them is really essential. Because it's going to help us to track down any sort of problems, or handle latency with loading.

## Questions
Question 1 of 6
You want to use the data returned from the API to display your full name in a header. How should your code be set to achieve this?
You are correct!
if (data) {
     return (
          <div>
               <h1>{data.name}</h1>
          </div>
     );
}

Question 2 of 6
Which code block ensures that data is present and renders the name and location elements from an array called data?
You are correct!
if (data) {
   return (
     <div>
       <h1>{data.name}</h1>
       <p>{data.location}></p>
     </div>); 
}
Feedback

Use an `if` clause to check whether data is present, and then use dot syntax to access the individual elements of the array by name.

Question 3 of 6
You can use the useEffect Hook to fetch API data. Given an input parameter called login and a function called setData, what is the correct useEffect statement to perform these tasks?
You are correct!
useEffect(() => {
  fetch(`https://api.example.com/users/${login}`)
    .then((response) => response.json())
    .then(setData);
}, []);
Feedback

Use `fetch` to get the data. Next, use a `then` clause to stringify the response. Finally, use another `then` clause to populate an array.

uestion 4 of 6
What should be passed into the dependency array for useEffect, so it is called anytime the value changes?
 
useEffect(() => {
     if (!login) return;
     setLoading(true);
     fetch('https://api.github.com/users/${login}')
          .then((response) => response.json())
          .then(setData)
          .then(() => setLoading(false))
          .catch(setError);
You are correct!
}.,   [login]);

Question 5 of 6
An application needs to gracefully handle situations like a failed response. Which fetch clause can handle such an occurrence?
You are correct!
.catch(setError)
Feedback

The `catch` clause is used to handle failure situations; it can redirect the application to provide a meaningful message back to the user.

Question 6 of 6
Given the following URL, which code correctly displays the useEffect Hook being used to fetch the entire URL?
 
https://api.github.com/users/firstlastname
You are correct!
function App() {
     const  [data, setData] = useState(null);

     useEffect(() => {
          fetch(`https://api.github.com/users/firstlastname`)
     });
     return <div></div>;
}

# 6.0 React Testing
## 6.1 Using Create React App as a testing plataform
* Transcripts
- [Moderator] When we installed Create React App, it's important to know that we also installed this really cool testing platform. So if you take a look at the Create React App website, and then you go to the docs panel, if you go to the testing section, there is a whole section on running tests. So, because we are using Create React App, we have a couple cool things at our disposal. First of all, I've created a couple of different files here. The first of which is called functions dot test dot JS. So any file that ends in test dot JS is going to be thought of as a test, it's going to be run as a test. We also have this functions JS file, and this is where our functions are going to live. So, we have become familiar with running NPM start. Another thing that we have at our disposal is NPM test. So running NPM test is going to run any sort of tests that are running. Now, we already had a test, app dot test dot JS, and this was a test that came fresh with our installation of Create React App. This test is failing cause it looks like when we run the app, we're looking for this element called learn react, which we've deleted since then. So, let's go ahead and delete this file for now, just because we don't want to have old tests running, but then this one says your test suite must contain at least one test. So, in the next video, we're going to look at how we can write a test and how we can write a function to make that test pass.

## 6.2 Testing small functions with JEST
* we're using jest that is configured as part of create-react-app. We give the test a name, we pass it a callback function, and then we use the expect assertion to call the function with a certain number, and then we use this matcher (.toBe), we use this function to tell us does four times two equal eight? That's what we expect it to be.

test("Multiplies by two", () => {
    expect(timesTwo(4)).toBe(8)
})

* Transcripts
- [Instructor] To experiment with this testing let's go ahead and write a test using this functions js file. So inside the functions we're going to use a function called test. And the syntax that we're using here comes from the jest library which is automatically included when we use create-react-app. So multiplies by two, is going to be the name of our test. And then we'll add this callback function here, and we're going to use this assertion framework called expect. So again, the first argument here multiplies by two is the name of the test. The second argument contains what should be tested. So we can go ahead and import, times two, from functions. So this is going to be a function that multiplies something by two. Now, what we can do is over here in the functions file, we can type export function times two. And then in the second, we'll come back to actually write this test. Now, back to the test js file we're going to in the expect, we need to call the times two function and we're going to call it with some sort of a value. So if I call times two with four, I expect the value to be eight. So at this point, we look at our test screen, which we've gotten by running NPM test. This is telling us that four times two in this case is undefined. We haven't written the function to make this work. So now it's up to us to make this work. We will do so in the functions file. So times two should take in some sort of a value. And then we're going to return a times two. If we save that, now we see that our test is passed. So just to recap what we did here, we're using jest that is configured as part of create-react-app. We give the test a name, we pass it a callback function, and then we use the expect assertion to call the function with a certain number, and then we use this matcher, we use this function to tell us does four times two equal eight? That's what we expect it to be, but the way that we fully test it is we run the function, we pass it for, and then it returns a and our test pass. So this is a very simple test, but the process of writing the test first and then watching them fail and then trying to get them to pass. This is a process called test-driven development. And it can be really useful as we're planning our applications.

## 6.3 Introducing React testing library
* Transcripts
- [Instructor] Another test utility that is part of Create React App is Testing Library. So Testing Library is a really useful testing library that we can use with React or outside of React. But the thing that's really nice about it is it's going to help us render elements so that we can test the output to make sure that it matches our expectations. Let's go ahead and create an app test file, and the App.test.js file doesn't have any tests in it, that's why it's looking like that. Let's just simplify this a lot. We're not loading data anymore, instead, we're just going to return something. Inside of our div, we want to return an h1 that says, "Hello React Testing Library." Okay. So our function is returning what we expect, but we need to write a test to make sure that that's true. So what we're trying to really test is that this h1 is there. So in our test file, we're going to import { render } from "@testing-library/react". Then we're going to write a test using this test function. We will give this a name. So we'll say renders an h1. We'll pass it a callback function. And we're going to use this syntax here. We're going to say, getByText. We're going to de-structure this from calling render with the App. So what this is called is a query. With React Testing Library, a query is going to reach out to some sort of element and return some information about it. So, just like we had expect with Jest, this is how we're going to do this with React Testing Library. So, what I can do now is I can say find the h1, and we're going to use this getByText function, and we're going to try to find whatever is in that h1. So remember we said, this should return hello testing library, Hello React Testing Library, I should say. Then if we go back here, I'm going to test that's what that returns. We're going to pass it in these slashes 'cause it's looking for these values as a regular expression. Now we can use expect, now that this selection has taken place, and we're going to say, toHaveTextContent("Hello React Testing Library"). So now this is telling us that React is not defined, so we can import React from "react". And now our tests will rerun, and it's telling us the App is not defined. So, that just means that we need to import the App. So this is something that I really like about working with testing is that if we've made a mistake, if there's something missing, this screen is going to tell us exactly what to do. So we can work together with the testing library to figure out what's next, and then we can write tests to make sure that our components are rendering what we hope they will.

## 6.4 Testing Hooks with React testing library
* Transcripts
- [Instructor] Now that we know how to run some tests on components, I want to revisit a component that we built before. So if you recall, we built a checkbox component and the checkbox component used a function called, use reducer, a hook called user reducer to handle that check. So we're going to create two files. One's called checkbox JS. One is called checkbox test dot JS. We need to give our test a name. So we'll say, test selecting checkbox. Then we will create this callback function. And then here will be our test in a second. Now, the next thing I need to do is I need to select that checkbox elements. So remember, we can use a query as part of react testing library and this is going to grab that value. So we're going to use another one of these selectors and another one of these queries called get by label text. T-E-X-T and we will set that equal to the render function. And we're going to pass it, the name of the component, which in this case is going to be called checkbox. So then we're going to say, const checkbox equals get by label text. And the label text should be not checked. So now we have our checkbox selected. All we need to do now is fire the event. So in other words, we need to handle clicking on the checkbox to make sure that the value changes. We'll call fire event.click and then we'll pass it, the checkbox so that we can click on that element. Then we're going to expect checkbox dot checked to equal true. Okay, so a couple of things going on here. We need to import react. We need to import render from at testing library slash react. And we also need to import... Checkbox from checkbox. Okay, so now we don't have this rendering at all because we don't have the element created. So let's go ahead and create our checkbox. This'll look much like it did before. Let's first, import react from react. We will export function checkbox. And here we'll use, use reducer. Checked and toggle. We'll pass in our reducer. The function that's going to take in the old state and return a new state. And then, we'll pass in initial value. So that'll be false. Then we're going to return a fragment. This fragment will have a label. And the label will either say checked or not checked. And then, I'll create my input. Type is checkbox. Value is checked... On change is toggle. So this is saying, found a label with text of not checked. However, no form control was found. So we need to make sure that there's a form control added to this. So we can say, label for checkbox. And then, it's going to tell us that this is an invalid DOM property for. That's okay, we can call it HTML for. And then we'll say ID, checkbox. Now it's telling us that fire event is not defined, that's okay. Let's go ahead and pull that from the library. And there we go, our test has passed. So just to recap, we've pulled render and fire event from testing library react. We have selected our checkbox. We have selected it because it says not checked when our app first renders. Then we fire an event on the checkbox. In other words, we click it and then we expect the value of checkbox.check to be true. So we've written a test. We wrote some code to make that test pass. And then we did a little bit of configuring to ensure that everything was working nicely together, but now we have a nice little test to go along with our checkbox.

## Questions
Question 1 of 7
When the following statement is added to the App.test.js file, which types of tests will you be able to perform with the React Testing Library?
 
import { render } from "@testing-library/react";
You are correct!
assertion tests; to determine whether specific web content is displayed on a webpage
Feedback

The `render` component from the React Testing Library allows you to assert whether specific words, phrases, or html tags were rendered.

Question 2 of 7
You want to create a test that determines what happens after a checkbox has been clicked. What is the correct statement to include in your test function?
You are correct!
fireEvent.click(checkbox)
Feedback

The `fireEvent.click` method will simulate an end user clicking a checkbox on a webpage form. From there, you can write assertion tests.

Question 3 of 7
What does the fireEvent from the React Testing Library in the following test code do?
 
test("Selecting checkbox", () => {
     const { getByLabelText } = render(<Checkbox />);
     const checkbox = getByLabeltext(/not checked/);
     fireEvent.click(checkbox);
     expect(checkbox.checked).toequal(true);
});
You are correct!
dispatches the click event to ensure the value changes

Question 4 of 7
The following code describes which type of test?
 
expect(timesTwo(4)).toBe(8);
You are correct!
an assertion test
Feedback

An assertion test returns a pass or fail; it will return a pass when a function's output returns an expected value.

Question 5 of 7
You want to return a header that reads, "Hello React Testing Library." If the React testing library, React, and App have already been imported, how should your test be displayed?
You are correct!
test("renders an h1", () => {
     const { getByText } = render(<App />);
     const h1 = getByText(/Hello React Testing Library/);
     expect(h1).toHaveTextContent(
          "Hello React Testing Library"
     );
});

Question 6 of 7
When Create React App is installed, it comes with a testing platform. Which file is installed by default to perform tests on?
You are correct!
App.test.js
Feedback

App.test.js is created by default when Create React App is installed, and any file ending in `.test.js` can be used for testing.

Question 7 of 7
You have written a test using the function.test.js file with syntax that comes from the Jest library. Which code block will run and test the function to pass the test?
 
import { timesTwo } from "./functions";

test("Multiplies by two", () => {
     expect(timesTwo(4)).toBe(8);
});
You are correct!
export function timesTwo(a) {
     return a * 2;
}

# 7.0 React Router
## 7.1 Installing REact Router 6
* Trancripts
- [Moderator] When we create a React application we're creating, what's called the single page app. A single page application just think of it as instead of creating different files for different pages. We're going to create a single page and JavaScript is going to load information and change the UI. So something that becomes kind of tricky when we're dealing with an SPA is that we need to handle routing somehow. So how am I going to get from page to page? So, there's a tool out there that is really awesome to help us with this and it's called React Router. So we're going to set up the router in the next chapter and focus on all sorts of different features that you can use and incorporate in your own apps. Let's go ahead and run NPM install, React Router at next. React Router dom at next. So this is going to make sure that we install version six, which is the most recent version. While that's working over there, let's go ahead and move over to our project files. Now, in our project files, I want to create a new file called pages dot JS, and pages dot JS is going to be responsible for all of the pages that are part of our app. So, we're going to import React from React. Then we're going to export a bunch of different functions. So these are just going to be small components that are going to be displayed as I navigate around the site. So, here we'll return a div and an h1. And here it'll say company website. Now we can use this same function pretty much to create an about page. And we'll say about, then we'll do the same for events and for contact. Okay. So, what I'm going to want to have happen is I want these components to display when I go to certain routes in my website. So in the next video, I'm going to show you how to set up the router to make that work.

## 7.2 Configuring the router
* Transcripts
- [Instructor] Now that we have our different pages stubbed out we need to build the router. So the router is going to live in this index JS file. And this is where we're going to pass all of the information from the router to any nested components. So it's going to look like this. We're going to import, BrowserRouter as Router from react-router-dom. So the reason we use react-router-dom is because we're using the DOM, we're using a website, but they also have tools for native applications as well. The next thing we're going to do is we're going to wrap our app component in the router. And what this'll do is it'll give the app access to all the properties of the router. So the location, the history, things like that, all of that's going to to live in the router. So, now that we have this set up, we're going to go over to our app JS file and the app, now can get rid of useState and useEffect. And we're going to import a couple other things from the router. So we'll import Routes and Route from react-router-dom. Then we're going to import, home, about events and contact from our pages file. So now the app is going to be responsible for rendering these. So, we will create our div then inside of this routes component, we're going to create a route for each individual component. So the first one, the second, the third and the fourth. Now what properties will this route component have? Well, it's going to have a path. So our home component will be at just the /path and the element that we want to display there is going to be called home. The second path is about, and the element we want to display every time we go to /about, is about. Next we want events, the element we'll display is events. And then the last one is contact. There we go. So now we've defined all of the different routes and their paths right here in this file. So these routes are going to tell the router, which component to render whenever the location changes. So let's see how this looks. We're going to go back to our terminal and make sure that this is running by running npm start. This will open up our project on local host 3000, and it's telling us can't resolve history, that's okay. We can install that. So let's run npm install history. So this is a dependency of the react router that we need in order to make this work. All right. So, let's try running npm start again. And now at the /path, we have our home. If we go to about, we see about, events, contact. So let's see why we're not seeing any texts there, Oh I see it why. So it says elements, you must have been yelling at your screen when I did that. So now if we go to contact and we go to events that should be working, cool. So we've set up our routes, we have set up the router in the index file. In the next video we'll look at how we can add links to link back and forth between pages.

## 7.3 Incorporating the link component
* Transcritps
- [Instructor] At this point, we can run the app, and physically change the links to navigate back and forth between pages. But we need to be a little nicer to our users than that, right? We want to give them links so that they can navigate around the site. What we can do, is we can go to our homepage, which is in that pages.js file. And we're going to adjust it using a Link component. So from react-router-dom, we're going to pull this Link component. And we're going to place a Nav component here, and inside of the Nav, we will add a few different links. So the Link component has a property called to, which links to a particular page. And then, we're going to close this. So we'll say Link, and then we'll give it a name, About. So then create all of the links we need here. We'll have one for Events, and we'll have one for Contact. Okay, so back to our code, we should be able to on the homepage, see About, Events, and Contact. That's pretty cool, those links are going to handle the transitions between the different pages. Another nice thing that we can add is let's create a component in our pages. And this is going to be called, export function. We'll call it, Whoops404. And then, this will be another page that will be displayed any time we're on a page that currently doesn't match one of our routes. So here, we'll say, This page does not exist. So, we can add this to our route config in our App.js file. And this time, instead of displaying the Contact, we'll say, Whoops404, and we're going to replace the path, with a star or an asterisk. So, that's going to, if I go to /pancakes or whatever, it's going to let me know that I'm not on a page that exists. Let's also make sure that we import this, and now we can check this out. I'll go to /react, and it'll tell me this page does not exist. So that's how we create kind of like a wild card for that, but I can make this one step, even better. So back to pages, we're going to use from react-router-dom, a hook called useLocation. So useLocation, is a function that's going to return our current location. And let me show you what I mean by that. So we'll call useLocation, we'll set it equal to location. Now, let's console log location, and we should be able to see an object here, with a few different keys. So we have hash, key, pathname. What I think I want here is pathname. So now, instead of saying, This page does not exist, I can say, Resource not found at location.pathname. There we go. So we can tap into that location object using the useLocation hook. So this is how we use the useLocation hook. In the next video, I'll show you some more of these.

## 7.4 Nesting links wiuth React Router 6
* Transcripts
- [Speaker] Let's make some adjustments to our pages file so that we can create nested components. So here near our About component, we're going to create a couple more. The first one is going to be called, Services (keyboard clanking) and this one, will just return a div and we'll give it an h2 that says, Our Services. Let's copy this and paste it again. And this time we're going to create one for CompanyHistory. (keyboard clanking) And then finally, we'll create one for Location. So, Our Location. Okay. So back to the App js, let's make sure that we import Services, CompanyHistory and Location. And then we're going to use our... and then we're going to use our router config to make this work. Now all of this is going to be nested inside of the About section. So we need to take that self-closing tag and add a closing tag. And then inside of this, we're going to put our routes. So these are going to look exactly the same, pretty much, but we'll just add a self-closing tag. This time, we're going to call this, services and it should display Services. We'll copy and paste that this time for history (keyboard clanking) and finally, for location. Okay, so we've nested this, we've created a parent component here and then we've nested all of these routes inside. So far so good. The next step, is we want to make sure that this is rendering appropriately. So, the way that we're going to use the app to display these nested components, is we're going to go to the pages file we'll find our About component and the About component next to the h1. We're going to use this component called Outlet. So, Outlet is just going to be responsible for displaying whatever is in these nested components. So we can pull this from react-router-dom. And now, if we go to our page, our About page and then we go to services, this will display Our services, our Company History and Our Location. So the About is kind of this parent route then we nest other information underneath that for this nested data. So like company information, location information, it's all really part of that about section, but we're going to list it on the same page as a subsection.

## Questions

Question 1 of 6
Why would you use nested links?
You are correct!
to create additional pages that are descendants of a particular parent page
Feedback

With nested links, you can create a parent page and additional pages that fall under the same folder structure.

Question 2 of 6
Which element from the React Router Library is responsible for displaying the links inside nested components?
You are correct!
Outlet

Question 3 of 6
What does the Link component from the React Router tool allow you to do?
You are correct!
It creates hyperlinks that allow users to navigate to other pages on the website.
Feedback

Once you have set up the routes for each page of your website, you can use the `Link` component to create clickable webpage links.

Question 4 of 6
Which code snippet shows the correct use of the React Router tool?
You are correct!
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
     </div>); }
Feedback

The `Routes` and `Route` components of the React Router tool allow multiple pages to be configured, with each having a separate path.

Question 5 of 6
Why incorporate the link component in your app for users?
You are correct!
to allow users to navigate around the site

Question 6 of 6
Why would you wrap your app component in the router?
You are correct!
to give the app access to all the properties of the router

# Learning ReactJS
Deploying a React app
Selecting transcript lines in this section will navigate to timestamp in the video
- [Instructor] There are many different ways to deploy a React application, and many different service providers that can help you with hosting. In this video I'll show you how to deploy a React application using Netlify. The process of deploying an app is made simpler for us simply by using Create React App. If we take a look at the packaged JSON file, there's a script here called build. If I run in our terminal npm run build, this is going to create a production build for this project. So in other words, it's going to take all of my files. It's going to minify them, make them smaller. It's going to bundle them up into a package that you can serve on one of these hosting providers. So as soon as I run that we see the build folder has been added to our project. Now the next thing you'd ask us to do is to serve it up, serve it with a static server. So if you don't have the serve package installed, you can run npm install -g, for global, serve. And then serve is going to give you a static server that you can use on your computer. With that installed, I can type the command serve -s build, so that's going to serve the build folder up on localhost:5000. So we're going to replace 3000 with 5000, and now we should see our built app running. You'll notice, too, in the toolbar, since you have the React developer tools installed, that this is currently showing that production build is working. All right, so the next thing I want to do is go to Netlify. So you can go to netlify.com, and then you can click on Log in. So if you haven't signed up before, you can sign up, or you can just click Log in, and then login with GitHub, GitLab, or your own email. And then as soon as you do this, you're going to see any projects that you've already started with Netlify, and what's really cool here is that you don't even have to set up your project using Git. You can just simply drag that build folder into that little window here. So now I'm going to take a look at my exercise files, and inside of my exercise files we're going to dig out our build folder from chapter five, lesson four. But if we go to the start folder and then hello-react, we should see that build folder here. Simply drag that into this area at the bottom with the dashed border, and then Netlify is going to deploy that for us. And that happened ridiculously fast, so as soon as we deploy it it'll give you a link that you can use, so I can just go ahead and click on that link, open it up in a new tab, and then we see in the new tab that our app is running. Our app is deployed. We've taken that build folder that we worked so hard on on our own computer, and we deployed it and published it to the web. You can play around with all of the Netlify features, including setting up a custom domain, setting up an HTTPS cert, but this will get you started so that you can start to publish your own applications. So this is how to deploy an app using Netlify, but you'll take a similar approach if you want to use another provider like Google Cloud or Heroku or Azure. So now you're ready, and you can start deploying and sharing you own React applications.