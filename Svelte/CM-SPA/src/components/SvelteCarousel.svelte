<script>
  import Carousel from "svelte-carousel";
  const images = [
    {
      url: "https://s3.us-west-2.amazonaws.com/canal-marina.com/CM-aerial-1.jpg",
      description: "image1",
    },
    {
      url: "https://s3.us-west-2.amazonaws.com/canal-marina.com/CM-aerial-2.jpg",
      description: "image2",
    },
    {
      url: "https://s3.us-west-2.amazonaws.com/canal-marina.com/CM-aerial-3.jpg",
      description: "image3",
    },
    {
      url: "https://s3.us-west-2.amazonaws.com/canal-marina.com/CM-aerial-4.jpg",
      description: "image4",
    },
    {
      url: "https://s3.us-west-2.amazonaws.com/canal-marina.com/CM-aerial-5.jpg",
      description: "image5",
    },
    {
      url: "https://s3.us-west-2.amazonaws.com/canal-marina.com/CM-aerial-6.jpg",
      description: "image6",
    },
    {
      url: "https://s3.us-west-2.amazonaws.com/canal-marina.com/CM-aerial-7.jpg",
      description: "image7",
    }
  ];
  let carousel; // for calling methods of the carousel instance
  const handleNextClick = () => {
    carousel.goToNext();
  };
</script>
  <Carousel
    bind:this={carousel}
    let:loaded
>
 
    {#each images as src, imageIndex (src)}
      <div class="img-container">
        {#if loaded.includes(imageIndex)}
          <img src={src.url} alt={src.description} width={640} height={384} />
        {/if}
      </div>
    {/each}
  </Carousel>
