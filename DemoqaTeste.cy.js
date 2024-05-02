describe('prova para QA', () => {
  beforeEach ( () => {
    cy.visit('https://demoqa.com/');
  });
  it('seleções corretas', () => {
    cy.get('.category-cards > :nth-child(1)').click();
    cy.get(':nth-child(1) > .element-list > .menu-list > #item-1').click();
    cy.get('.rct-collapse').click();
    cy.get('.rct-node-expanded > ol > :nth-child(1) > .rct-text > label > .rct-title').click();
    cy.get(':nth-child(2) > .rct-text > label > .rct-title').click();
    cy.get('#result').should('contain.text', 'You have selected : desktop notes commands documents workspace react angular veu office public private classified general');
  });

  it('criando tres tabelas', () => {
    cy.get('.category-cards > :nth-child(1)').click();
    cy.get(':nth-child(1) > .element-list > .menu-list > #item-3').click();
    cy.get('#addNewRecordButton').click();
    cy.get('#firstName').type('valnei');
    cy.get('#lastName').type('filho');
    cy.get('#userEmail').type('teste@teste.com');
    cy.get('#age').type('26');
    cy.get('#salary').type('500');
    cy.get('#department').type('contas');
    cy.get('#submit').click();

    cy.get('#addNewRecordButton').click();
    cy.get('#firstName').type('carlos');
    cy.get('#lastName').type('filho');
    cy.get('#userEmail').type('teste@teste.com');
    cy.get('#age').type('22');
    cy.get('#salary').type('700');
    cy.get('#department').type('contas');
    cy.get('#submit').click();

    cy.get('#addNewRecordButton').click();
    cy.get('#firstName').type('beto');
    cy.get('#lastName').type('filho');
    cy.get('#userEmail').type('teste@teste.com');
    cy.get('#age').type('24');
    cy.get('#salary').type('400');
    cy.get('#department').type('contas');
    cy.get('#submit').click();


  });



})