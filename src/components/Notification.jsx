// import React from 'react'
// import { IoNotifications } from 'react-icons/io5'

// const Notification = ({ message, onClose }) => {

//   return (
//     <div>
//       <div className='bg-white p-4 w-14 rounded-full hover:bg-slate-900 hover:text-lime-400 transition-all ease-in-out duration-400'>
//         <span className='text-2xl'>
//           <IoNotifications />
//         </span>
//       </div>
//     </div>
//   )
// }

// export default Notification

import React from "react";
import { IoNotifications } from "react-icons/io5";
import { BiX } from "react-icons/bi";
import { useState } from "react";

const Notification = () => {
  const [notifications, setNotifications] = useState([
    { id: 1, message: "New message from John" },
    { id: 2, message: "Your order has been shipped" },
    { id: 3, message: "Reminder: Meeting at 3 PM" },
  ]);

  const [showPopup, setShowPopup] = useState(false);

  const handleBellClick = () => {
    setShowPopup(!showPopup);
  };

  const handleRemovingNotification = (id) => {
    setNotifications(
      notifications.filter((notification) => notification.id !== id)
    );
  };

  return (
    <div className="relative">
      <button onClick={handleBellClick} className="relative p-3 bg-white rounded-full">
        <span className="material-icons text-2xl"><IoNotifications /></span>
        {notifications.length > 0 && (
          <span className="absolute top-2 right-2 bg-lime-400 text-white rounded-full text-xs  px-1">
            {notifications.length}
          </span>
        )}
      </button>

      {showPopup && (
        <div className="absolute right-0 mt-2 w-64 bg-white shadow-lg rounded-lg z-10">
          <ul className="max-h-48 overflow-y-auto">
            {notifications.map((notification) => (
              <li
                key={notification.id}
                className="flex justify-between items-center p-2 border-b"
              >
                <span>{notification.message}</span>
                <button
                  onClick={() => handleRemoveNotification(notification.id)}
                  className="text-red-500"
                >
                  <BiX />
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Notification;
