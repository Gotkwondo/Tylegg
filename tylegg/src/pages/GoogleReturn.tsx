/** @jsxImportSource @emotion/react */
import React, { useEffect } from "react";
import { autholozationCodeType } from "types/login";

const GoogleReturn = () => {
  useEffect(() => {
    const currentUrl = window.location.href;
    const searchParams = new URL(currentUrl).searchParams;
    const code = searchParams.get("code");
    const returnState = searchParams.get("state");
    const prompt = searchParams.get("prompt");
    const scope = searchParams.get("scope");

    if (code) {
      window.opener.postMessage(
        { code, prompt, returnState, scope } as autholozationCodeType,
        window.location.origin
      );
    }
  }, []);

  return <div>googlereturn</div>;
};

/* STYLE */

export default GoogleReturn;
