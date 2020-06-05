import { h } from "preact";

const InfoBar = ({ room, disconnect }) => (
  <div
    style={{
      borderBottom: "4px solid darkblue"
    }}
    data-e2e="info-bar"
    className="flex min-h-10 items-center justify-between bg-purple w-100"
  >
    <div className="flex items-center white">
      <span class="green mh3 f3 material-icons">fiber_manual_record</span>
      <span className="mh2 lh-title white bold f3">{room}</span>
    </div>
    <div className="mr2 flex justify-end">
      <button className='bg-transparent' onClick={() => disconnect()}>
        <span class="f3 white material-icons">close</span>
      </button>
    </div>
  </div>
);

export default InfoBar;
