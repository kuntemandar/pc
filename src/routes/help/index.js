import { h } from "preact";

const Help = () => {
  return (
      <div className="w-100 bg-purple h4">
        <a className="white pa2 ma2 lh-title" href="/">
          Back
        </a>
      <div className="pa2 ma2">
      <h2 className='pb2'>Icons made by{" "}</h2>

      <ul className="lh-title list ma0 pa0">
        <li>
          <a href="https://www.flaticon.com/authors/iconixar" title="iconixar">
            iconixar
          </a>{" "}
          from{" "}
          <a href="https://www.flaticon.com/" title="Flaticon">
            {" "}
            www.flaticon.com
          </a>
          <hr></hr>
          <a
            href="https://www.flaticon.com/free-icon/info_896500"
            title="smalllikeart"
          >
            smalllikeart
          </a>{" "}
          from{" "}
          <a href="https://www.flaticon.com/" title="Flaticon">
            {" "}
            www.flaticon.com
          </a>
        </li>
      </ul>
      </div>
      </div>
  );
};

export default Help;
