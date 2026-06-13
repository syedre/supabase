import React, { useEffect, useRef, useState } from "react";

const Otp = () => {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const ref = useRef([]);
  const inputRef = useRef();

  const onKeyHandler = (e, index) => {
    const key = e.key;
    if (isNaN(key)) return;

    const newotp = [...otp];
    newotp[index] = key;
    setOtp(newotp);
    if (index + 1 < otp.length) {
      ref.current[index + 1].focus();
    }
    console.log(e);
  };

  useEffect(() => {
    // ref.current?.[0].focus();
    console.log(inputRef, "input ref");
  }, []);

  return (
    <div>
      {otp?.map((i, index) => {
        return (
          <input
            value={i}
            key={index}
            ref={(currRef) => (ref.current[index] = currRef)}
            onKeyDown={(e) => onKeyHandler(e, index)}
            type="text"
            onChange={() => {}}
          />
        );
      })}
      <br />
      <input ref={inputRef} placeholder="inp ref" />
    </div>
  );
};

export default Otp;
