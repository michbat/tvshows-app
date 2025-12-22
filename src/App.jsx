import "./App.css";

export const App = () => {
  return (
    <>
      <div className="main_container">
        <div className="header">
          <div className="row">
            <div className="col-4">
              <div>LOGO</div>
              <div>Subtitle</div>
            </div>
            <div className="col-md-12 col-lg-4">
              <input style={{width:"100%"}} type="text" />
            </div>
          </div>
        </div>
        <div className="tv_show_details">TV show details</div>
        <div className="recommended_tv_shows">Recommended</div>
      </div>
    </>
  );
};
