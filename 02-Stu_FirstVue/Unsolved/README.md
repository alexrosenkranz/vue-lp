# Instructions

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