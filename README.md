# leanpub-jekyll

A simple way to showcase an open source book work-in-progress.

![Logo](https://github.com/groundh0g/leanpub-jekyll/blob/gh-pages/leanpub-jekyll.png?raw=true)

* Repository: [https://github.com/groundh0g/leanpub-jekyll](https://github.com/groundh0g/leanpub-jekyll)
* Website: [http://groundh0g.github.io/leanpub-jekyll/](http://groundh0g.github.io/leanpub-jekyll/)

## Structure

When you first retrieve the [leanpub-jekyll](https://github.com/groundh0g/leanpub-jekyll) project files, there will already be a `manuscript` folder with four chapters. The chapters contain examples of markdown and they showcase the structure of a Leanpub book. This text was written by [Len Epp](https://leanpub.com/u/lenepp), and is freely available from the Leanpub website [here](https://leanpub.com/sample-leanpub-markdown-book).

The [Jekyll](https://jekyllrb.com/) plumbing has been added to wrap the `manuscript` folder that Leanpub uses to publish your book. Along with some custom scripts, this allows your raw book text to be housed in a blog-enabled website, hosted by [GitHub Pages](https://pages.github.com/).

## Techie Tweaks

Leanpub-jekyll adds the following pages and features to your manuscript project in Github:

* The `/index.md` file to generates the landing page for your site.
* The `/book-manuscript.md` file to stitches the book's chapters together into a single web page.
* I renamed the chapter files from `*.txt` to `*.md` and updated the references to same within the `Book.txt` file.
* I added YAML headers to each chapter. These help the site display separate chapters as separate web pages (e.g. when navigating via search), and that header should be safely ignored by the Leanpub publishing process.
* I added a fourth chapter with "lorem ipsum" text as a placeholder to help showcase the statistics page (at `/book-statistics.md`). The content of the chapter files doesn't matter. You'll replace all four chapters with your own text, and add new chapters after that.
* I created a bogus, completely unrelated, book cover (at `/manuscript/images/cover.png`) to show alongside the synopsis (in `/book-synopsis.md`). Consider it a placeholder for you to swap out with your own cover.

## Blogging

This is a standard Jekyll site. Blog posts are created as separate files in the `_posts` folder. For more information on creating blog posts in Jekyll, see the [official documentation](https://jekyllrb.com/docs/posts/), or check out the example posts that come with this project.

## Configuration - Jekyll

Jekyll is typically configured by entries in the `_config.yml` file. This project moves almost all of that configuration data to the `_jekyllfaces/config.md` file. There are two exceptions, though. It was cleaner to leave the `baseurl` setting (the subpath) and `url` setting (the protocol and hostname) in the `_config.yml` file. That's because Jekyll has filters that help with formatting page URLs that rely on those settings.

~~~
baseurl: "/leanpub-jekyll" # the subpath of your site, e.g. /blog
url: "https://groundh0g.github.io" # the base hostname & protocol for your site, e.g. http://example.com
~~~

If your site isn't hosted at the root, you'll need to set the `baseurl` value accordingly.

## Configuration - leanpub-jekyll

Just about everything that you'll want to tweak on your site is located in the `_jekyllfaces/config.md` file.

> **NOTE:** If you've used Jekyll in the past, you might be wondering why I moved the settings. It's simple. Jekyll doesn't recognize edits to the `_config.yml` file until the server is restarted. Edits to the `_jekyllfaces/config.md` are reflected immediately.

### Themes

This project supports all of the free [Bootswatch](https://bootswatch.com/) themes, as well as the default [Bootstrap](http://getbootstrap.com/) theme.

![Themes](https://github.com/groundh0g/leanpub-jekyll/blob/gh-pages/themes.png?raw=true)

You can apply a theme by editing the `theme` value in the `_jekyllfaces/config.md` file. To use the default Bootstrap theme, pick `default`.

~~~
customize:
  theme: flatly       # one of: cerulean | cosmo | cyborg | darkly | default | flatly | journal | litera | 
                      #         lumen | lux | materia | minty | pulse | sandstone | simplex | sketchy | slate | 
                      #         solar | spacelab | superhero | united | yeti
~~~

### 404 Pages

I'm not a fan of the default Jekyll 404 page, so I created a few for you to pick from. 

![404 Pages](https://github.com/groundh0g/leanpub-jekyll/blob/gh-pages/404-pages.png?raw=true)

You can select one of the custom 404 pages by editing the `http404` value in the `_jekyllfaces/config.md` file. To use the default 404 page, pick `default`.

~~~
customize:
  http404: sticky     # one of: badge | default | dog | droids | glass | link | milk | monster | potty | shrug | 
                      #         sticky | tweet | zork
~~~

### Font Icons

This project supports all the font icons that you can search on [GlyphSearch.com](https://glyphsearch.com/). By default, the Font Awesome icons are enabled. Note that loading all fonts may make your site load more slowly.

~~~
fonticons:
  fontawesome: cdn   # one of: false | local | cdn
  foundation:  false # one of: false | local | cdn
  glyphicons:  false # one of: false | local
  icomoon:     false # one of: false | local | cdn
  ionicons:    false # one of: false | local | cdn
  material:    false # one of: false | local | cdn
  octicons:    false # one of: false | local | cdn
~~~

### Navbar Links

The links at the top of the page are created from the values under the `navbar` node in the `_jekyllfaces/config.md` file. Take a peek, make some tweaks, see what happens. It should be pretty straight forward.

~~~
navbar:
  fixed:         true # sticky navbar?
  container:     true # is nav same width as content?
  content:
    blog: 
        text: <span><i class="fa fa-pencil"></i> Blog &amp; News</span>
        href: ~/blog.html
        desc: The latest musings of the author.
    author:
        text: <span><i class="fa fa-user"></i> The Author</span>
        href: ~/author.html
        desc: Information about the author.
    book:
        display: <span><i class="fa fa-bookmark"></i> The Book</span>
        synopsis:
            text: <span><i class="fa fa-info-circle"></i> Synopsis</span>
            href: ~/manuscript/site-synopsis.html
            desc: Information about the book-in-progress.
        progress:
            text: <span><i class="fa fa-line-chart"></i> Progress</span>
            href: ~/manuscript/site-statistics.html
            desc: Status of the book-in-progress.
        manuscript:
            text: <span><i class="fa fa-file-text-o"></i> The Manuscript</span>
            href: ~/manuscript/site-manuscript.html
            desc: Read the book-in-progress.
        divider-1: true
        ebook:
            text: <span><i class="fa fa-tablet"></i> eBook</span>
            href: https://leanpub.com/fauxcabulary
            targ: _blank
            desc: The published book, on Leanpub.com.
        print:
            text: <span><i class="fa fa-book"></i> Print Book</span>
            href: http://www.lulu.com/shop/joseph-hall/fauxcabulary/paperback/product-22179468.html
            targ: _blank
            desc: The published book, on Lulu.com.
        divider-2: true
        source:
            text: <span><i class="fa fa-github"></i> Source</span>
            href: https://github.com/groundh0g/leanpub-jekyll
            targ: _blank
            desc: The GitHub project for this book.
~~~

### Search

Search is tricky to implement in Jekyll for newcomers. Leanpub-jekyll automatically indexes your content and makes it searchable from the navigation bar at the top of the site. Posts, chapters, statistics, author bio, ... everything can be included. Of course, it's also configurable.

~~~
search:
  content:      full # one of: false | full | excerpt
  ignore:       [ ".css", ".js", ".json", ".xml", "/404.html", "/custom.html", "/status.html", "/book-copyright.html", "/search.html" ]
  strip_chars:  "|'.,:;!?├─└…()[]#-/“”{}’"
  strip_quote:  true
  titles:       true # search titles from pages and posts?
  tags:         true # search post tags?
  pages:        true # search all page content?
  posts:        true # search all post content?

  ## map content pages to hosting pages (the editable files to the display files)
  pagemaps:
    book-author-bio: book-author
    book-manuscript-chapters: book-manuscript
    book-synopsis-description: book-synopsis
~~~

### Comments

To emable comments on your chapters and other pages, you'll need to select a comment provider and specify the provider-provided ID that was assigned to you. You set these values in the `_jekyllfaces/config.md` file.

~~~
comments:
  provider: facebook # one of: false | facebook | disqus | intensedebate | duoshuo
  siteid: 0000000000000000
~~~

**NOTE:** For Facebook comments (and possibly others), you'll also need to specify your `baseurl` and `url` settings in the `_config.yml` file.

~~~
baseurl: "/leanpub-jekyll" # the subpath of your site, e.g. /blog
url: "https://groundh0g.github.io" # the base hostname & protocol for your site, e.g. http://example.com
~~~

## Coming Soon

Analytics are being implemented next. Stay tuned!
