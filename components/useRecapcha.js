// import
import React, { useCallback, useRef, useState } from 'react';

// definition
export default () => {
  const grecaptchaRef = useRef(null);
  const [grecaptcha, setGrecaptcha] = useState(null);

  return {
    grecaptcha,
    grecaptchaRef,
    onLoad: useCallback(() => {
      const grecaptchaFunc = window.grecaptcha;
      console.log("onLoad", grecaptchaFunc);
      if (!grecaptchaFunc) return;

      grecaptchaFunc.ready(() => {
        console.log("ready");
        if (!grecaptchaRef.current) return;
        console.log("grecaptchaRef.current");
        grecaptchaFunc.render(grecaptchaRef.current, {
          sitekey: '6LeMNdwiAAAAAGuW4Y5DZBJF6--HaIl-XguiZEsU',
        });

        setGrecaptcha(grecaptchaFunc);
      });
    }, []),
  };
};