const Body = () => {
  return (
    <div className="body" style={{ marginTop: "1.5rem" }}>
      <div className="body-nav">
        <span>Home</span>
        <span>/</span>
        <span>India</span>
        <span>/</span>
        <span>Patna</span>
        <span>/</span>
        <span style={{ opacity: "0.5" }}>Fraser Road Area Restaurants</span>
      </div>
      <div className="dine-delivery">
        <div className="dine">
          <div>
            <img
              className="logo"
              src="https://b.zmtcdn.com/data/o2_assets/78d25215ff4c1299578ed36eefd5f39d1616149985.png"
            />
          </div>
          <span>Dining Out</span>
        </div>
        <div className="delivery">
          <div>
            <img
              className="logo"
              src="https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png"
            />
          </div>
          <span>Delivery</span>
        </div>
      </div>
      <div className="filters">
        <div>Filters</div>
        <div>Rating: 4.0+</div>
        <div>Pure Veg</div>
        <div>Cuisines</div>
      </div>
      <div className="order-inspiration">
        <h1>Inspiration for your first order</h1>
        <div className="dishes">
          <div>
            <img
              className="logo"
              src="https://b.zmtcdn.com/data/dish_images/d19a31d42d5913ff129cafd7cec772f81639737697.png"
            />
            <span>Biryani</span>
          </div>
          <div>
            <img
              className="logo"
              src="https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png"
            />
            <span>Pizza</span>
          </div>
          <div>
            <img
              className="logo"
              src="https://b.zmtcdn.com/data/o2_assets/52eb9796bb9bcf0eba64c643349e97211634401116.png"
            />
            <span>Thali</span>
          </div>
          <div>
            <img
              className="logo"
              src="https://b.zmtcdn.com/data/dish_images/197987b7ebcd1ee08f8c25ea4e77e20f1634731334.png"
            />
            <span>Chicken</span>
          </div>
          <div>
            <img
              className="logo"
              src="https://b.zmtcdn.com/data/dish_images/d5ab931c8c239271de45e1c159af94311634805744.png"
            />
            <span>Cake</span>
          </div>
          <div>
            <img
              className="logo"
              src="https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png"
            />
            <span>Burger</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
