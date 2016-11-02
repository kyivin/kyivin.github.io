---
layout: page
title: Проживание
description: Описание условий проживания и фотографии мини-гостиницы
permalink: /galleryru/
ref: gallery
lang: ru
---

<h3><a id="designer-templates" class="anchor" href="#designer-templates" aria-hidden="true"><span class="octicon octicon-link"></span></a>Условия проживания</h3>

<p>Своих гостей мы селим в комфортной двухместной мини-гостинице на левом берегу Днепра, откуда открывается редкий панорамный вид на правый берег Киева, в частности на Киево-Печерскую Лавру и весь Печерск.</p>

<p>К Вашим услугам будет предоставлена одна или две комнаты (в зависимости от количества человек и Ваших особых преференций). У каждой комнаты есть свой отдельный санузел со всем необходимым. Также наличествует общая кухня-холл, на которой наши гости могут приготовить чай, бутерброды.</p>

<p>В самой непосредственной близости от места проживания есть супер-маркет, а также немало разнообразных заведений общественного питания. Заказ пиццы, суши или чего-либо иного прямо в номер также будет вполне доступной опцией.</p>

<p><b>Проживание включено в стоимость туров.</b></p>

<h3><a id="designer-templates" class="anchor" href="#designer-templates" aria-hidden="true"><span class="octicon octicon-link"></span></a>Комната "Комфорт", 14 кв.м</h3>

<p>В комнате могут разместиться 2 или максимум 3 человека.</p>
<p><b>Комплектация:</b> ортопедический двухспальный диван (могут разместиться как один так и два гостя), большое раскладное кресло (дополнительное, по необходимости, спальное место), телевизор, шкаф, другая мебель, кондиционер. Из этой комнаты есть выход на открытый летний балкон с панорамным видом.</p>

<h3><a id="designer-templates" class="anchor" href="#designer-templates" aria-hidden="true"><span class="octicon octicon-link"></span></a>Комната "Лаунж", 25 кв.м</h3>

В комнате удобно могут разместиться 5, максимум 6 гостей.

<p><b>Комплектация:</b> две большие двухъярусные кровати с ортопедическими матрасами, диван, прикроватные тумбы, шкаф, большой стол, торшер, кондиционер.</p>

<h3><a id="designer-templates" class="anchor" href="#designer-templates" aria-hidden="true"><span class="octicon octicon-link"></span></a>Другие удобства</h3>

<p>Также к Вашим услугам холодильник, электрочайник, утюг, посуда, столовые приборы, фен, полотенца, туалетные принадлежности, бесплатный интернет (Wi-Fi).</p>

<div class="gallery">
  {% for item in site.data.images %}
    <div class="gallery-item" itemscope itemtype="http://schema.org/ImageGallery">
	  <figure itemprop="associatedMedia" itemscope itemtype="http://schema.org/ImageObject" data-index="{{ item.index }}">
    	  <a href="{{ item.src | prepend: "/img/" | prepend: site.baseurl }}" itemprop="contentUrl" data-size="{{ item.width }}x{{ item.height }}" title="{{ item.title }}">
        	  <img src="{{ item.thumb | prepend: "/img/" | prepend: site.baseurl }}" alt="{{ item.alt }}" class="gallery-image" itemprop="thumbnail"/>
      	  </a>
	  </figure>
    </div>
  {% endfor %}
</div>

<!-- Root element of PhotoSwipe. Must have class pswp. -->
<div class="pswp" tabindex="-1" role="dialog" aria-hidden="true">

    <!-- Background of PhotoSwipe. 
         It's a separate element as animating opacity is faster than rgba(). -->
    <div class="pswp__bg"></div>

    <!-- Slides wrapper with overflow:hidden. -->
    <div class="pswp__scroll-wrap">

        <!-- Container that holds slides. 
            PhotoSwipe keeps only 3 of them in the DOM to save memory.
            Don't modify these 3 pswp__item elements, data is added later on. -->
        <div class="pswp__container">
            <div class="pswp__item"></div>
            <div class="pswp__item"></div>
            <div class="pswp__item"></div>
        </div>

        <!-- Default (PhotoSwipeUI_Default) interface on top of sliding area. Can be changed. -->
        <div class="pswp__ui pswp__ui--hidden">

            <div class="pswp__top-bar">

                <!--  Controls are self-explanatory. Order can be changed. -->

                <div class="pswp__counter"></div>

                <button class="pswp__button pswp__button--close" title="Close (Esc)"></button>

                <button class="pswp__button pswp__button--share" title="Share"></button>

                <button class="pswp__button pswp__button--fs" title="Toggle fullscreen"></button>

                <button class="pswp__button pswp__button--zoom" title="Zoom in/out"></button>

                <!-- Preloader demo http://codepen.io/dimsemenov/pen/yyBWoR -->
                <!-- element will get class pswp__preloader--active when preloader is running -->
                <div class="pswp__preloader">
                    <div class="pswp__preloader__icn">
                      <div class="pswp__preloader__cut">
                        <div class="pswp__preloader__donut"></div>
                      </div>
                    </div>
                </div>
            </div>

            <div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
                <div class="pswp__share-tooltip"></div> 
            </div>

            <button class="pswp__button pswp__button--arrow--left" title="Previous (arrow left)">
            </button>

            <button class="pswp__button pswp__button--arrow--right" title="Next (arrow right)">
            </button>

            <div class="pswp__caption">
                <div class="pswp__caption__center"></div>
            </div>

        </div>

    </div>

</div>
