const translations = {
  首页: "Home",
  产品: "Products",
  系列: "Collections",
  灵感: "Inspiration",
  关于我们: "About Us",
  联系我们: "Contact",
  "搜索产品...": "Search products...",
  正面: "Front",
  侧面: "Side",
  背面: "Back",
  细节: "Detail",
  "北欧系列 / 客厅家具": "Nordic Collection / Living Room",
  北欧实木休闲椅: "Nordic Oak Lounge Chair",
  "简约设计，舒适体验，适合各种家居空间":
    "Simple design, comfortable living, made for every home.",
  颜色: "Color",
  尺寸: "Size",
  单人位: "Single Seat",
  双人位: "Two Seat",
  数量: "Quantity",
  加入购物车: "Add to Cart",
  立即购买: "Buy Now",
  收藏: "Save",
  "预计 3–5 个工作日发货 · 提供上门安装服务":
    "Ships in 3–5 business days · White-glove delivery available",
  "查看 3D / AR 模型 →": "View 3D / AR Model →",
  产品详情: "Product Details",
  规格参数: "Specifications",
  材质说明: "Materials",
  人体工学设计: "Ergonomic Design",
  贴合身体曲线: "Follows the body curve",
  优质实木: "Premium Solid Wood",
  "坚固耐用，天然环保": "Durable and responsibly sourced",
  简约设计: "Minimal Design",
  百搭各种家居: "Easy to style with any interior",
  精湛工艺: "Crafted with Care",
  "细节精致，品质保证": "Refined details, quality assured",
  用户评价: "Customer Reviews",
  基于128条评价: "Based on 128 reviews",
  相关产品推荐: "You May Also Like",
  北欧实木餐桌: "Nordic Oak Dining Table",
  北欧实木边柜: "Nordic Oak Sideboard",
  北欧实木茶几: "Nordic Oak Coffee Table",
  北欧实木床: "Nordic Oak Bed",
  快速链接: "Quick Links",
  购买指南: "Buying Guide",
  配送与安装: "Delivery & Installation",
  退换货政策: "Returns & Exchanges",
  常见问题: "FAQ",
  关注我们: "Follow Us",
  订阅我们的新闻: "Newsletter",
  获取最新产品信息和优惠活动: "Get product news and offers",
  输入您的邮箱: "Enter your email",
  订阅: "Subscribe",
  购物车: "Your Cart",
  已加入购物车: "Added to cart",
  "电话：400-123-4567": "Tel: +86 400-123-4567",
  "邮箱：info@nordicliving.com": "Email: info@nordicliving.com",
  "地址：上海市静安区南京西路1266号": "Address: Jing’an District, Shanghai",
};
document.querySelectorAll("body *").forEach((el) => {
  if (el.children.length === 0) {
    let t = el.textContent.trim();
    if (translations[t])
      el.textContent = el.textContent.replace(t, translations[t]);
  }
  ["placeholder"].forEach((a) => {
    if (el.getAttribute(a) && translations[el.getAttribute(a)])
      el.setAttribute(a, translations[el.getAttribute(a)]);
  });
});
document.body.innerHTML = document.body.innerHTML
  .replace(
    "这款北欧实木休闲椅以简约的设计和优质的材质，为您的家居生活带来舒适与美感。精选优质橡木，经久耐用，天然纹理清晰可见，展现自然之美。",
    "This Nordic oak lounge chair combines simple design with durable materials, bringing comfort and quiet beauty to your home. Selected oak reveals a natural grain and lasting warmth.",
  )
  .replace(
    "人体工学设计，贴合身体曲线，提供舒适的支撑，让您在忙碌的生活中找到片刻的宁静与放松。",
    "Its ergonomic silhouette follows the body curve and provides supportive comfort for a calm moment in a busy day.",
  )
  .replace("购物车", "Your Cart")
  .replace("北欧实木休闲椅 × 1", "Nordic Oak Lounge Chair × 1");
