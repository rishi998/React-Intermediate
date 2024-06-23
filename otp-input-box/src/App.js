// import React, { useRef, useState } from "react";
import "./App.css";
// export default function App() {
//   const [otp, setotp] = useState(["", "", "", ""]);
//   const inputRefs = useRef([]);

import { useRef, useState } from "react";

//   function handlechange(index, value) {
//     // 1. update the otp array
//     const newotp = [...otp];
//     newotp[index] = value;

//     //2. move focus to the next box
//     if (value && index < otp.length - 1) {
//       inputRefs.current[index + 1].focus();
//     }

//     // 3. update the otp state.
//     setotp(newotp);
//   }

//   function handleKeyDown(index, e) {
//     if (e.key === "Backspace" && index > 0 && !otp[index]) {
//       const newotp = [...otp];

//       // clear previous digit
//       newotp[index - 1] = "";
//       inputRefs.current[index - 1].focus();
//       setotp(newotp);
//     }
//   }
//   return (
//     <div className="app">
//       <h2>OTP Verification</h2>
//       <p>Enter the 4-digit OTP you have received</p>
//       <div className="otp-container">
//         {otp.map((digit, index) => (
//           <input
//             key={index}
//             className="otp-input"
//             type="text"
//             maxLength={1}
//             value={digit}
//             autoFocus={index === 0}
//             ref={(ref) => (inputRefs.current[index] = ref)}
//             onChange={(e) => handlechange(index, e.target.value)}
//             onKeyDown={(e) => handleKeyDown(index, e)}
//           ></input>
//         ))}
//       </div>
//     </div>
//   );
// }

export default function App() {
  const [otp, setotp] = useState(["", "", "", ""]);
  const inputref = useRef([]);

  function handlechange(index, value) {
    const newotp = [...otp];
    newotp[index] = value;

    if (value && index < otp.length - 1) {
      inputref.current[index + 1].focus();
    }

    setotp(newotp);
  }

  function handlekeydown(index, e) {
    if (e.key === "Backspace" && index > 0 && !otp[index]) {
      const newotp = [...otp];
      newotp[index - 1] = "";
      inputref.current[index - 1].focus();
      setotp(newotp);
    }
  }

  return (
    <div className="app">
      <h2>OTP - App</h2>
      <p>Enter the One tine password you receivedjust now!</p>
      <div className="top-container">
        {otp.map((digit, index) => (
          <input
            key={index}
            value={digit}
            className="otp-input"
            maxLength={1}
            autoFocus={index === 0}
            ref={(ref) => (inputref.current[index] = ref)}
            onChange={(e) => handlechange(index, e.target.value)}
            onKeyDown={(e) => handlekeydown(index, e)}
          ></input>
        ))}
      </div>
    </div>
  );
}
