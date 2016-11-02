---
layout: page
title: Заказать тур
description: Страница заказа тура с ценами
permalink: /pricingru/
ref: pricing
lang: ru
---

Выберите количество людей, желающих посетить Киев: чем больше группа, тем дешевле цена на одного человека. Стоимость туров указана в гривнах (UAH).

<div id="range"></div>

<div class="comparison">
  <table>
    <thead>
      <tr>
        <th class="tl tl2"></th>
        <th class="product" style="border-top-left-radius: 5px; border-left:0px;">Эконом</th>
        <th class="product">Стандарт</th>
        <th class="product" style="border-top-right-radius: 5px; border-right:0px;">Премиум</th>
      </tr>
      <tr>
        <th>Цена с человека в день</th>
        <th class="price-info">
          <div class="price-now"><span id="price-eco">$ Price</span>
          <span> </span>
          </div>
        </th>
        <th class="price-info">
          <div class="price-now"><span id="price-std">$ Price</span>
          <span> </span>
          </div>
        </th>
        <th class="price-info">
          <div class="price-now"><span id="price-prm">$ Price</span>
          <span> </span>
          </div>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td> </td>
        <td colspan="3">Проживание</td>
      </tr>
      <tr class="compare-row">
        <td>Проживание</td>
        <td><i class="fa fa-check"></i></td>
        <td><i class="fa fa-check"></i></td>
        <td><i class="fa fa-check"></i></td>
      </tr>
      <tr>
        <td> </td>
        <td colspan="3">Услуги гида</td>
      </tr>
      <tr>
        <td>Услуги гида</td>
        <td><i class="fa fa-check"></i></td>
        <td><i class="fa fa-check"></i></td>
        <td><i class="fa fa-check"></i></td>
      </tr>
      <tr>
        <td> </td>
        <td colspan="3">Пешие экскурсии</td>
      </tr>
      <tr class="compare-row">
        <td>Пешие экскурсии</td>
        <td><i class="fa fa-check"></i></td>
        <td><i class="fa fa-check"></i></td>
        <td><i class="fa fa-check"></i></td>
      </tr>
      <tr>
        <td> </td>
        <td colspan="4">Автобусные экскурсии</td>
      </tr>
      <tr>
        <td>Автобусные экскурсии</td>
        <td><span>–</span></td>
        <td><i class="fa fa-check"></i></td>
        <td><i class="fa fa-check"></i></td>
      </tr>
      <tr>
        <td> </td>
        <td colspan="3">Трансфер</td>
      </tr>
      <tr class="compare-row">
        <td>Трансфер</td>
        <td><span>–</span></td>
        <td><i class="fa fa-check"></i></td>
        <td><i class="fa fa-check"></i></td>
      </tr>
      <tr>
        <td> </td>
        <td colspan="4">Экскурсии в Лавру</td>
      </tr>
      <tr>
        <td>Экскурсии в Лавру</td>
        <td><span>–</span></td>
        <td><i class="fa fa-check"></i></td>
        <td><i class="fa fa-check"></i></td>
      </tr>
      <tr>
        <td> </td>
        <td colspan="3">Расширенная экскурсионная программа</td>
      </tr>
      <tr class="compare-row">
        <td>Расширенная экскурсионная программа</td>
        <td><span>–</span></td>
        <td><span>–</span></td>
        <td><i class="fa fa-check"></i></td>
      </tr>
      <tr>
        <td> </td>
        <td colspan="3">Полное сопровождение автотранспортом</td>
      </tr>
      <tr>
        <td>Полное сопровождение автотранспортом</td>
        <td><span>–</span></td>
        <td><span>–</span></td>
        <td><i class="fa fa-check"></i></td>
      </tr>
      <tr>
        <td> </td>
        <td colspan="3">Завтраки (опционально)</td>
      </tr>
      <tr class="compare-row">
        <td>Завтраки (опционально)</td>
        <td><span>–</span></td>
        <td><i class="fa fa-check"></i></td>
        <td><i class="fa fa-check"></i></td>
      </tr>
      <tr>
        <td> </td>
        <td colspan="3">Ужины (опционально)</td>
      </tr>
      <tr>
        <td>Ужины (опционально)</td>
        <td><span>–</span></td>
        <td><span>–</span></td>
        <td><i class="fa fa-check"></i></td>
      </tr>
      <tr>
        <td> </td>
      </tr>
      <tr class="compare-row">
        <td></td>
        <td><a id="eco-btn" href="#order" class="btn btn-row">Заказать<span class="hide-mobile"></span></a></td>
        <td><a id="std-btn" href="#order" class="btn btn-row">Заказать<span class="hide-mobile"></span></a></td>
        <td><a id="prm-btn" href="#order" class="btn btn-row">Заказать<span class="hide-mobile"></span></a></td>
      </tr>
    </tbody>
  </table>

</div>



<form id="submit-form" style="display:none" action="http://formspree.io/inkyiv.info@gmail.com" method="POST">
  <div class="input-row">
    <h2 class="inp"><a name="order" class="anchor" aria-hidden="true"></a>Заказ</h2>
  </div>
  <div class="input-row">
    <input type="hidden" name="_next" value="{{ site.baseurl }}/ackru/" />
    <input id="subject" type="hidden" name="_subject" />
    <input type="hidden" name="pricing-plan" />
    <input type="hidden" name="guests-number" />
    <input type="hidden" name="duration" />
    <input type="hidden" name="price" />
  </div>
  <div class="input-row">
    <div><p class="inp"><b>2 или 3-дневный тур:</b></p></div>
    <div id="days"></div>
  </div>
  <div class="input-row">
    <p class="inp"><b>Тип тура:</b></p><p class="inp-inp" id="pricing-plan" ></p>
    <p class="inp"><b>Количество людей:</b></p><p class="inp-inp" id="guests-number"></p>
    <p class="inp"><b>Общая цена (UAH):</b></p><p class="inp-inp" id="price"></p>
    <h3 class="inp" style="float:left;">Введите имя контактного лица:</h3>
    <input id="name" class="input" name="name" required />
    <h3 class="inp" style="float:left;">Введите адрес электронной почты:</h3>
    <input id="email" class="input" type="email" name="_replyto" required />
    <h3 class="inp" style="float:left;">Введите номер телефона:</h3>
    <input class="input" type="tel" name="phone" required />
    <h3 class="inp" style="float:left;">Дата прибытия:</h3>
    <input class="input" type="date" name="date" />
  </div>
  <div class="input-row">
    <h3 class="inp">Дополнительные комментарии:</h3>
    <textarea class="input" name="comments"></textarea>
  </div>
  <div class="input-row">
    <input type="button" class="btn btn-row btn-input" value="Оформить заказ" onclick="placeOrder();" />
  </div>
</form>

<script src="{{ "/js/slider.js" | prepend: site.baseurl }}"></script>  