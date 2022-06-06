const registerServiceWorker = () => {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker
      .register("/firebase-messaging-sw.js", {
        type: "module",
        scope: "/firebase-cloud-messaging-push-scope",
      })
      .then(function (registration) {
        console.log("Registration successful, scope is:", registration.scope);
      })
      .catch(function (err) {
        console.log("Service worker registration failed, error:", err);
      });
  }
};

export { registerServiceWorker };
