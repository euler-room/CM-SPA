<script type="ts">
  import { link } from "svelte-spa-router";
</script>

<header>
  <div>
    <div class="row">
      <div class="column-left">  
        <img class="cm-logo" src="CM_logo.png" alt="Canal Marina Logo">
      </div>
      <div class="column-right">
        <div class="title">Canal Marina
         <div class="address">Seattle, WA</div>
        </div>
      </div>
    </div>
  </div>
  
  <nav>
    <a href="/location" use:link>Location</a>
    <a href="/amenities" use:link>Amenities</a>
    <a href="/green-init" use:link>Green Initiative</a>
    <a href="/contact" use:link>Contact</a>
  </nav>
</header>

<style>
  .title {
    font-size: 96px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  }
  .address {
    font-size: 48px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  }

  .column-left {
    padding: 30px;
    float: left;
    width: 10%;
  }
  .column-right {
    float: right;
    width: 75%;
  }


  /* Clear floats after the columns */
  .row:after {
    content: "";
    display: table;
    clear: both;
  }

  header > nav {
    display: flex;
    gap: 1rem;
    align-items: center;
    margin-top: 1rem;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
    text-align: center;
		font-size: 24px;
		text-transform: uppercase;
		font-weight: 200;
		color: #031c4e;
  }
</style>