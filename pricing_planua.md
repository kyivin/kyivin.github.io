---
layout: page
title: Вартість турів
permalink: /pricingua/
ref: pricing
lang: ua
---

Оберіть кількість людей, що бажають відвідати тур, оскільки ціна туру для однією людини за день залежить від кількості.


<div id="range"></div>

<div class="comparison">
  <table>
    <thead>
      <tr>
        <th class="tl tl2"></th>
        <th class="product" style="border-top-left-radius: 5px; border-left:0px;">Економ</th>
        <th class="product">Стандарт</th>
        <th class="product" style="border-top-right-radius: 5px; border-right:0px;">Преміум</th>
      </tr>
      <tr>
        <th>Ціна / день / людина</th>
        <th class="price-info">
          <div class="price-now"><span id="price-eco">$ Price</span>
          <span> ₴</span>
          </div>
        </th>
        <th class="price-info">
          <div class="price-now"><span id="price-std">$ Price</span>
          <span> ₴</span>
          </div>
        </th>
        <th class="price-info">
          <div class="price-now"><span id="price-prm">$ Price</span>
          <span> ₴</span>
          </div>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td></td>
        <td colspan="3">item_1</td>
      </tr>
      <tr class="compare-row">
        <td>item_1</td>
        <td><i class="fa fa-check"></i></span>
        </td>
        <td><span>–</span></td>
        <td><i class="fa fa-check"></i></span>
        </td>
      </tr>
      <tr>
        <td> </td>
        <td colspan="3">item_2</td>
      </tr>
      <tr>
        <td>item_2</td>
        <td><i class="fa fa-check"></i></span>
        </td>
        <td><span>–</span></td>
        <td><i class="fa fa-check"></i></span>
        </td>
      </tr>
      <tr>
        <td> </td>
        <td colspan="3">item_3</td>
      </tr>
      <tr class="compare-row">
        <td>item_3</td>
        <td><i class="fa fa-check"></i></span>
        </td>
        <td><span>–</span></td>
        <td><i class="fa fa-check"></i></span>
        </td>
      </tr>
      <tr>
        <td> </td>
        <td colspan="4">item_4</td>
      </tr>
      <tr>
        <td>item_4</td>
        <td><i class="fa fa-check"></i></span>
        </td>
        <td><span>–</span></td>
        <td><i class="fa fa-check"></i></span>
        </td>
      </tr>
      <tr>
        <td> </td>
        <td colspan="3">item_5</td>
      </tr>
      <tr class="compare-row">
        <td>item_5</td>
        <td><span>–</span></td>
        <td><span>–</span></td>
        <td><i class="fa fa-check"></i></span>
        </td>
      </tr>
      <tr>
        <td> </td>
        <td colspan="4">item_6</td>
      </tr>
      <tr>
        <td>item_6</td>
        <td><span>–</span></td>
        <td><span>–</span></td>
        <td><i class="fa fa-check"></i></span>
        </td>
      </tr>
      <tr>
        <td> </td>
        <td colspan="3">item_7</td>
      </tr>
      <tr class="compare-row">
        <td>item_7</td>
        <td><span>–</span></td>
        <td><span>–</span></td>
        <td><i class="fa fa-check"></i></span>
        </td>
      </tr>
      <tr>
        <td> </td>
        <td colspan="3">item_8</td>
      </tr>
      <tr>
        <td>item_8</td>
        <td><span>–</span></td>
        <td><i class="fa fa-check"></i></span>
        </td>
        <td><i class="fa fa-check"></i></span>
        </td>
      </tr>
      <tr>
        <td> </td>
        <td colspan="3">item_9</td>
      </tr>
      <tr class="compare-row">
        <td>item_9</td>
        <td><span>–</span></td>
        <td><i class="fa fa-check"></i></span>
        </td>
        <td><i class="fa fa-check"></i></span>
        </td>
      </tr>
      <tr>
        <td> </td>
        <td colspan="3">item_10</td>
      </tr>
      <tr>
        <td>item_10</td>
        <td><span>–</span></td>
        <td><i class="fa fa-check"></i></span>
        </td>
        <td><i class="fa fa-check"></i></span>
        </td>
      </tr>
      <tr>
        <td> </td>
      </tr>
      <tr class="compare-row">
        <td></td>
        <td><a id="eco-btn" href="/" onclick="return false;" class="btn btn-row">Замовити<span class="hide-mobile"></span></a></td>
        <td><a id="std-btn" href="/" onclick="return false;" class="btn btn-row">Замовити<span class="hide-mobile"></span></a></td>
        <td><a id="prm-btn" href="/" onclick="return false;" class="btn btn-row">Замовити<span class="hide-mobile"></span></a></td>
      </tr>
    </tbody>
  </table>

</div>



<form id="submit-form" style="display:none" action="http://formspree.io/inkyiv.info@gmail.com" method="POST">
  <div class="input-row">
    <h2 class="inp">Замовлення</h2>
  </div>
  <div class="input-row">
    <input type="hidden" name="_next" value="{{ site.baseurl }}/ackua/" />
    <input id="subject" type="hidden" name="_subject" />
    <input type="hidden" name="pricing-plan" />
    <input type="hidden" name="guests-number" />
    <input type="hidden" name="duration" />
    <input type="hidden" name="price" />
  </div>
  <div class="input-row">
    <div><p class="inp"><b>2 чи 3-денний тур:</b></p></div>
    <div id="days"></div>
  </div>
  <div class="input-row">
    <p class="inp"><b>Тип туру:</b></p><p class="inp-inp" id="pricing-plan" ></p>
    <p class="inp"><b>Кількість людей:</b></p><p class="inp-inp" id="guests-number"></p>
    <p class="inp"><b>Загальна ціна:</b></p><p class="inp-inp" id="price"></p>
    <h3 class="inp" style="float:left;">Введіть свою електронну адресу:</h3>
    <input id="email" class="input" type="email" name="_replyto" required />
    <h3 class="inp" style="float:left;">Введіть номер телефону:</h3>
    <input class="input" type="tel" name="phone" required />
    <h3 class="inp" style="float:left;">Дата прибуття:</h3>
    <input class="input" type="date" name="date" />
  </div>
  <div class="input-row">
    <h3 class="inp">Додаткові коментарі:</h3>
    <textarea class="input" name="comments"></textarea>
  </div>
  <div class="input-row">
    <input type="button" class="btn btn-row btn-input" value="Send" onclick="placeOrder();" />
  </div>
</form>

<script src="{{ "/js/slider.js" | prepend: site.baseurl }}"></script>  