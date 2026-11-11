// Shows one audience's plans at a time; #academic or #industry in the URL picks the starting one.
document.querySelectorAll("[data-pricing]").forEach(root => {
  const tabs = root.querySelectorAll(".pricing-switch-option");
  const panels = root.querySelectorAll(".pricing-audience");
  const show = id => {
    tabs.forEach(tab => tab.setAttribute("aria-selected", String(tab.dataset.audience === id)));
    panels.forEach(panel => { panel.hidden = panel.dataset.audience !== id; });
  };
  tabs.forEach(tab => tab.addEventListener("click", () => show(tab.dataset.audience)));
  const fromHash = [...tabs].find(tab => `#${tab.dataset.audience}` === location.hash);
  show((fromHash || tabs[0]).dataset.audience);
});