document.title = "Haven Two Seat Sofa | NORDIC LIVING";
const drawer = document.querySelector(".drawer"),
  toast = document.querySelector(".toast");
document.querySelector(".cart").onclick = () => drawer.classList.add("open");
document.querySelector(".close").onclick = () =>
  drawer.classList.remove("open");
document.querySelector(".add").onclick = () => {
  document.querySelector(".cart b").textContent = "3";
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 1800);
};
document.querySelectorAll(".qty button").forEach(
  (b) =>
    (b.onclick = () => {
      let s = document.querySelector(".qty span");
      s.textContent = Math.max(1, +s.textContent + +b.dataset.step);
    }),
);
document.querySelectorAll(".swatches button,.sizes button").forEach(
  (b) =>
    (b.onclick = () => {
      b.parentElement
        .querySelectorAll("button")
        .forEach((x) => x.classList.remove("active"));
      b.classList.add("active");
    }),
);
document
  .querySelector('nav a[href="#cart"]')
  ?.addEventListener("click", (e) => {
    e.preventDefault();
    drawer.classList.add("open");
  });
document
  .querySelector(".menu")
  ?.addEventListener("click", () =>
    document.querySelector("header nav")?.classList.toggle("mobile-open"),
  );
document.querySelectorAll(".thumbs button").forEach((button) =>
  button.addEventListener("click", () => {
    document.querySelector("#mainProductImage").src = button.dataset.image;
    document
      .querySelectorAll(".thumbs button")
      .forEach((x) => x.classList.remove("active"));
    button.classList.add("active");
  }),
);
document
  .querySelector(".ar")
  .addEventListener("click", () =>
    document.querySelector("#model").scrollIntoView({ behavior: "smooth" }),
  );
document.querySelector(".ar-visible")?.addEventListener("click", async (e) => {
  const viewer = document.querySelector("#sofaViewer");
  const isiOS =
    /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
  if (isiOS) {
    return;
  }
  e.preventDefault();
  if (viewer?.activateAR) {
    try {
      await viewer.activateAR();
    } catch (e) {
      alert(
        "For AR, use Safari on iPhone or Chrome on an ARCore-supported Android phone.",
      );
    }
  } else {
    alert(
      "For AR, use Safari on iPhone or Chrome on an ARCore-supported Android phone.",
    );
  }
});
document.querySelectorAll(".match-tab").forEach((tab) =>
  tab.addEventListener("click", () => {
    document
      .querySelectorAll(".match-tab")
      .forEach((x) => x.classList.remove("active"));
    tab.classList.add("active");
    document.querySelector(".match-score").textContent =
      tab.dataset.score + "%";
    document.querySelector(".match-note").textContent = tab.dataset.note;
    document.querySelector(".match-bar i").style.width =
      tab.dataset.score + "%";
  }),
);
const lightbox = document.querySelector("#imageLightbox"),
  lightboxImage = document.querySelector("#lightboxImage"),
  heroImage = document.querySelector(".hero-img"),
  lightboxClose = document.querySelector(".lightbox-close");
heroImage?.addEventListener("click", () => {
  lightboxImage.src = document.querySelector("#mainProductImage").src;
  lightbox.classList.add("open");
  lightbox.setAttribute("aria-hidden", "false");
});
lightboxClose?.addEventListener("click", () => {
  lightbox.classList.remove("open");
  lightbox.setAttribute("aria-hidden", "true");
});
lightbox?.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    lightbox.classList.remove("open");
    lightbox.setAttribute("aria-hidden", "true");
  }
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && lightbox?.classList.contains("open")) {
    lightbox.classList.remove("open");
    lightbox.setAttribute("aria-hidden", "true");
  }
});
document.querySelectorAll(".tab-button").forEach((tab) =>
  tab.addEventListener("click", () => {
    const selected = tab.dataset.tab;
    document.querySelectorAll(".tab-button").forEach((x) => {
      const active = x === tab;
      x.classList.toggle("active", active);
      x.setAttribute("aria-selected", String(active));
    });
    document.querySelector(".detail-grid").hidden = selected !== "details";
    document
      .querySelectorAll(".tab-panel")
      .forEach((panel) => (panel.hidden = panel.dataset.panel !== selected));
  }),
);

