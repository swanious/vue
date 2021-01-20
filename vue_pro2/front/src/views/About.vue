<template>
  <div>
    <!-- navbar -->
    <div class="height54 dflex alignicenter width100p" role="navigation">

      <!-- logo -->
      <div class="dflex pofixed height-inh alignicenter" role="nav__center__content">
        <div>
          <a href="#">ssafying</a>
        </div>
      </div>

      <!-- contents -->
      <div class="width100p height100p" role="nav__center__content">
        <ul class="dflex alignicenter jstconcenter flexgrow1 width100p height100p padding-l110 padding-r110">
          <li>
            <div>
              <a href="#">cont</a>
            </div>
          </li>
          <li>
            <div>
              <a href="#">cont</a>
            </div>
          </li>
          <li>
            <div>
              <a href="#">cont</a>
            </div>
          </li>
          <li>
            <div>
              <a href="#">cont</a>
            </div>
          </li>
        </ul>
      </div>

      <!-- user -->
      <div class="dflex pofixed right0" role="nav__center__content">
        <ul class="dflex">
          <li>cont</li>
          <li>cont</li>
          <li>cont</li>
          <li>cont</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
html, body {
  width: 100%;
  height: 100%;
  overflow-x: hidden;
}
ul, li {
  margin: 0;
  padding: 0;
  list-style: none;
}
a {
  text-decoration: none;
}
div {
  display: block;
}

/* flex */
.dflex {
  display: flex;
}
.jstconcenter {
  justify-content: center;
}
.flexgrow1 {
  flex-grow: 1;
}

.alignicenter {
  align-items: center;
}
/* width, height */
.height54 {
  height: 54px;
}
.width100p {
  width: 100%;
}
.height100p {
  height: 100%;
}
.width-inh {
  height: inherit;
}
.height-inh {
  height: inherit;
}


/* position */
.pofixed {
  position: fixed;
}

/* Zero top, bottom, left, right */
.right0 {
  right: 0;
}
.left0 {
  left: 0;
}
.top0 {
  top: 0;
}
.bottom0 {
  bottom: 0;
}
/* padding, margin */
.padding-l110 {
  padding-left: 110px;
}
.padding-r110 {
  padding-right: 110px;
}


</style>