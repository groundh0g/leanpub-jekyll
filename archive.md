---
layout: page
title: Blog and News Archive
---

{% include read-config.liquid %}

This is the archive for the blog posts.

{% for post in site.posts %}

<hr/>

## {{ post.title }} <span style='font-size:0.5em;'>{{ post.date | date: "%B %d, %Y" }}</span>
  
{{ post.excerpt }}

[View Post &raquo;]({{ post.url | relative_url }})

{% endfor %}


<!-- --------------- -->
<!-- Edit the `metadata.copyright` value in the `_jekyllfaces/config.md` file to suit your needs. -->
<!-- --------------- -->

<hr/>
{{ config.metadata.copyright | markdownify }}
