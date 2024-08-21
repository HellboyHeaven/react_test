import React, { useEffect } from "react";

export default function Policy() {
    useEffect(() => {
      const script = document.createElement("script");
      script.src = "https://app.termly.io/embed-policy.min.js";
      script.async = true;
      document.body.appendChild(script);
    }, []);  return (
      <div
        name="termly-embed"
        data-id="43904e5f-c5ed-4170-800a-74e5246a8675"
        data-type="iframe"
      ></div>
    );
  }
  