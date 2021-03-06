const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io"
  },
  footer: {
    copyright: "Copyright Great Idea! 2018"
  }
};

// Example: Update the img src for the logo

let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

let navItem = document.querySelectorAll("nav a");

//for loop won't let the rest of the JS run

for (let i = 1; i < navItem.length; i++) {
  navItem[i - 1].innerHTML = siteContent["nav"][`nav-item-${i}`];
  navItem[i - 1].style.color = "green";
}

let navLink = document.getElementsByTagName("nav")[0];
let createNode = addNav => {
  let newNavItem = document.createElement("a");
  newNavItem.innerHTML = addNav;
  newNavItem.style.color = "green";
  return newNavItem;
};

navLink.appendChild(createNode("Extra 1"));
navLink.appendChild(createNode("Extra 2"));

let ctaText = document.querySelector(".cta-text h1");
ctaText.innerText = siteContent["cta"]["h1"];

let ctaButton = document.querySelector(".cta-text button");
ctaButton.innerHTML = siteContent["cta"]["button"];

let ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute("src", siteContent["cta"]["img-src"]);

let topCHeader = document.querySelectorAll(".top-content h4");
topCHeader[0].innerHTML = siteContent["main-content"]["features-h4"];
topCHeader[1].innerHTML = siteContent["main-content"]["about-h4"];

let topCText = document.querySelectorAll(".top-content p");
topCText[0].innerHTML = siteContent["main-content"]["features-content"];
topCText[1].innerHTML = siteContent["main-content"]["about-content"];

let middleImg = document.getElementById("middle-img");
middleImg.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

let bottomCHeader = document.querySelectorAll(".bottom-content h4");
bottomCHeader[0].innerHTML = siteContent["main-content"]["services-h4"];
bottomCHeader[1].innerHTML = siteContent["main-content"]["product-h4"];
bottomCHeader[2].innerHTML = siteContent["main-content"]["vision-h4"];

let bottomCText = document.querySelectorAll(".bottom-content p");
bottomCText[0].innerHTML = siteContent["main-content"]["services-content"];
bottomCText[1].innerHTML = siteContent["main-content"]["product-content"];
bottomCText[2].innerHTML = siteContent["main-content"]["vision-content"];

let contactHeader = document.querySelector(".contact h4");
contactHeader.innerHTML = siteContent["contact"]["contact-h4"];

let contactInfo = document.querySelectorAll(".contact p");
contactInfo[0].innerHTML = siteContent["contact"]["address"];
contactInfo[1].innerHTML = siteContent["contact"]["phone"];
contactInfo[2].innerHTML = siteContent["contact"]["email"];

let footer = document.querySelector("footer p");
footer.innerHTML = siteContent["footer"]["copyright"];
