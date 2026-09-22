"use client";

import { useEffect } from "react";

export default function HubSpotContactForm() {
  useEffect(() => {
    const scriptId = "hubspot-form-script";

    // Prevent loading the script multiple times
    if (document.getElementById(scriptId)) {
      return;
    }

    const script = document.createElement("script");

    script.id = scriptId;
    script.src = "https://js-na2.hsforms.net/forms/embed/247302516.js";
    script.defer = true;

    document.body.appendChild(script);

    return () => {
      // Keep HubSpot script loaded
    };
  }, []);

  return (
    <div
      className="hs-form-frame"
      data-region="na2"
      data-form-id="9bf3c630-7037-46da-97cc-222576df3bc7"
      data-portal-id="247302516"
    />
  );
}