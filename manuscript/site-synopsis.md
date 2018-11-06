<!-- --------------- -->
<!-- The text for this page is found in `manuscript/synopsis-description.md` -->
<!-- The image for this page is found in `manuscript/images/cover.png` -->
<!-- --------------- -->

{% capture blurb %}{% include_relative site-synopsis-description.md %}{% endcapture %}

<div class="row">
  <div class="col-md-4">
    <img style="width:100%;" src='{{ page.dir | append: "images/cover.png" | relative_url }}' alt='The book cover image.' />
  </div>
  <div class="col-md-8">
    {{ blurb | markdownify }}
  </div>
</div>

<hr/>
