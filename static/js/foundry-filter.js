(() => {
  const selectors = document.querySelector('.foundry-selectors');
  if (!selectors) return;

  const buttons = selectors.querySelectorAll('[data-foundry-filter]');
  const foundries = document.querySelectorAll('[data-foundry-technologies]');
  const status = document.getElementById('foundry-filter-status');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const technology = button.dataset.foundryFilter;
      let visibleCount = 0;
      foundries.forEach(foundry => {
        foundry.hidden = technology !== 'all' &&
          !foundry.dataset.foundryTechnologies.split(' ').includes(technology);
        if (!foundry.hidden) visibleCount++;
      });
      buttons.forEach(option => {
        option.setAttribute('aria-pressed', String(option === button));
      });
      status.textContent = `${visibleCount} foundries shown for ${button.textContent}.`;
    });
  });
  selectors.hidden = false;
})();
