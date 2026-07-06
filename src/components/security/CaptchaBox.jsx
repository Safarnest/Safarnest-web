import { Turnstile } from "@marsidev/react-turnstile";

function CaptchaBox({
  verified,
  setVerified,
}) {
  return (
    <div className="space-y-4">

      <Turnstile
        siteKey="1x00000000000000000000AA"
        onSuccess={() => {
          setVerified(true);
        }}
        onError={() => {
          setVerified(false);
        }}
        onExpire={() => {
          setVerified(false);
        }}
      />

      {verified && (
        <div className="bg-green-100 text-green-700 py-3 rounded-xl text-center font-semibold">
          ✅ CAPTCHA Verified
        </div>
      )}

    </div>
  );
}

export default CaptchaBox;