import { useEffect } from "react";
import Script from "next/script";
import useRecapcha  from "./useRecapcha";

export default function Form({ children, home }) {

  const { grecaptcha, grecaptchaRef, onLoad } = useRecapcha();

  useEffect(() => {
    console.log("useEffect");
  }, []);

  return (
    <div>
      <Script
        src="https://www.google.com/recaptcha/api.js"
        strategy="lazyOnload"
        onLoad={onLoad}
      />
      <div id="recapcha" ref={grecaptchaRef} />
    </div>
  );
}
