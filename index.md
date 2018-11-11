---
page: page
title: Home
---

Welcome to the website for my book-in-progress. The most recent blog posts are listed below. To see a list of all blog posts, please see [The Archive](archive.html).

<div class="parallax-window" style="min-height:200px;" data-parallax="scroll" data-image-src='{{ "/assets/images/book-single-scroll.jpg" | relative_url }}'></div><br/>

<hr/>

{% for post in site.posts limit:5 %}

## {{ post.title }} <span style='font-size:0.5em;'>{{ post.date | date: "%B %d, %Y" }}</span>
  
{{ post.excerpt }}

[View Post &raquo;]({{ post.url | relative_url }})

<hr/>

{% endfor %}


<!-- --------------- -->
<!-- Edit the `manuscript/site-copyright.md` file to suit your needs -->
<!-- --------------- -->

{% include_relative book-copyright.md %}

<script src='{{ "/assets/script/3rd-party/parallax.js" | relative_url }}'></script>