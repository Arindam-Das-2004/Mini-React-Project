const Herosection = () =>{
return (
<main className="hero container">
  <div className="hero-content">
    <h1>YOUR FEET DESERVE THE BEST</h1>

    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam quis voluptatum, vitae expedita molestiae libero magni quod perferendis quidem quaerat non porro eum corporis provident voluptatibus, nesciunt eius vero nemo!</p>

    <div className="hero-btn">
      <button>Shop now</button>
      <button className="secondary-btn">Category</button>
    </div>
    <div className="shopping">
      <p>
        Available On 
      </p>
      <div className="brand-icon">
        <img src="/public\Img\Amazon logo.jpg" alt="amazon" />
        <img src="\public\Img\flipkart-logo.webp" alt=""/>
      </div>
    </div>
  </div>
  <div className="hero-image">
    <img src="\public\Img\shoes_image.avif" alt="hero-img" />
  </div>
</main>
);
};

export default Herosection;