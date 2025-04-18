$(function () {
  fetch("js/container1.json")
    .then((res) => res.json())
    .then((container1) => {
      const section = document.querySelector(".section1");
      section.innerHTML = "";

      container1.forEach((item) => {
        const box = document.createElement("div");
        box.classList.add("box1");

        const a = document.createElement("a");
        a.href = "sub.html";
        a.target = "_self";

        const img = document.createElement("img");
        img.src = item.img;
        img.alt = "";
        img.classList.add("mainimg");

        const h3 = document.createElement("h3");
        h3.textContent = item.title;

        const h2 = document.createElement("h2");
        if (item.discount) {
          const span = document.createElement("span");
          span.textContent = item.discount + " ";
          h2.appendChild(span);
        }
        h2.append(item.price);

        a.appendChild(img);
        const cart = document.createElement("img");
        cart.src = "img/cart.png";
        cart.alt = "";
        cart.classList.add("cartimg");
        a.appendChild(cart);
        a.append(h3, h2);

        if (item.original) {
          const h4 = document.createElement("h4");
          h4.textContent = item.original;
          a.appendChild(h4);
        }

        box.appendChild(a);
        section.appendChild(box);
      });
    })
    .catch((err) => console.error("상품 로딩 오류:", err));

  $(document).on("mouseenter", ".box1, .box3, .box5", function () {
    $(this).find(".cartimg").stop().fadeIn(400);
  });
  $(document).on("mouseleave", ".box1, .box3, .box5", function () {
    $(this).find(".cartimg").stop().fadeOut(400);
  });

  fetch("js/container3.json")
    .then((res) => res.json())
    .then((products) => {
      const section = document.querySelector(".section3");
      section.innerHTML = "";

      products.forEach((item) => {
        const box = document.createElement("div");
        box.classList.add("box3");

        const a = document.createElement("a");
        a.href = "sub.html";
        a.target = "_self";

        const img = document.createElement("img");
        img.src = item.img;
        img.alt = "";
        img.classList.add("mainimg");

        const cart = document.createElement("img");
        cart.src = "img/cart.png";
        cart.alt = "";
        cart.classList.add("cartimg");

        const h3 = document.createElement("h3");
        h3.textContent = item.title;

        const h2 = document.createElement("h2");
        if (item.discount) {
          const span = document.createElement("span");
          span.textContent = item.discount + " ";
          h2.appendChild(span);
        }
        h2.append(item.price);

        const h4 = document.createElement("h4");
        h4.textContent = item.original || "";

        a.append(img, cart, h3, h2, h4);
        box.appendChild(a);
        section.appendChild(box);
      });
    })
    .catch((err) => console.error("상품 로딩 오류:", err));

  fetch("js/container5.json")
    .then((res) => res.json())
    .then((container1) => {
      const section = document.querySelector(".section5");
      section.innerHTML = "";

      container1.forEach((item) => {
        const box = document.createElement("div");
        box.classList.add("box5");

        const a = document.createElement("a");
        a.href = "sub.html";
        a.target = "_self";

        const img = document.createElement("img");
        img.src = item.img;
        img.alt = "";
        img.classList.add("mainimg");

        const h3 = document.createElement("h3");
        h3.textContent = item.title;

        const h2 = document.createElement("h2");
        if (item.discount) {
          const span = document.createElement("span");
          span.textContent = item.discount + " ";
          h2.appendChild(span);
        }
        h2.append(item.price);

        a.appendChild(img);
        const cart = document.createElement("img");
        cart.src = "img/cart.png";
        cart.alt = "";
        cart.classList.add("cartimg");
        a.appendChild(cart);
        a.append(h3, h2);

        if (item.original) {
          const h4 = document.createElement("h4");
          h4.textContent = item.original;
          a.appendChild(h4);
        }

        box.appendChild(a);
        section.appendChild(box);
      });
    })
    .catch((err) => console.error("상품 로딩 오류:", err));
});
