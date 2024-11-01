<script type="ts">
  import { link } from "svelte-spa-router";
  import Carousel from "./SvelteCarousel.svelte";
</script>

<header>
  <div id="cm-banner-desktop">
    <img src="CM_Banner_light.png" alt="Canal Marina Banner">
  </div>
  <div id="cm-banner-mobile">
    <img src="CM_Banner_light_mobile.png" alt="Canal Marina Banner">    
  </div>
  
  <nav>
    <a href="/location" use:link>Location</a>
    <a href="/amenities" use:link>Amenities</a>
    <a href="/green-init" use:link>Green Initiative</a>
    <a href="/contact" use:link>Contact</a>
  </nav>
  <br>
  <div id="CM-photo-carousel">
    <Carousel />
</header>

