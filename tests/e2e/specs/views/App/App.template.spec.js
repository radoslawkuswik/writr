describe('App#template', () => {
  it('should render correctly', () => {
    const parent = '#app';
    const selectors = [
      '',
      'button.sidebar-button--download > img',
      'button.sidebar-button--stats > img',
      'button.sidebar-button--settings > img',
      'div.statusbar-item--words > span.statusbar-item__label',
      'div.statusbar-item--words > span.statusbar-item__value',
      'div.statusbar-item--pages > span.statusbar-item__label',
      'div.statusbar-item--pages > span.statusbar-item__value',
      'div.statusbar-item--paragraphs > span.statusbar-item__label',
      'div.statusbar-item--paragraphs > span.statusbar-item__value',
      'div.statusbar-item--characters > span.statusbar-item__label',
      'div.statusbar-item--characters > span.statusbar-item__value',
      'div.statusbar-clock',
      '#text-editor',
    ];

    cy.clearLocalStorage();
    cy.visit('/');

    selectors.forEach((selector) => {
      cy.get(`${parent} ${selector}`)
        .should('exist');
    });
  });
});
