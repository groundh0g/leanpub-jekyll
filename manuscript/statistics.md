{% capture chapters %}{% include_relative Book.txt %}{% endcapture %}
{% assign chapters = chapters | newline_to_br | split: "<br />" %}

{% assign chapterPaths = "" %}
{% for chapter in chapters %}
  {% assign file = chapter | strip %}
  {% if file != "" and file != nil %}
    {% assign chapterPath = page.dir | append: file | relative_url %}
    {% assign chapterPaths = chapterPaths | append: chapterPath %}
  {% endif %}
{% endfor %}

{% assign wordCount = 0 %}

<p><table cellpadding="0" cellspacing="5" border="0" style="margin-left:25px;">

<tr style="font-weight:bolder; font-size:1.2em; text-align:center;">
  <td style="text-align:left;">Title</td>
  <td>&nbsp;</td>
  <td>Counts</td>
  <td>Status</td>
  <td>Reviewed On</td>
</tr>

{% for page in site.pages %}
  {% if chapterPaths contains page.path %}
  
{% assign twoWeekReview = false %}
{% assign threeDayReview = false %}
{% assign nowSeconds = site.time | date: '%s' | plus: 0 %}
{% assign twoWeeks = page.lastReviewedOn | date: '%s' | plus: 1209600 | minus: nowSeconds %}
{% assign threeDays = page.lastReviewedOn | date: '%s' | plus: 259200 | minus: nowSeconds %}
{% if twoWeeks > 0 %}{% assign twoWeekReview = true %}{% endif %}
{% if threeDays > 0 %}{% assign threeDayReview = true %}{% endif %}

{% assign newCount = page.content | number_of_words %}
{% assign wordCount = wordCount | plus: newCount %}

{% assign pageFullTitle = "<b>" | append: page.title | append: "</b>" %}
{% if page.tagline != "" and page.tagline != nil %}
  {% assign pageFullTitle = pageFullTitle | append: ": " | append: page.tagline %}
{% endif %}

<tr>
  <td><a href="{{ site.baseurl }}/{{ page.path | replace: '.md', '.html' }}">{{ pageFullTitle }}&nbsp;</a></td>
  <td>&nbsp;</td>
  <td style="text-align:right;">&nbsp;{{ newCount }} words&nbsp;</td>
  <td>&nbsp;
    <i title="stub - no content" class="fa fa-thumb-tack" {% if page.status != 'stub' %}style="color:#ccc;"{% else %}style="color:#22f; cursor:default;"{% endif %}></i>
    <i title="placeholder - limited content" class="fa fa-file-o" {% if page.status != 'placeholder' %}style="color:#ccc;"{% else %}style="color:#22f; cursor:default;"{% endif %}></i>
    <i title="draft - almost there" class="fa fa-file-text-o" {% if page.status != 'draft' %}style="color:#ccc;"{% else %}style="color:#22f; cursor:default;"{% endif %}></i>
    <i title="edit - ready for edit" class="fa fa-pencil" {% if page.status != 'edit' %}style="color:#ccc;"{% else %}style="color:#22f; cursor:default;"{% endif %}></i>
    <i title="done - ready for print" class="fa fa-check" {% if page.status != 'done' %}style="color:#ccc;"{% else %}style="color:#22f; cursor:default;"{% endif %}></i>&nbsp;&nbsp;</td>
  <td style="text-align:right; {% if twoWeekReview != true %}color:#bbb;{% endif %} {% if threeDayReview == true %}font-weight:bold;{% endif %}">&nbsp;{{ page.lastReviewedOn | date: '%B %d, %Y' }}</td>
</tr>
  
  {% endif %}
{% endfor %}

<tr>
  <td style="text-align:right;"><b>Total: </b>&nbsp;</td>
  <td>&nbsp;</td>
  <td style="text-align:right;">&nbsp;{{ wordCount }} words&nbsp;</td>
  <td>&nbsp;</td>
  <td>&nbsp;</td>
</tr>
</table></p>