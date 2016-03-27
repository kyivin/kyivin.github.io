---
layout: page
title: Plans&Pricing
permalink: /pricing/
ref: pricing
lang: en
---

Select the number of people who are going to attend the tour as the price of one day per one person depends on it.

<div id="range"></div>


<div class="comparison">
  <table>
    <thead>
      <tr>
        <th class="tl tl2"></th>
        <th class="product" style="border-top-left-radius: 5px; border-left:0px;">Econom</th>
        <th class="product">Standard</th>
        <th class="product" style="border-top-right-radius: 5px; border-right:0px;">Premium</th>
      </tr>
      <tr>
        <th>Price / day / person</th>
        <th class="price-info">
          <div class="price-now"><span id="price-eco">$ Price</span>
          <span> $</span>
          </div>
        </th>
        <th class="price-info">
          <div class="price-now"><span id="price-std">$ Price</span>
          <span> $</span>
          </div>
        </th>
        <th class="price-info">
          <div class="price-now"><span id="price-prm">$ Price</span>
          <span> $</span>
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
        <td><a id="eco-btn" href="/" onclick="return false;" class="btn btn-row">Order<span class="hide-mobile"></span></a></td>
        <td><a id="std-btn" href="/" onclick="return false;" class="btn btn-row">Order<span class="hide-mobile"></span></a></td>
        <td><a id="prm-btn" href="/" onclick="return false;" class="btn btn-row">Order<span class="hide-mobile"></span></a></td>
      </tr>
    </tbody>
  </table>

</div>

<script src="{{ "/js/slider.js" | prepend: site.baseurl }}"></script>  

<form id="submit-form" style="display:none" action="http://formspree.io/inkyiv.info@gmail.com" method="POST">
  <div class="input-row">
    <input type="hidden" name="_next" value="{{ site.baseurl }}/about/" />
    <input id="subject" type="hidden" name="_subject" />
    <input type="hidden" name="pricing-plan" />
    <input type="hidden" name="guests-number" />
    <input type="hidden" name="price" />
    <h2 class="inp">Order</h2>
    <p class="inp"><b>Pricing plan:</b></p><p class="inp-inp" id="pricing-plan" ></p>
    <p class="inp"><b>Number of guests:</b></p><p class="inp-inp" id="guests-number"></p>
    <p class="inp"><b>Overall price:</b></p><p class="inp" id="price"></p>
    <h3 class="inp">Input your email:</h3>
    <input id="email" class="input" type="email" name="_replyto" />
  </div>
  <div class="input-row">
    <h3 class="inp">Additional comments:</h3>
    <textarea class="input" name="comments"></textarea>
  </div>
  <div class="input-row">
    <input type="button" class="btn btn-row btn-input" value="Send" onclick="placeOrder();" />
  </div>
</form>

