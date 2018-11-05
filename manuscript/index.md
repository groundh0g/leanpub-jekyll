---
page: page
title: The Book
---

Welcome to the status page for my book. Scroll down to see a summary of the plot and to catch up on the latest progress being made on this project.

<div class="parallax-window" style="min-height:200px;" data-parallax="scroll" data-image-src='{{ page.dir | append: "images/book-single-scroll.jpg" | relative_url }}'></div><br/>

{% include_relative fluff.md %}

<hr/>

{% capture blurb %}{% include_relative synopsis.md %}{% endcapture %}

<div class="row">
  <div class="col-md-4">
    <img style="width:100%;" src='{{ page.dir | append: "images/cover.png" | relative_url }}' alt='The book cover image.' />
  </div>
  <div class="col-md-8">
    {{ blurb | markdownify }}
  </div>
</div>

<hr/>

# Statistics

If you're the kind of person that likes statistics, here's the current status of the project. This list is automatically updated whenever I make an edit to the book's content.

Some more text here ...

{% include_relative statistics.md %}

<hr/>


<!-- ## The License -->

{% include_relative copyright.md %}

<script src='{{ "/assets/script/3rd-party/parallax.js" | relative_url }}'></script>