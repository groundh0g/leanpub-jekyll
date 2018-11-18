---
title: The Synopsis
---

{% include read-config.liquid %}

<!-- --------------- -->
<!-- The text for this page is found in `book-synopsis-description.md` -->
<!-- The image for this page is found in `manuscript/images/cover.png` -->
<!-- --------------- -->

<hr/>

{% capture blurb %}{% include_relative book-synopsis-description.md %}{% endcapture %}

<div class="row">
  <div class="col-md-4">
    <img style="width:100%;" src='{{ page.dir | append: "manuscript/images/cover.png" | relative_url }}' alt='The book cover image.' />
  </div>
  <div class="col-md-8">
    {{ blurb | markdownify }}
  </div>
</div>

