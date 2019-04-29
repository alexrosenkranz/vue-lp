# Front-end Frameworks: An Introduction to Vue.js

> The following lesson plan is assuming students have NOT learned React and this is their first introduction to a true front-end framework. It also assumes students HAVE gone through the Handlebars/templating unit, but mostly for the `{{ }}` familiarity, and that our current heavy usage of jQuery is in use over vanilla JS for DOM manipulation.

## Class Objectives

- Students will be formally introduced to the concept of front-end frameworks, what problems they help developers with, and why they're so popular in modern web development.
- Students will understand how to incorporate Vue into an application.
- Students will learn Vue's special `v-` "directive" attribute syntax to make their UI pieces "reactive" to any change in associated data, known as "state".
- Students will learn about the concept of building components so pieces of the UI can be reused.
- NEXT CLASS → Students will be introduced to the Vue CLI tool to help scaffold out more modular Vue applications that help with organization and structure.

## Instructor Notes

- Today's class is all about getting the students to understand that while how they've been building their applications to this point isn't wrong (we obviously made it this far without front-end frameworks), more data-rich applications are beginning to require a more organized and performant way of managing their client-side code.
- This will involve giving a very brief overview of a developer's relationship with the DOM and how asking the browser to be so heavily involved in managing our data can slow things up overtime in both performance and development time in general.
- Let the class know that today we will be introducing the concept of how Vue works with its special `v-` syntax and how we can build HTML templates that are managed by utilizing a special constructor in the JavaScript code.
- Also let them know this won't be the main way they end up building out Vue applications and we'll get to that in the next class, but it's important to see how simple it can be to integrate its code into an already existing application so they aren't as intimidated by the unfamiliarity of it.
- Next class will be about starting from scratch using the CLI, but today will be more about syntax than application structure.

## [Vue Demo Slideshow](https://docs.google.com/presentation/d/17TIetDda1SFeQFZ71xoaWL-otdjTvuQljKX4ZaFKuIg/edit?usp=sharing)

---

---

## 1. Welcome Class and Start Slideshow (Why front-end Frameworks? - How did we get here?) - 3 Minutes

- Use the slides to briefly explain the history of our relationship with the Browser/DOM. We used to be incredibly limited as to how we made pages react to any type of change in data or UI because of technical limitations.
- When browsers "grew up" and matured they gave us a lot more control and power, letting us create data-shifting applications that didn't require us reloading the page or unnecessarily communicating with our backend servers to get new information in front of our users.
- Remind students about how we have used HTML5 `data-` attributes and jQuery's `.attr()` and `.data()` to package up an HTML element's related data with it in the DOM and then we bind event listeners to certain HTML elements to retrieve that data back into our JavaScript code to manipulate it and reprint information to the page as a result.
- Use this as a moment to ask the class the following question just to remind them: **Who Manages the DOM?**
- **ANSWER: The Browser**

## 2. Instructor: Slideshow (More power = more responsibility slides) - 4 Minutes

