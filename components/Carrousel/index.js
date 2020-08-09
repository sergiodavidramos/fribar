import Components from "./Components"
import Com from "./Com"

export default () => {
  return (
    <>
      <div
        id="rev_slider_5_1_wrapper"
        className="rev_slider_wrapper fullscreen-container"
        data-alias="demo_shop_trendy"
        data-source="gallery"
        style={{ background: "transparent", padding: "0px" }}
      >
        <div
          id="rev_slider_5_1"
          className="rev_slider fullscreenbanner"
          style={{ display: "block" }}
          data-version="5.4.8.1"
        >
          <ul>
           <Components/>
           <Com/>
          </ul>
          <div
            className="tp-bannertimer tp-bottom"
            style={{ visibility: "hidden !important" }}
          ></div>
        </div>
      </div>
    </>
  );
};
