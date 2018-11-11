---
layout: post
title:  "Welcome to Leanpub-Jekyll!"
date:   2018-11-11 13:05:31 -0400
categories: leanpub-jekyll update
---

You’ll find this blog post in your `_posts` directory, in a file named, `2018-11-11-welcome-to-leanpub-jekyll.md`. Edit the file and rebuild the site to see your changes. If you don't know how to rebuild the site, keep reading.

## About Leanpub-Jekyll

I'm a huge fan of [Leanpub](https://leanpub.com/) for free, easy-to-use self publishing. You can find [one of my works here](https://leanpub.com/fauxcabulary). I'm also a huge fan of [Jekyll](https://jekyllrb.com/) for free, easy-to-use blogging. The website for my book is driven by Jekyll and [you can view it here](http://fauxcabulary.org/). Both are based on [Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet). So all your edits are made in plain text files, without any special technical knowledge required. You just focus on your content.

Leanpub makes publishing easy. It's an automated system that takes your raw text files and generates DRM-free eBooks in several formats. If you want to take the next step, your PDF eBook can be used for publishing a print copy of your work at services like [Lulu](https://www.lulu.com/). You can find the [print copy of the work I referenced earlier here](http://www.lulu.com/shop/joseph-hall/fauxcabulary/paperback/product-22179468.html). 

## Running Jekyll Locally

As I mentioned, Yyou’ll find this post in your `_posts` directory. You can edit it and re-build the site to see your changes. You can rebuild the site in many different ways, but the most common way is to run `jekyll serve`, which launches a web server and auto-regenerates your site when a file is updated, [as described here](https://jekyllrb.com/docs/usage/).

If you don't already have Jekyll installed, [see these pages for help](https://jekyllrb.com/docs/installation/). The [Quickstart guide](https://jekyllrb.com/docs/) is also helpful for newcomers.

To add a new blog post, simply add a new text file in the `_posts` directory that follows the naming convention `YYYY-MM-DD-name-of-post.md` and includes the necessary front matter. Take a look at the source for this post to get an idea about how it works.

## The Best of Both Worlds

Leanpub stores its files in a folder named `manuscript`. The Jekyll bits I've created are a wrapper for that folder which add your book-in-progress to the blog for the same. In addition to the blog component, the following features have been added to [leanpub-jekyll](https://github.com/groundh0g/leanpub-jekyll):

* An author page. [view here]({{ "/book-author.html" | relative_url }})
* A synopsis page. [view here]({{ "/book-synopsis.html" | relative_url }})
* The book as a single-page manuscript. [view here]({{ "/book-manuscript.html" | relative_url }})
* Statistics on the progress of the book. [view here]({{ "/book-statistics.html" | relative_url }})

## Support

If you find an issue with this project, please feel free to [open an issue here](https://github.com/groundh0g/leanpub-jekyll/issues). This is currently a [one-person team](https://github.com/groundh0g), but I'll try to address issues as quickly as I can.
