---
layout: page
title: Gallery
permalink: /gallery/
ref: gallery
lang: en
---

<div class="gallery">
  {% for item in site.data.images %}
    <div class="gallery-item">
      <a href="{{ item.src | prepend: "/images/" | prepend: site.baseurl }}">
          <img class="gallery-image" src="{{ item.thumb | prepend: "/images/" | prepend: site.baseurl }}" alt="{{ item.alt }}"/>
      </a>
    </div>
  {% endfor %}
</div>