- Use these slides to explain how while we've been able to cut communication with our backend servers down significantly because of this, it also means that our front-end codebase is effectively separated into two loosely-coupled halves where the Browser/DOM maintain the data and our JavaScript files maintain the functionality used to SET/GET that data from the browser (`document.methodName` or `$().methodName()`)
- Explain that this isn't a "terrible" way of doing things, students may feel like they've been lied to if we tell them this is a totally bad way of writing applications considering they've been doing it this way throughout the entirety of the course.
- However, also explain that even though this works it is also still asking A LOT of the browser, as it is "dumb" when it comes to knowing exactly what data is being interfaced with and has to peek in at everything on the DOM even though only a little part could be getting changed. (If you're comfortable with this concept, briefly describe how the browser "reflows" & "repaints" when things change)
- This leads to performance issues for the browser and a lot more code for the developer to manage when applications scale up. Remind students of how many moving parts there are on facebook.com's main "feed".

## 3. Instructor: Slideshow (Solution & Frameworks slides) -  3 Minutes

- Explain the idea of a developer being able to tightly package up related data needed for specific HTML tags but keeping all of that data in the JavaScript code itself rather than making the DOM hold onto it.
- Just like jQuery is a library built to help support the developer with day-to-day DOM manipulation, other JavaScript packages have been released over the past few years to support developers in a tighter way. These are called **frameworks.**
  - Briefly explain that frameworks differentiate from libraries in that a library is more of a tool that can be employed wherever and how it is used is totally up to the developer, whereas frameworks may offer similar sets of tools but how they are used are dictated by the framework's rules and not the developers.
  - This means some "control" is taken away from the developer, but it is actually a good thing in most cases because it lets us focus on what we want to build and not worry about as many of the `what-if's` that often occur as the framework has already thought about it for us.
- Explain how we're currently riding out the second major wave of front-end frameworks:
  - 1st wave: Ember, AngularJS (not the Angular that we know today), KnockoutJS
  - 2nd wave: Angular, React, Vue

## 4. Instructor: Slideshow (Why Vue?) - 3 Minutes

- Explain that Vue is among one of the more recent front-end frameworks to enter the scene (it was released in 2014) but has gained a lot of steam and popularity in the development community, having over 130k stars on GitHub.
- It is described as a "progressive framework", meaning you can start adding pieces of it into your existing front-end codebase one by one and not disrupt your overall application. This is unlike other frameworks which recommend a total adoption for it work properly.
- Since it came a little later than other frameworks and was built by a former Google employee (Google owns Angular), it is sometimes considered a "greatest-hits" collection of its peers as it has borrowed a lot of the great ideas they brought to the table and tried to simplify them into a smaller ecosystem (~24kb, which is small)

## 5: Instructor: Slideshow (Getting Up and Running) - 1 Minute

- Navigate through the next slide and explain how we can get up and running with Vue in two different ways:
  - Including Vue's `<script>` tag in your HTML file and using their special templating syntax (think Handlebars)
  - Using Vue's CLI tool to build out and scaffold a full application with a lot of tooling bells and whistles, which may be overkill for people just starting out with Vue
- For today, we'll be focusing on the first option. Explain that in the next class and as we get further into Vue development, the second option will ultimately be a better choice. But this first option is great for getting newcomers introduced to Vue's syntax, especially for those coming from a jQuery-reliant style of coding. And the best part is that the transition from the first option to the second option doesn't involve much more than understanding how it is used to scale out and modularize bigger applications.

## 6. Instructor: Create a "hello world" app - 12 Minutes

- Let the students know you'll now demonstrate how to create a simple Vue application by visiting their documentation and seeing how they recommend you getting started.
- NOTE: A major sticking point with students is they tend to not understand that the instructors have to learn this stuff just like they do, so make sure to show some "humility" in this process and really walk through the first part of Vue's documentation ([https://vuejs.org/v2/guide/](https://vuejs.org/v2/guide/)) to show them how you can navigate a new topic without it being overwhelming.
- Try and follow this process:
  - Create HTML page and include Vue's script tag

  ```html
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
  ```

  - In the HTML, include something along the lines of:

  ```html
    <div id="app">
      <h1> {{ title }} </h1>
      <p> {{ message }} </p>
    </div>
  ```

  - Then either write the script inline with the HTML or create a separate `.js` file and include:

  ```javascript
    const app = new Vue({
      el: "#app",
      data: {
        title: "Welcome to Vue!",
        message: "This data is in the <p> tag!"
      }
    });
  ```

  - Then open the HTML page in the browser and show the result.

- Now navigate back to your two files in your text editor and walk through how you achieved this end result:
  - Point out how we are using handlebars-esque `{{ }}` templating syntax in a regular HTML file to denote where content will be going.
  - In the JavaScript code, point out the use of the `new Vue()` constructor create a new `Vue Instance` ([https://vuejs.org/v2/guide/instance.html](https://vuejs.org/v2/guide/instance.html))
  - Then walk through the two main properties we provide the constructor (`el` and `data`) and ask the class what they *think* each one is up to and how it is being utilized in this example.
- Let them know that using Vue *can* be as simple as that, but what would be the point?
- Demonstrate how content can be updated by opening up the console in Chrome and typing in `app.title = "New message here"` (make sure the console isn't blocking the page when you hit `enter` so they can see the HTML update in real time.
- Don't spend too much time explaining what is actually happening here as we will touch upon it in a few minutes, but before that they should take it for a spin...

## 7. Students: Build first Vue application - 12 Minutes

- It's time to let the class build their first page using Vue:

### Instructions

**Create HTML**

- Create an HTML file called "my-first-vue.html" in `02-Stu_FirstVue` and scaffold out a simple HTML file (remember you can use  `!` + tab/enter to automatically fill out the page with boilerplate tags.
- Add a `div` to the page with an id of `app`
- Inside of that newly created `div`:
  - add a `<h1>` tag with `{{ headline }}` inside of it
  - add a  `<h3>` tag with `{{ subtitle }}` inside of it
  - add a `<p>` tag with `{{ body }}` inside of it

**Create JavaScript**

- Navigate to Vue's "Getting Started" section ([https://vuejs.org/v2/guide/#Getting-Started](https://vuejs.org/v2/guide/#Getting-Started)) and copy/paste their `<script>` tag inside of your HTML file, then create a separate `.js` file that you include in your HTML
- In this file create a new Vue Instance using `new Vue()` constructor and save it to a variable called `app`
  - Make sure you include both the `el` and `data` properties in the constructor to bind this new Vue Instance to the element with an id of `app` and bind the template tags in the HTML to associated data properties called `headline`, `subtitle`, and `body` (make sure provide text values to all three properties)
- Save the file and open up your HTML document in the browser.
- If you see the content you provided in the `data` object on the page in their associated template tag areas, you've now written your first Vue!

### Bonus

- Look into Vue's `v-bind` syntax to add an `<a>` where the `href` property is provided in the Vue Instance's `data` object. ([https://www.vuemastery.com/courses/intro-to-vue-js/attribute-binding/](https://www.vuemastery.com/courses/intro-to-vue-js/attribute-binding/))

## 8. Everyone: Review Activity - 5 Minutes

- Open up the solution provided in the `Solved` folder and walk class through each commented line to explain how each one is working between the HTML and JS files.
- Let them know that what we are doing with the `{{ }}` syntax is that we are telling certain areas of our HTML content to be "reactive" to any changes in the JavaScript. A simpler way of thinking about it is that we are giving that particular Vue Instance we created total control over that data and we can go through that Vue Instance to make any changes to the associated HTML content.
- At this point, you may have said the term `Vue Instance` a few times, so make sure they understand what that means in simpler terms:
  - It is basically Vue's way of packaging up an HTML element with its associated content, data, and styles into a JavaScript object. This way we can keep all of our related information for that HTML element together.
- Go over the bonus section and explain to the class how by default, Vue doesn't want to overstep its boundaries by taking total control over each aspect of the associated HTML elements. This means that when we are building our HTML templates, we can decide what is static/unchanging or what can be maintained and updated by our Vue Instance:
  - Static/Unchanging syntax: nothing different from regular HTML (class, id, href, etc) can all be the same if they won't ever be used or changed by the JavaScript code
  - Dynamic/Changing syntax: Vue has a special syntax denoted by `v-` to bind or connect HTML attributes to its associated Vue Instance
  - More on this in the next slides and activity.

## 9. Instructor: Slideshow (`v-` Directives) - 5 Minutes

- Reiterate how you employed the `v-` syntax in the previous activity's bonus to make a specific part of the HTML tag more functional or dynamic with its associated JavaScript data.
- Let them know we'll be touching upon the most important ones today, one-by-one
- At first glance one might think this is an interesting design choice to make the syntax have the `v-`, but it makes it easier to glance at one's HTML structure and notice what's controlled by its Vue counterpart fairly quick.

## 10. Partners: Add Comments to `v-` Examples - 18 Minutes

### Instructions

- Working with those around you, go through each file in `03-Stu_Directives/Unsolved` one-by-one and answer what each line with a `//` over it is doing.
- With each file, make sure you read up on that `Directive` in Vue's documentation (links are provided in each file)
- You should go through these in this order:
  1. v-bind.html
  2. v-if.html
  3. v-for.html
  4. v-on.html
- Don't rush through these, really take the time and ensure that you and those around you understand what is happening in each example. Even go as far as to edit the code and update its logic to be something you create instead.

## 11. Everyone: Review Add Comments to `v-` Examples - 10 Minutes

- Open up and walk through each file in the `Unsolved` folder.
- Call on students/groups at random to help with filling in the blanks for each section.
- Make sure to open and reference the documentation associated with each file to ensure students know where they can find information about this syntax and functionality.
- The `v-for="item of items` syntax for the may confuse some students as `for (item of items)` is a somewhat newer piece of JavaScript, so if that's tripping anyone up make sure to provide a little more detail into that and let them know it is really nothing more than their version of a `for loop`... kind of like how Handlebars has its `{{#each}}` syntax.
- These for concepts are incredibly important to understanding how to work with Vue and they will be used A LOT, but there is another important piece to cover... handling form element inputs