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

{% for page in site.pages %}
  {% if chapterPaths contains page.path %}
  {{ page.content }}<hr/>
  {% endif %}
{% endfor %}
