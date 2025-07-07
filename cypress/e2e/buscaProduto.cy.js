describe('Teste de busca de produtos', () => {
  it('Realizar a buscar de um produto e exibir os resultados', () => {
    cy.visit('https://automationexercise.com');

    cy.contains('Products').click();

    cy.get('#search_product').type('shirt');
    cy.get('#submit_search').click();

    cy.contains('Searched Products').should('be.visible');
    cy.get('.productinfo.text-center').should('have.length.at.least', 1);
  });
});