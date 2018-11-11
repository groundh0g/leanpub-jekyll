---
title: Book Manuscript
---

{% include read-config.liquid %}

<!-- --------------- -->
<!-- Edit this text to suit your needs -->
<!-- --------------- -->

This is the latest draft of the book. Edits may not be complete, so expect errors and plot holes.





<!-- --------------- -->
<!-- This script stitches the chapters together into a single page -->
<!-- --------------- -->

{% include_relative book-manuscript-chapters.incl %}


<!-- --------------- -->
<!-- Edit the `metadata.copyright` value in the `_jekyllfaces/config.md` file to suit your needs. -->
<!-- --------------- -->

<hr/>
{{ config.metadata.copyright | markdownify }}
