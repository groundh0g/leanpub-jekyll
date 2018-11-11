---

metadata:
  title: Leanpub-Jekyll
  tagline: Share your WIP. Publish often.
  description: > # Description for the site ...
    Inspired by JekyllBootstrap [plusjade/jekyll-bootstrap](https://github.com/plusjade/jekyll-bootstrap){:target="_blank"}, JekyllFaces [groundh0g/jekyllfaces](https://github.com/groundh0g/jekyllfaces){:target="_blank"}
    is built from the ground up to support [Jekyll 3.7.x](https://github.com/jekyll/jekyll/releases/tag/v3.7.3){:target="_blank"} and [Bootstrap 4.1.x](https://getbootstrap.com/docs/4.1/getting-started/introduction/){:target="_blank"},
    along with support for [Bootswatch's free themes](https://bootswatch.com/){:target="_blank"}, all while targeting the dependencies of [GitHub Pages](https://help.github.com/articles/what-is-github-pages/){:target="_blank"},
    using the GitHub Pages [approved dependencies](https://pages.github.com/versions/){:target="_blank"}.
  legal: # used for privacy policy, terms of use, etc ...
    #company:      # {metadata.title} when blank
    #website:      # http://{metadata.title}.com when blank
    #jurisdiction: # e.g. Georgia, "United States" when blank
  lang: en

  copyright: Powered by [leanpub-jekyll](https://github.com/groundh0g/leanpub-jekyll). All content &copy; [Joseph Barrett Hall](http://joehall.net) ([@groundh0g](https://twitter.com/groundh0g)).

customize:
  theme: journal       # one of: cerulean | cosmo | cyborg | darkly | default | flatly | journal | litera | lumen | lux | materia | minty | pulse | sandstone | simplex | sketchy | slate | solar | spacelab | superhero | united | yeti
  http404: sticky     # one of: badge | default | dog | droids | glass | link | milk | monster | potty | shrug | sticky | tweet | zork
  #css: [ "main.css" ] # array of stylesheets to load after other styles
  #js:  [ "main.js"  ] # array of javascripts to load after other scripts
  #homepage: custom    # one of: books | contributors | custom | docs | landing | legal | soon | webapps

build:
  use_cdn:      true # use CDN for 3rd-party scripts and styles?
  search:       true # create search index?

  #books:        true # process book content?
  #docs:         true # process documentation content?
  #landing:      true # process landing page content?
  #soon:         true # process coming soon content?
  #webapps:      true # process webapps content? (the overviews, not the webapp(s) itself)
  #legal:        true # process legal content?
  #contributors: true # process contributors content?

navbar:
  fixed:         true # sticky navbar?
  container:     true # is nav same width as content?
  content:
    blog: 
        text: <span><i class="fa fa-newspaper-o"></i> Blog &amp; News</span>
        href: ~/
        desc: The latest musings of the author.
    author:
        text: <span><i class="fa fa-user-circle-o"></i> The Author</span>
        href: ~/book-author.html
        desc: Information about the author.
    book:
        display: <span><i class="fa fa-bookmark-o"></i> The Book</span>
        synopsis:
            text: <span><i class="fa fa-info-circle"></i> Synopsis</span>
            href: ~/book-synopsis.html
            desc: Information about the book-in-progress.
        progress:
            text: <span><i class="fa fa-line-chart"></i> Progress</span>
            href: ~/book-statistics.html
            desc: Status of the book-in-progress.
        manuscript:
            text: <span><i class="fa fa-file-text-o"></i> The Manuscript</span>
            href: ~/book-manuscript.html
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

  ###search:       true # include search box in navbar (rightmost element)
  #books:        true # include link to books overview? {build.books} when blank
  #docs:         true # include link to docs overview? {build.docs} when blank
  #webapps:      true # include link to webapps overview? {build.webapps} when blank
  #legal:        true # include link to legal content overview? {build.legal} when blank
  #contributors: true # include link to contributors page? {build.contributors} when blank
  #pages:        true # include all other page content?

search:
  content:      full # one of: false | full | excerpt
  ignore:       [ ".css", ".js", ".json", ".xml", "/404.html", "/custom.html", "/status.html", "/book-copyright.html", "/search.html" ]
  #groups:       [ "/content/contributors/", "/content/legal/" ]
  strip_chars:  "|'.,:;!?├─└…()[]#-/“”{}’"
  strip_quote:  true
  titles:       true # search titles from pages and posts?
  tags:         true # search post tags?
  pages:        true # search all page content?
  posts:        true # search all post content?

  #books:        true # search all book content? {build.books} when blank
  #docs:         true # search all docs content? {build.docs} when blank
  #landing:      true # search landing page content? {build.landing} when blank
  #soon:         true # search coming soon page content? {build.soon} when blank
  #webapps:      true # search webapps overview content? {build.webapps} when blank
  #legal:        true # search legal content? {build.legal} when blank
  #contributors: true # search contributors page? {build.contributors} when blank

  ## map content pages to hosting pages (the editable files to the display files)
  pagemaps:
    book-author-bio: book-author
    book-manuscript-chapters: book-manuscript
    book-synopsis-description: book-synopsis

fonticons:
  fontawesome: cdn   # one of: false | local | cdn
  foundation:  false # one of: false | local | cdn
  glyphicons:  false # one of: false | local
  icomoon:     false # one of: false | local | cdn
  ionicons:    false # one of: false | local | cdn
  material:    false # one of: false | local | cdn
  octicons:    false # one of: false | local | cdn

analytics:
  provider: false # one of: false | google | matomo | getclicky | mixpanel | gauges 
  siteid: UA-0000000-00
  baseurl: # only used by matomo; ex: mysite.com/piwik

comments:
  provider: false # one of: false | facebook | disqus | intensedebate | duoshuo
  siteid: 0000000000000000

# --- JekyllFaces Metadata ---

version:   0.1.0
github:    https://github.com/groundh0g/jekyllfaces
website:   http://jekyllfaces.com/
bsversion: 4.1.0

---

# Config File

This markdown should never be displayed. This text is to satisfy the linters.