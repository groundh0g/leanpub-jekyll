---
title: The Author
---

{% include read-config.liquid %}

<!-- --------------- -->
<!-- The text for this page is found in `author-bio.md` -->
<!-- The image for this page is found in `assets/images/author.png` -->
<!-- --------------- -->

{% capture blurb %}{% include_relative book-author-bio.md %}{% endcapture %}

<hr/>

<div class="row">
  <div class="col-md-4">
    <img style="width:100%;" src='{{ page.dir | append: "assets/images/author.png" | relative_url }}' alt='Picture of the author.' />
  </div>
  <div class="col-md-8">
    {{ blurb | markdownify }}
  </div>
</div>

<!-- --------------- -->
<!-- Edit the `metadata.copyright` value in the `_jekyllfaces/config.md` file to suit your needs. -->
<!-- --------------- -->

<hr/>
{{ config.metadata.copyright | markdownify }}
