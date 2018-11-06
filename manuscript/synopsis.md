<!-- --------------- -->
<!-- The text for this page is found in `synopsis-description.md` -->
<!-- --------------- -->

{% capture blurb %}{% include_relative synopsis-description.md %}{% endcapture %}

<div class="row">
  <div class="col-md-4">
    <img style="width:100%;" src='{{ page.dir | append: "images/cover.png" | relative_url }}' alt='The book cover image.' />
  </div>
  <div class="col-md-8">
    {{ blurb | markdownify }}
  </div>
</div>

<hr/>