const plannerBoard = document.querySelector("#floorBoard"),
  floorPlanSvg = document.querySelector("#floorPlanSvg"),
  allowedZoneEl = document.querySelector("#allowedZone"),
  plannerAnnotations = document.querySelector("#plannerAnnotations"),
  measureLine = document.querySelector("#measureLine"),
  drawPreview = document.querySelector("#drawPreview"),
  sofaMarker = document.querySelector("#sofaMarker"),
  placementStatus = document.querySelector("#placementStatus"),
  confirmPlacement = document.querySelector("#confirmPlacement"),
  scaleCheck = document.querySelector("#scaleCheck"),
  markTools = document.querySelector("#markTools");
const sofaLineArt =
  '<svg class="sofa-outline" viewBox="0 0 218 94" aria-hidden="true"><rect x="2" y="2" width="214" height="90" rx="13" fill="#f5f1e8" stroke="#2f302d" stroke-width="2.4"/><rect x="10" y="8" width="198" height="20" rx="8" fill="#ded8ca" stroke="#6e6b63" stroke-width="1.5"/><rect x="12" y="31" width="194" height="56" rx="11" fill="#eee9df" stroke="#6e6b63" stroke-width="1.5"/><path d="M109 32v54M17 35h184" stroke="#9a958b" stroke-width="1.4"/><path d="M16 52h190M16 69h190" stroke="#c1bbb0" stroke-width="1"/><path d="M10 29v56M208 29v56" stroke="#4c4d49" stroke-width="2.2"/><path d="M33 43q-14 8 0 24M185 43q14 8 0 24" fill="none" stroke="#8c877d" stroke-width="1.8"/><circle cx="72" cy="52" r="2" fill="#8c877d"/><circle cx="72" cy="70" r="2" fill="#8c877d"/><circle cx="146" cy="52" r="2" fill="#8c877d"/><circle cx="146" cy="70" r="2" fill="#8c877d"/></svg>';
