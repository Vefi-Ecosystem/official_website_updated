!(function (e) {
  if (typeof window !== "undefined") {
    if (window.EmbrCheckout && window.EmbrCheckout.init) {
      return window.EmbrCheckout.init(e);
    }
    const c = document.createElement("script");
    (c.type = "module"),
      (c.onload = () => window.EmbrCheckout.init(e)),
      (c.src = "https://static.embr.org/checkout.es.js"),
      document.querySelector("head").appendChild(c);
  }
})({
  debug: false,
  element: "#checkout",
  config: {
    chain: "brise",
    exchange: "sphynx",
    lpAddress: "0xe029763b4B98F657De029F2E5c2Af820c6a111B0",
    token: {
      address: "0xD6447d2fA919811c41a064bDbdaB1E281F8de9B2",
      name: "Vefi Ecosystem Token",
      symbol: "VEF",
      decimals: 18,
      logoUrl: "https://i.imgur.com/9AIg0Ex.png",
      tax: 0
    }
  }
});
