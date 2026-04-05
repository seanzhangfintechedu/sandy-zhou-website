const data = window.siteData;

document.getElementById("hero-eyebrow").textContent = data.hero.eyebrow;
document.getElementById("hero-title").textContent = data.hero.title;
document.getElementById("hero-subtitle").textContent = data.hero.subtitle;
document.getElementById("hero-zh").textContent = data.hero.zh;
document.getElementById("hero-primary-link").href = data.hero.primaryLink;

const aboutCopy = document.getElementById("about-copy");
data.about.forEach((paragraph) => {
  const p = document.createElement("p");
  p.textContent = paragraph;
  aboutCopy.appendChild(p);
});

const workGrid = document.getElementById("work-grid");
data.work.forEach((item) => {
  const card = document.createElement("article");
  card.className = "work-card";
  card.innerHTML = `
    <h3 class="work-title">${item.title}</h3>
    <p class="work-desc">${item.desc}</p>
  `;
  workGrid.appendChild(card);
});

const programmeList = document.getElementById("programme-list");
data.programmes.forEach((item) => {
  const block = document.createElement("article");
  block.className = "programme-item";
  block.innerHTML = `
    <div class="programme-head">
      <div>
        <h3 class="programme-title">${item.title}</h3>
      </div>
      <div class="programme-type">${item.type}</div>
    </div>
    <p class="programme-desc">${item.desc}</p>
    <a class="programme-link" href="${item.link}" target="_blank" rel="noopener">${item.linkLabel} →</a>
  `;
  programmeList.appendChild(block);
});

const productGrid = document.getElementById("product-grid");
data.products.forEach((item) => {
  const card = document.createElement("article");
  card.className = "product-card";
  card.innerHTML = `
    <h3 class="product-title">${item.title}</h3>
    <p class="product-desc">${item.desc}</p>
  `;
  productGrid.appendChild(card);
});

const linkList = document.getElementById("link-list");
data.links.forEach((item) => {
  const link = document.createElement("a");
  link.className = "link-item";
  link.href = item.url;
  link.target = "_blank";
  link.rel = "noopener";
  link.innerHTML = `
    <div>
      <div class="link-label">${item.label}</div>
      <div class="link-note">${item.note}</div>
    </div>
    <div aria-hidden="true">→</div>
  `;
  linkList.appendChild(link);
});

const testimonialGrid = document.getElementById("testimonial-grid");
data.testimonials.forEach((item) => {
  const card = document.createElement("article");
  card.className = "testimonial-card";
  card.innerHTML = `
    <p>“${item.text}”</p>
    <div class="testimonial-name">${item.name}</div>
  `;
  testimonialGrid.appendChild(card);
});

const contactItems = document.getElementById("contact-items");
data.contact.forEach((item) => {
  const block = document.createElement("div");
  block.className = "contact-item";
  block.innerHTML = `
    <div class="contact-label">${item.label}</div>
    <div class="contact-value"><a href="${item.href}" target="_blank" rel="noopener">${item.value}</a></div>
  `;
  contactItems.appendChild(block);
});

document.getElementById("year").textContent = new Date().getFullYear();