const realSofaSize = { w: 2.18, h: 0.94 };
const plannerPlans = {
  compact: {
    label: "HK Compact 1-Bedroom",
    image: "assets/plans/hk-compact-1bed.svg",
    zone: { x: 40, y: 45.2, w: 50.2, h: 44.8 },
    start: { x: 62, y: 68 },
    obstacles: [],
  },
  family: {
    label: "HK 2-Bedroom Family Flat",
    image: "assets/plans/hk-family-2bed.svg?v=2",
    zone: { x: 30.5, y: 48.7, w: 61.7, h: 42.1 },
    start: { x: 59, y: 70 },
    obstacles: [
      { x: 30.4, y: 63.1, w: 7.7, h: 11, reason: "Blocks the kitchen door." },
    ],
  },
  external: {
    label: "HK Scale Test Plan",
    image: "assets/plans/hk-harmony-scale-test.png",
    zone: { x: 12, y: 12, w: 76, h: 76 },
    start: { x: 50, y: 52 },
    obstacles: [],
  },
};
let plannerState = {
  plan: "compact",
  x: 62,
  y: 68,
  rotation: 0,
  dragging: false,
  uploaded: false,
  scaleConfirmed: true,
  planConfirmed: true,
  tool: "move",
  calibrating: false,
  measuring: false,
  measureStart: null,
  measureEnd: null,
  pixelsPerMetre: null,
  customFootprint: null,
  drawStart: null,
  floorZones: [],
  obstacles: [],
  rugs: [],
  doorZones: [],
};
function plannerIsManual() {
  return plannerState.uploaded || plannerState.plan === "external";
}
function plannerApplyZone(zone) {
  if (!plannerBoard || !allowedZoneEl) return;
  allowedZoneEl.style.left = zone.x + "%";
  allowedZoneEl.style.top = zone.y + "%";
  allowedZoneEl.style.width = zone.w + "%";
  allowedZoneEl.style.height = zone.h + "%";
}
function plannerSofaBox() {
  const plan = plannerPlans[plannerState.plan],
    base = plannerState.customFootprint ||
      plan?.footprint || { w: 21.8, h: 13.43 },
    turned = plannerState.rotation % 180 !== 0,
    w = turned ? base.h : base.w,
    h = turned ? base.w : base.h;
  return {
    l: plannerState.x - w / 2,
    t: plannerState.y - h / 2,
    r: plannerState.x + w / 2,
    b: plannerState.y + h / 2,
    w,
    h,
  };
}
function plannerOverlaps(a, b) {
  return a.l < b.x + b.w && a.r > b.x && a.t < b.y + b.h && a.b > b.y;
}
function plannerContains(container, box) {
  return (
    box.l >= container.x &&
    box.t >= container.y &&
    box.r <= container.x + container.w &&
    box.b <= container.y + container.h
  );
}
function plannerToPercent(event) {
  const rect = plannerBoard.getBoundingClientRect();
  return {
    x: Math.min(
      100,
      Math.max(0, ((event.clientX - rect.left) / rect.width) * 100),
    ),
    y: Math.min(
      100,
      Math.max(0, ((event.clientY - rect.top) / rect.height) * 100),
    ),
  };
}
function plannerRectFromPoints(a, b) {
  return {
    x: Math.min(a.x, b.x),
    y: Math.min(a.y, b.y),
    w: Math.abs(a.x - b.x),
    h: Math.abs(a.y - b.y),
  };
}
function plannerZoneList() {
  return [
    ...plannerState.floorZones.map((zone) => ({ ...zone, type: "floor" })),
    ...plannerState.obstacles.map((zone) => ({ ...zone, type: "obstacle" })),
    ...plannerState.rugs.map((zone) => ({ ...zone, type: "rug" })),
    ...plannerState.doorZones.map((zone) => ({ ...zone, type: "door" })),
  ];
}
function plannerSetTool(tool) {
  plannerState.tool = tool;
  plannerState.calibrating = tool === "scale";
  plannerState.drawStart = null;
  plannerState.measuring = false;
  if (drawPreview) drawPreview.hidden = true;
  plannerBoard?.classList.toggle("calibrating", tool === "scale");
  plannerBoard?.classList.toggle(
    "annotating",
    ["floor", "obstacle", "rug", "door", "erase"].includes(tool),
  );
  document
    .querySelectorAll("#markTools [data-tool]")
    .forEach((btn) =>
      btn.classList.toggle("active", btn.dataset.tool === tool),
    );
  if (plannerIsManual() && placementStatus) {
    const messages = {
      scale:
        "Drag across a known distance on the plan, then enter its real length.",
      floor: "Drag rectangles over open floor areas where the sofa is allowed.",
      obstacle:
        "Drag rectangles over walls, fixed furniture, appliances, or existing objects.",
      rug: "Drag rectangles over rugs. Rugs are treated as placeable floor.",
      door: "Drag rectangles over door swing and door clearance areas.",
      erase: "Drag over existing review zones to remove them.",
      move: "Move and rotate the sofa after confirming the reviewed floor plan.",
    };
    placementStatus.className = "placement-status bad";
    placementStatus.textContent = messages[tool] || messages.move;
  }
}
function plannerResetManualReview() {
  plannerState.scaleConfirmed = false;
  plannerState.planConfirmed = false;
  plannerState.measureStart = null;
  plannerState.measureEnd = null;
  plannerState.pixelsPerMetre = null;
  plannerState.customFootprint = null;
  plannerState.floorZones = [];
  plannerState.obstacles = [];
  plannerState.rugs = [];
  plannerState.doorZones = [];
  plannerSetTool("move");
  if (measureLine) measureLine.hidden = true;
}
function plannerUpdateReviewUi() {
  const manual = plannerIsManual();
  if (scaleCheck) scaleCheck.hidden = !manual;
  if (markTools) markTools.hidden = !manual;
  plannerBoard?.classList.toggle("manual-review", manual);
}
function plannerUpdateSofaScale() {
  if (!plannerState.pixelsPerMetre || !plannerBoard) return;
  const rect = plannerBoard.getBoundingClientRect();
  plannerState.customFootprint = {
    w: ((realSofaSize.w * plannerState.pixelsPerMetre) / rect.width) * 100,
    h: ((realSofaSize.h * plannerState.pixelsPerMetre) / rect.height) * 100,
  };
}
function plannerRenderAnnotations() {
  if (!plannerAnnotations) return;
  plannerAnnotations.innerHTML = "";
  plannerZoneList().forEach((zone) => {
    const el = document.createElement("div");
    el.className = "annotation " + zone.type;
    el.style.left = zone.x + "%";
    el.style.top = zone.y + "%";
    el.style.width = zone.w + "%";
    el.style.height = zone.h + "%";
    const label = document.createElement("span");
    label.textContent =
      zone.type === "floor"
        ? "Floor"
        : zone.type === "rug"
          ? "Rug"
          : zone.type === "door"
            ? "Door"
            : "Block";
    el.appendChild(label);
    plannerAnnotations.appendChild(el);
  });
}
function plannerDrawMeasureLine() {
  if (
    !measureLine ||
    !plannerState.measureStart ||
    !plannerState.measureEnd ||
    !plannerBoard
  )
    return;
  const rect = plannerBoard.getBoundingClientRect(),
    start = plannerState.measureStart,
    end = plannerState.measureEnd,
    x1 = (start.x / 100) * rect.width,
    y1 = (start.y / 100) * rect.height,
    x2 = (end.x / 100) * rect.width,
    y2 = (end.y / 100) * rect.height,
    distance = Math.hypot(x2 - x1, y2 - y1),
    angle = (Math.atan2(y2 - y1, x2 - x1) * 180) / Math.PI;
  measureLine.hidden = false;
  measureLine.style.left = x1 + "px";
  measureLine.style.top = y1 + "px";
  measureLine.style.width = distance + "px";
  measureLine.style.transform = "rotate(" + angle + "deg)";
  measureLine.querySelector("span").textContent = Math.round(distance) + " px";
}
function plannerMeasurePixelDistance() {
  if (!plannerState.measureStart || !plannerState.measureEnd || !plannerBoard)
    return 0;
  const rect = plannerBoard.getBoundingClientRect(),
    x1 = (plannerState.measureStart.x / 100) * rect.width,
    y1 = (plannerState.measureStart.y / 100) * rect.height,
    x2 = (plannerState.measureEnd.x / 100) * rect.width,
    y2 = (plannerState.measureEnd.y / 100) * rect.height;
  return Math.hypot(x2 - x1, y2 - y1);
}
function plannerEraseZones(rect) {
  const overlapsRect = (zone) =>
    plannerOverlaps(
      {
        l: rect.x,
        t: rect.y,
        r: rect.x + Math.max(rect.w, 1),
        b: rect.y + Math.max(rect.h, 1),
      },
      zone,
    );
  plannerState.floorZones = plannerState.floorZones.filter(
    (zone) => !overlapsRect(zone),
  );
  plannerState.obstacles = plannerState.obstacles.filter(
    (zone) => !overlapsRect(zone),
  );
  plannerState.rugs = plannerState.rugs.filter((zone) => !overlapsRect(zone));
  plannerState.doorZones = plannerState.doorZones.filter(
    (zone) => !overlapsRect(zone),
  );
}
function plannerValidate() {
  if (!plannerBoard || !sofaMarker) return;
  const plan = plannerPlans[plannerState.plan],
    manual = plannerIsManual(),
    zone = manual ? plan.zone : plan.zone,
    box = plannerSofaBox();
  let reason = "";
  if (manual && !plannerState.scaleConfirmed)
    reason = "Calibrate the floor-plan scale before placing the sofa.";
  if (manual && !reason && !plannerState.planConfirmed)
    reason = "Confirm the reviewed floor plan zones before final placement.";
  if (
    !manual &&
    (box.l < zone.x ||
      box.t < zone.y ||
      box.r > zone.x + zone.w ||
      box.b > zone.y + zone.h)
  )
    reason = "The sofa overlaps a wall or leaves the living area.";
  if (!reason && manual) {
    const placeable = [...plannerState.floorZones, ...plannerState.rugs];
    const insideMarkedFloor = placeable.some((item) =>
      plannerContains(item, box),
    );
    const hitObstacle = plannerState.obstacles.find((item) =>
      plannerOverlaps(box, item),
    );
    const hitDoor = plannerState.doorZones.find((item) =>
      plannerOverlaps(box, item),
    );
    if (!placeable.length)
      reason = "Mark at least one Floor area or Rug area first.";
    else if (!insideMarkedFloor)
      reason = "Unknown or unmarked space is blocked by default.";
    else if (hitObstacle)
      reason = "The sofa overlaps an existing object or fixed fixture.";
    else if (hitDoor) reason = "The sofa blocks a door clearance zone.";
  }
  if (!reason && !manual) {
    const hit = plan.obstacles.find((item) => plannerOverlaps(box, item));
    if (hit) reason = hit.reason;
  }
  const ok = !reason;
  sofaMarker.classList.toggle("is-invalid", !ok);
  sofaMarker.classList.toggle("is-valid", ok);
  placementStatus.className = "placement-status " + (ok ? "good" : "bad");
  placementStatus.textContent = ok
    ? "Good placement — doors and circulation remain clear."
    : reason;
  confirmPlacement.disabled = !ok;
  return ok;
}
function plannerRender() {
  if (!plannerBoard || !floorPlanSvg || !sofaMarker) return;
  const plan = plannerPlans[plannerState.plan];
  plannerUpdateSofaScale();
  const footprint = plannerState.customFootprint ||
    plan?.footprint || { w: 21.8, h: 13.43 };
  sofaMarker.style.width = footprint.w + "%";
  sofaMarker.style.height = footprint.h + "%";
  floorPlanSvg.classList.toggle(
    "external-plan",
    plannerState.plan === "external",
  );
  if (!plannerState.uploaded) {
    floorPlanSvg.innerHTML =
      '<img src="' +
      plan.image +
      '" alt="' +
      plan.label +
      ' architectural floor plan">';
    plannerBoard.classList.remove("uploaded");
    floorPlanSvg.style.backgroundImage = "";
    plannerApplyZone(plan.zone);
  } else {
    floorPlanSvg.innerHTML = "";
    plannerApplyZone({ x: 12, y: 12, w: 76, h: 76 });
  }
  plannerUpdateReviewUi();
  plannerRenderAnnotations();
  plannerDrawMeasureLine();
  if (!sofaMarker.querySelector(".sofa-outline"))
    sofaMarker.innerHTML = sofaLineArt;
  sofaMarker.style.left = plannerState.x + "%";
  sofaMarker.style.top = plannerState.y + "%";
  sofaMarker.style.transform =
    "translate(-50%,-50%) rotate(" + plannerState.rotation + "deg)";
  plannerValidate();
}
function plannerSetPlan(name) {
  const plan = plannerPlans[name];
  if (!plan) return;
  plannerState.plan = name;
  plannerState.uploaded = false;
  if (name === "external") plannerResetManualReview();
  else {
    plannerState.scaleConfirmed = true;
    plannerState.planConfirmed = true;
    plannerState.customFootprint = null;
    plannerState.floorZones = [];
    plannerState.obstacles = [];
    plannerState.rugs = [];
    plannerState.doorZones = [];
    plannerSetTool("move");
  }
  plannerState.x = plan.start.x;
  plannerState.y = plan.start.y;
  document
    .querySelectorAll(".plan-option")
    .forEach((btn) =>
      btn.classList.toggle("active", btn.dataset.plan === name),
    );
  plannerRender();
}
document
  .querySelectorAll(".plan-option")
  .forEach((btn) =>
    btn.addEventListener("click", () => plannerSetPlan(btn.dataset.plan)),
  );
