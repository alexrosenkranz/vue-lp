// create variable that will hold onto information about Vue Instance controlling element with an id of #app
const app = new Vue({
  // select element from HTML
  el: "#app",
  // bind content/data to associated HTML template tags (denoted by {{ }} syntax)
  data: {
    headline: "✌️ Headline content",
    subtitle: "Subtitle content",
    body: "skateboard Brooklyn Wes Anderson Helvetica sriracha art party tofu pork belly pickled 8-bit fixie Banksy freegan irony Marfa Neutra quinoa paleo post-ironic brunch fap Portland artisan gluten-free American Apparel bicycle rights street art letterpress butcher jean shorts literally pop-up wayfarers",
    link: {
      // this gets bound to the v-bind:href attribute in the <a> tag
      url: "https://vuejs.org",
      // this gets bound to the <a> tag's content
      text: "Visit Vue's website!"
    }
  }
});

