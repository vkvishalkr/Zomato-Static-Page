const Header = () => {
  return (
    <div className="header">
      <img
        className="logo"
        src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
      />
      <div className="search-box">
        <div className="location">
          <span>📍</span>
          <input type="text" placeholder="Old Jakkanpur, Indira Nagar" />
          <span>🔽</span>
        </div>
        <div className="res-search">
          <span>🔎</span>
          <input
            type="text"
            placeholder="Search For Restaurant, cuisine or dish"
          />
        </div>
      </div>
      <span className="log-in">Log in</span>
      <span className="sign-up">Sign up</span>
    </div>
  );
};

export default Header;
