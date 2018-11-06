# leanpub-jekyll

A simple way to showcase an open source book work-in-progress.

![Logo](https://github.com/groundh0g/leanpub-jekyll/blob/master/leanpub-jekyll.png?raw=true)

* Repository: [https://github.com/groundh0g/leanpub-jekyll](https://github.com/groundh0g/leanpub-jekyll)
* Website: [http://groundh0g.github.io/leanpub-jekyll/](http://groundh0g.github.io/leanpub-jekyll/)

## Structure

When you first retrieve the [leanpub-jekyll](https://github.com/groundh0g/leanpub-jekyll) project files, there will already be a `manuscript` folder with four chapters. The chapters contain examples of markdown and they showcase the structure of a Leanpub book. This text was written by [Len Epp](https://leanpub.com/u/lenepp), and is freely available from the Leanpub website [here](https://leanpub.com/sample-leanpub-markdown-book).

The [Jekyll](https://jekyllrb.com/) plumbing has been added to wrap the `manuscript` folder that Leanpub uses to publish your book. Along with some custom scripts, this allows your raw book text to be housed in a blog-enabled website, hosted by [GitHub Pages](https://pages.github.com/).

## Techie Tweaks

I made the following changes within the `manuscript` folder:

* I added a `manuscript/index.md` file to generate the page landing page for your site. This file will be ignored by Leanpub since it's not referenced by the `Book.txt` file.
* I added a `manuscript/site-manuscript.md` file to stitch the book's chapters together into a single web page. This file will be ignored by Leanpub since it's not referenced by the `Book.txt` file.
* I renamed the chapter files from `*.txt` to `*.md` and updated the references to same within the `Book.txt` file.
* I added YAML headers to each chapter. These help the site display separate chapters as separate web pages, and that header should be safely ignored by the Leanpub publishing process.
* I added a fourth chapter with "lorem ipsum" text as a placeholder to help showcase the statistics page (at `manuscript/site-statistics.md`). The content of the chapter files doesn't matter. You'll replace all four chapters with your own text, and add new chapters after that.
* I created a bogus, completely unrelated, book cover to show alongside the synopsis (in `manuscript/site-synopsis.md`). Consider it a placeholder for you to swap out for your own cover.

## Blogging

This is a 

## Configuration - Jekyll

Jekyll is typically configured by entries in the `_config.yml` file. This project moves almost all of that configuration data to the `_jekyllfaces\config.md` file. There's one exception, though. It was cleaner to leave the `baseurl` setting (the subpath) in the `_config.yml` file. That's because Jekyll has filters that help with formatting page URLs that rely on that setting.

~~~
baseurl: "/leanpub-jekyll" # the subpath of your site, e.g. /blog
~~~

## Configuration - leanpub-jekyll

Blah.

![Themes](https://github.com/groundh0g/leanpub-jekyll/blob/master/themes.png?raw=true)