document.querySelector("#floorUpload")?.addEventListener("change", (event) => {
  const file = event.target.files?.[0];
  if (!file || !plannerBoard || !floorPlanSvg) return;
  const reader = new FileReader();
  reader.onload = () => {
    plannerState.uploaded = true;
    plannerState.plan = "external";
    plannerResetManualReview();
    plannerState.x = 50;
    plannerState.y = 52;
    document
      .querySelectorAll(".plan-option")
      .forEach((btn) => btn.classList.remove("active"));
    plannerBoard.classList.add("uploaded");
    floorPlanSvg.style.backgroundImage = 'url("' + reader.result + '")';
    plannerRender();
    document.querySelector("#scaleCheck")?.removeAttribute("hidden");
  };
  reader.readAsDataURL(file);
});
document.querySelector("#startScale")?.addEventListener("click", () => {
  plannerState.measureStart = null;
  plannerState.measureEnd = null;
  plannerState.scaleConfirmed = false;
  plannerState.measuring = false;
  plannerSetTool("scale");
  if (measureLine) measureLine.hidden = true;
});
document.querySelector("#confirmScale")?.addEventListener("click", () => {
  const value = Number(document.querySelector("#knownLength")?.value),
    unit = document.querySelector("#knownUnit")?.value || "m";
  if (!value || value <= 0) {
    alert("Enter a valid known length.");
    return;
  }
  if (!plannerState.measureStart || !plannerState.measureEnd || !plannerBoard) {
    alert("Draw a measure line on the floor plan first.");
    return;
  }
  const pixels = plannerMeasurePixelDistance(),
    metres =
      unit === "cm" ? value / 100 : unit === "ft" ? value * 0.3048 : value;
  if (pixels < 8 || metres <= 0) {
    alert("Use a longer visible measurement for a more reliable scale.");
    return;
  }
  plannerState.pixelsPerMetre = pixels / metres;
  plannerState.scaleConfirmed = true;
  plannerUpdateSofaScale();
  plannerSetTool("floor");
  plannerRender();
});
document
  .querySelectorAll("#markTools [data-tool]")
  .forEach((btn) =>
    btn.addEventListener("click", () => plannerSetTool(btn.dataset.tool)),
  );
