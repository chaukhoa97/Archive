/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-undef */
import { useState, useEffect } from 'react';

//? Async code 1 vs Async code 2
//* 1: Ở App.js (useEffect)
useEffect(() => {
  const sendCartData = async () => {
    dispatch(
      uiActions.showNotification({
        status: 'pending',
        title: 'Sending...',
        message: 'Sending cart data!',
      })
    );
    const sendRequest = async () => {
      const response = await fetch(
        'https://react-http-6b4a6.firebaseio.com/cart.json',
        {
          method: 'PUT',
          body: JSON.stringify(cart),
        }
      );
      if (!response.ok) {
        throw new Error('Sending cart data failed.');
      }
    };
    try {
      await sendRequest();
      dispatch(
        uiActions.showNotification({
          status: 'success',
          title: 'Success!',
          message: 'Sent cart data successfully!',
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: 'error',
          title: 'Error!',
          message: 'Sending cart data failed!',
        })
      );
    }
  };
  sendCartData();
}, [cart, dispatch]);

//* 2: Ở slice (Action Creator Thunk)
export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: 'pending',
        title: 'Sending...',
        message: 'Sending cart data!',
      })
    );
    const sendRequest = async () => {
      const response = await fetch(
        'https://react-http-6b4a6.firebaseio.com/cart.json',
        {
          method: 'PUT',
          body: JSON.stringify(cart),
        }
      );
      if (!response.ok) {
        throw new Error('Sending cart data failed.');
      }
    };
    try {
      await sendRequest();
      dispatch(
        uiActions.showNotification({
          status: 'success',
          title: 'Success!',
          message: 'Sent cart data successfully!',
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: 'error',
          title: 'Error!',
          message: 'Sending cart data failed!',
        })
      );
    }
  };
};

//? Persist a state in the local storage
const usePersistedState = (key, initialValue) => {
  const [value, setValue] = useState(initialValue);
  useEffect(() => {
    const existingValue = localStorage.getItem(key);
    if (existingValue !== null) {
      setValue(existingValue);
    }
  }, [key]);
  const setAndPersistValue = (newValue) => {
    setValue(newValue);
    localStorage.setItem(key, newValue);
  };
  return [value, setAndPersistValue];
};
// Usage
// const [name, setName] = usePersistedState('name', 'John Doe');

//? Get the user’s geolocation
// const useGeolocation = () => {
//   const [status, setStatus] = useState('pending');
//   const [latitude, setLatitude] = useState(undefined);
//   const [longitude, setLongitude] = useState(undefined);
//   useEffect(() => {
//     navigator.geolocation.getCurrentPosition(
//       (res) => {
//         setStatus('success');
//         setLatitude(res.coords.latitude);
//         setLongitude(res.coords.longitude);
//       },
//       (err) => {
//         console.log(err);
//         setStatus('error');
//       }
//     );
//   }, []);
//   return { status, latitude, longitude };
// };
// // Usage
// const { status, latitude, longitude } = useGeolocation();

// //? Get an element’s size
// const useElementSize = (elementRef) => {
//   const [width, setWidth] = useState(undefined);
//   const [height, setHeight] = useState(undefined);
//   useEffect(() => {
//     const resizeObserver = new ResizeObserver((entries) => {
//       for (let entry of entries) {
//         if (entry.contentRect) {
//           setWidth(entry.contentRect.width);
//           setHeight(entry.contentRect.height);
//         }
//       }
//     });
//     resizeObserver.observe(elementRef.current);
//     return () => {
//       resizeObserver.disconnect();
//     };
//   }, [elementRef]);
//   return [width, height];

// };
// // Usage
// const div = useRef()
// const [width, height] = useElementSize(div)
// <div style={{ resize: 'both' }} ref={div} />
