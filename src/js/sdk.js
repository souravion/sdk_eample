class IconSDK {
  constructor(icons, containerId, buttonId) {
    this.icons = icons;
    this.containerId = containerId;
    this.buttonId = buttonId;
  }

  init() {
    const container = document.getElementById(this.containerId);
    const button = document.getElementById(this.buttonId);
    const handleClickOutside = (event) => {
      if (!container.contains(event.target) && event.target !== button) {
        container.classList.remove("show");
      }
    };

    button.addEventListener("click", () => {
      container.classList.toggle("show");
    });

    document.addEventListener("click", handleClickOutside);
    alert('HI')
    this.icons.forEach((icon) => {
      const iconLink = document.createElement("a");
      iconLink.classList.add("icon-link");
      iconLink.href = icon.url;
      iconLink.target = "_blank";

      const iconElement = document.createElement("div");
      iconElement.classList.add("icon");

      const iconImage = document.createElement("img");
      iconImage.src = icon.icon;
      iconImage.alt = icon.title;
      iconElement.appendChild(iconImage);

      const iconTitle = document.createElement("p");
      iconTitle.innerText = icon.title;
      iconElement.appendChild(iconTitle);

      iconLink.appendChild(iconElement);
      container.appendChild(iconLink);
    });
  }
}

const icons = [
  { title: "StockEdge WebApp", icon: "https://web.stockedge.com/assets/img/stockedge-products/stockedge-logo.png", url: "https://web.stockedge.com/app/equities" },
  { title: "StockEdge Social", icon: "https://web.stockedge.com/assets/img/stockedge-products/se-social-logo.png", url: "https://social.stockedge.com/" },
  { title: "StockEdge Website", icon: "https://web.stockedge.com/assets/img/stockedge-products/stockedge-logo.png", url: "https://web.stockedge.com/app/equities" },
];

const containerId = "icon-list";
const buttonId = "show-icons-button";
const iconSDK = new IconSDK(icons, containerId, buttonId);
iconSDK.init();
