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
    lpAddress: "0x06673e42629081107aDF7B0E2551B2C7D45CD84e",
    token: {
      address: "0x927eFa8c553bC6bc7a4c65719Fa415fD3d17E6cE",
      name: "The Vefi Token",
      symbol: "VEF",
      decimals: 18,
      logoUrl: "https://i.imgur.com/9AIg0Ex.png",
      tax: 0
    }
  }
});
