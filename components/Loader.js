export default () => (
  <div className="brk-loader">
    <div className="brk-loader__loader"></div>
    <style jsx>{`
      .brk-loader {
        padding: 100px;
        width: 100%;
        height: 100%;
        background-color: #fff;
        transition: all 0.3s;
      }
      .brk-loader-remove {
        opacity: 0;
        visibility: hidden;
      }
      .brk-loader__loader {
        display: block;
        position: relative;
        left: 50%;
        top: 50%;
        width: 150px;
        height: 150px;
        margin: -75px 0 0 -75px;
        border-radius: 50%;
        border: 3px solid transparent;
        border-top-color: #f55d2c;
        -webkit-animation: spin 2s linear infinite;
        animation: spin 2s linear infinite;
      }
      .brk-loader__loader:after,
      .brk-loader__loader:before {
        content: '';
        position: absolute;
        border-radius: 50%;
        border: 3px solid transparent;
      }
      .brk-loader__loader:before {
        top: 5px;
        left: 5px;
        right: 5px;
        bottom: 5px;
        border-top-color: #dc2c28;
        -webkit-animation: spin 3s linear infinite;
        animation: spin 3s linear infinite;
      }
      .brk-loader__loader:after {
        top: 15px;
        left: 15px;
        right: 15px;
        bottom: 15px;
        border-top-color: #2b2f4c;
        -webkit-animation: spin 1.5s linear infinite;
        animation: spin 1.5s linear infinite;
      }
      @-webkit-keyframes spin {
        0% {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }
      @keyframes spin {
        0% {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }
    `}</style>
  </div>
)
