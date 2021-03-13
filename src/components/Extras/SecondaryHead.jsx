import "../css/Secondary.css";

const SecondaryHead = () => {
  var today = new Date();
  var date =
    today.getDate() + "-" + (today.getMonth() + 1) + "-" + today.getFullYear();
  var time =
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

  return (
    <div className="secondary__head px-3 ">
      <div className="container text-muted">
        <h6>Date {date}, Time {time}</h6>
      </div>
    </div>
  );
};

export default SecondaryHead;
