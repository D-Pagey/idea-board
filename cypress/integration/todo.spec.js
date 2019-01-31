import { sel } from '../utils';

context('Todo', () => {
  beforeEach(() => cy.visit('/'));

  it('should be able to add a todo', () => {
    cy.get(sel('add-todo')).click();
    cy.get(sel('board')).children().last().find('input')
      .should('have.value', 'Genius idea #3');
  });
});
