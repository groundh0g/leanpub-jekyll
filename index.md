---
page: page
title: Home
---

{% include read-config.liquid %}

Welcome to the website for my book-in-progress. The most recent blog posts are listed below. To see a list of all blog posts, please see [The Archive](archive.html).

<div class="parallax-window" style="min-height:200px;" data-parallax="scroll" data-image-src='{{ "/assets/images/book-single-scroll.jpg" | relative_url }}'></div><br/>

{% for post in site.posts limit:5 %}

<hr/>

## {{ post.title }} <span style='font-size:0.5em; font-weight:normal;'>{{ post.date | date: "%B %d, %Y" }}</span>
  
{{ post.excerpt }}

[View Post &raquo;]({{ post.url | relative_url }})

{% endfor %}

{% if config.comments.provider %}
<hr/>
{% include comments.liquid %}
{% endif %}

<!-- --------------- -->
<!-- Edit the `metadata.copyright` value in the `_jekyllfaces/config.md` file to suit your needs. -->
<!-- --------------- -->

<hr/>
{{ config.metadata.copyright | markdownify }}

<script src='{{ "/assets/script/3rd-party/parallax.js" | relative_url }}'></script>