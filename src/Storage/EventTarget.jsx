import { useState } from 'react';

function EventTarget(props) {
  const [user, setUser] = useState({ id: '', phone: '' });
  const userHandler = (e) => {
    console.log(e);
    const { name, value } = e.target; //* { name: ['id' / 'phone'] ; value: <what we type in> }
    setUser({ ...user, [name]: value });
  };

  const handleValueChange = () => {
    setUser({ id: 100, phone: 100 });
  };
  return (
    //! id không có value nên sẽ ko dc cập nhật, còn phone thì có
    <form className="event-target">
      <h1>event.target</h1>
      <input
        type="text"
        onChange={userHandler}
        placeholder="id: Không được cập nhật"
        name="id"
      />
      <input
        type="number"
        onChange={userHandler}
        name="phone"
        value={user.phone}
        placeholder="phone: Được cập nhật"
      />
      <input
        type="button"
        value="setUser({ id: 100, phone: 100 })"
        onClick={handleValueChange}
      />
    </form>
  );
}

export default EventTarget;
