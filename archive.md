---
layout: page
title: Blog and News Archive
---

This is the archive for the blog posts.

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