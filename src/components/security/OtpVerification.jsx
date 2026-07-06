import { useEffect, useState } from "react";
import OtpInput from "react-otp-input";

function OtpVerification({
  phone,
  verified,
  setVerified,
}) {
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [timer, setTimer] = useState(0);

  const sendOTP = () => {
    if (!phone) {
      alert("Please enter mobile number first.");
      return;
    }

    setOtp("");
    setOtpSent(true);
    setVerified(false);
    setTimer(60);

    alert("Dummy OTP : 123456");
  };

  useEffect(() => {
    if (timer <= 0) return;

    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timer]);

  const verifyOTP = () => {
    if (otp === "123456") {
      setVerified(true);
      alert("Mobile Verified Successfully");
    } else {
      alert("Invalid OTP");
    }
  };

  return (
    <div className="space-y-4">

      {!otpSent ? (
        <button
          type="button"
          onClick={sendOTP}
          className="w-full bg-blue-900 hover:bg-blue-800 text-white py-3 rounded-xl font-semibold transition"
        >
          Send OTP
        </button>
      ) : (
        <>
          <OtpInput
            value={otp}
            onChange={setOtp}
            numInputs={6}
            renderSeparator={<span className="w-2"></span>}
            renderInput={(props) => (
              <input
                {...props}
                className="!w-12 !h-12 border rounded-xl text-center text-lg"
              />
            )}
          />

          {!verified && (
            <button
              type="button"
              onClick={verifyOTP}
              className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold transition"
            >
              Verify OTP
            </button>
          )}

          {verified && (
            <div className="bg-green-100 text-green-700 rounded-xl py-3 text-center font-semibold">
              ✅ Mobile Number Verified
            </div>
          )}

          {!verified && timer > 0 && (
            <p className="text-center text-gray-500">
              Resend OTP in {timer}s
            </p>
          )}

          {!verified && timer === 0 && (
            <button
              type="button"
              onClick={sendOTP}
              className="text-blue-900 font-semibold"
            >
              Resend OTP
            </button>
          )}
        </>
      )}
    </div>
  );
}

export default OtpVerification;