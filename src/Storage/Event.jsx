import { useState } from "react";

function EventTarget() {
  const [user, setUser] = useState({ id: "", phone: "" });

  const handleInput = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleButton = (e) => {
    e.preventDefault();
    setUser({ id: 100, phone: 100 });
  };

  const handleAlert = (e) => {
    e.preventDefault();
    alert("id: " + user.id + " phone: " + user.phone);
  };

  return (
    <form className="event-target">
      <input
        name="id"
        type="text"
        onChange={handleInput}
        placeholder="id: Không được cập nhật"
      />
      <input
        name="phone"
        type="number"
        onChange={handleInput}
        value={user.phone}
        placeholder="phone: Được cập nhật"
      />
      //! id không có value nên bấm nút này ko dc cập nhật, còn phone thì có
      <button onClick={handleButton}>Update</button>
      <button onClick={handleAlert}>Alert</button>
    </form>
  );
}

export default EventTarget;