document.querySelector("#confirmPlan")?.addEventListener("click", () => {
  if (!plannerState.scaleConfirmed) {
    alert("Calibrate the scale first.");
    return;
  }
  if (![...plannerState.floorZones, ...plannerState.rugs].length) {
    alert("Mark at least one usable Floor or Rug area first.");
    return;
  }
  plannerState.planConfirmed = true;
  plannerSetTool("move");
  plannerRender();
});
function plannerMoveFromEvent(event) {
  const rect = plannerBoard.getBoundingClientRect();
  plannerState.x = Math.min(
    98,
    Math.max(2, ((event.clientX - rect.left) / rect.width) * 100),
  );
  plannerState.y = Math.min(
    98,
    Math.max(2, ((event.clientY - rect.top) / rect.height) * 100),
  );
  plannerRender();
}
sofaMarker?.addEventListener("pointerdown", (event) => {
  if (plannerState.tool !== "move") return;
  event.preventDefault();
  plannerState.dragging = true;
  sofaMarker.setPointerCapture(event.pointerId);
  plannerMoveFromEvent(event);
});
plannerBoard?.addEventListener("pointerdown", (event) => {
  if (!plannerIsManual()) return;
  const point = plannerToPercent(event);
  if (plannerState.tool === "scale") {
    event.preventDefault();
    const pendingSecondPoint =
      plannerState.measureStart &&
      plannerState.measureEnd &&
      plannerMeasurePixelDistance() <= 3;
    if (pendingSecondPoint) plannerState.measureEnd = point;
    else {
      plannerState.measureStart = point;
      plannerState.measureEnd = point;
    }
    plannerState.measuring = true;
    plannerState.scaleConfirmed = false;
    plannerBoard.setPointerCapture(event.pointerId);
    plannerDrawMeasureLine();
    return;
  }
  if (event.target.closest(".sofa-marker")) return;
  if (
    !["floor", "obstacle", "rug", "door", "erase"].includes(plannerState.tool)
  )
    return;
  event.preventDefault();
  plannerState.drawStart = point;
  plannerBoard.setPointerCapture(event.pointerId);
});
plannerBoard?.addEventListener("pointermove", (event) => {
  if (plannerState.measuring && plannerState.measureStart) {
    plannerState.measureEnd = plannerToPercent(event);
    plannerDrawMeasureLine();
    return;
  }
  if (!plannerState.drawStart || !drawPreview) return;
  const rect = plannerRectFromPoints(
    plannerState.drawStart,
    plannerToPercent(event),
  );
  drawPreview.hidden = false;
  drawPreview.style.left = rect.x + "%";
  drawPreview.style.top = rect.y + "%";
  drawPreview.style.width = rect.w + "%";
  drawPreview.style.height = rect.h + "%";
});
plannerBoard?.addEventListener("pointerup", (event) => {
  if (plannerState.measuring) {
    plannerState.measuring = false;
    plannerState.measureEnd = plannerToPercent(event);
    if (plannerBoard.hasPointerCapture(event.pointerId))
      plannerBoard.releasePointerCapture(event.pointerId);
    plannerDrawMeasureLine();
    if (plannerMeasurePixelDistance() > 3) {
      placementStatus.className = "placement-status bad";
      placementStatus.textContent =
        "Measure line saved. Enter the real length and press Confirm Scale.";
    } else {
      placementStatus.className = "placement-status bad";
      placementStatus.textContent =
        "First point saved. Click the second endpoint or drag a measure line.";
    }
    return;
  }
  if (!plannerState.drawStart) return;
  const rect = plannerRectFromPoints(
    plannerState.drawStart,
    plannerToPercent(event),
  );
  plannerState.drawStart = null;
  if (drawPreview) drawPreview.hidden = true;
  if (plannerBoard.hasPointerCapture(event.pointerId))
    plannerBoard.releasePointerCapture(event.pointerId);
  if (rect.w < 1 || rect.h < 1) return;
  plannerState.planConfirmed = false;
  if (plannerState.tool === "erase") plannerEraseZones(rect);
  if (plannerState.tool === "floor") plannerState.floorZones.push(rect);
  if (plannerState.tool === "obstacle") plannerState.obstacles.push(rect);
  if (plannerState.tool === "rug") plannerState.rugs.push(rect);
  if (plannerState.tool === "door") plannerState.doorZones.push(rect);
  plannerRender();
});
plannerBoard?.addEventListener("pointercancel", (event) => {
  plannerState.measuring = false;
  plannerState.drawStart = null;
  if (drawPreview) drawPreview.hidden = true;
  if (plannerBoard.hasPointerCapture(event.pointerId))
    plannerBoard.releasePointerCapture(event.pointerId);
});
sofaMarker?.addEventListener("pointermove", (event) => {
  if (plannerState.dragging) plannerMoveFromEvent(event);
});
sofaMarker?.addEventListener("pointerup", (event) => {
  plannerState.dragging = false;
  sofaMarker.releasePointerCapture(event.pointerId);
  plannerValidate();
});
document.querySelector("#rotateLeft")?.addEventListener("click", () => {
  plannerState.rotation = (plannerState.rotation + 270) % 360;
  plannerRender();
});
document.querySelector("#rotateRight")?.addEventListener("click", () => {
  plannerState.rotation = (plannerState.rotation + 90) % 360;
  plannerRender();
});
confirmPlacement?.addEventListener("click", () => {
  if (plannerValidate()) {
    placementStatus.className = "placement-status good";
    placementStatus.textContent =
      "Placement saved for preview. You can still drag or rotate to adjust.";
  }
});
window.addEventListener("resize", plannerValidate);
plannerRender();
