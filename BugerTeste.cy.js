describe('prova para QA', () => {
  beforeEach ( () => {
    cy.visit('https://buger-eats.vercel.app/');
  });
  it('CPF incorreto', () => {
    cy.get('a').click();
    cy.get(':nth-child(2) > :nth-child(2) > :nth-child(1) > input').type('Valnei');
    cy.get(':nth-child(2) > :nth-child(2) > :nth-child(2) > input').type('152');
    cy.get('.button-success').click();
    cy.get('.alert-error').should('contain.text', 'Oops! CPF inválido');
  });

  it('Obrigatoriedade CEP', () => {
    cy.get('a').click();
    cy.get(':nth-child(2) > :nth-child(2) > :nth-child(1) > input').type('Valnei Rezende');
    cy.get(':nth-child(2) > :nth-child(2) > :nth-child(2) > input').type('58234861525');
    cy.get(':nth-child(3) > :nth-child(1) > input').type('teste@teste.com');
    cy.get(':nth-child(3) > :nth-child(2) > input').type('67954265411');
    cy.get('.button-success').click();
    cy.get(':nth-child(2) > :nth-child(1) > .alert-error').should('contain.text', 'É necessário informar o CEP');
  });

  it('Cadastro com sucesso', () => {
    cy.get('a').click();
    cy.get(':nth-child(2) > :nth-child(2) > :nth-child(1) > input').type('Valnei Filho');
    cy.get(':nth-child(2) > :nth-child(2) > :nth-child(2) > input').type('54365216884');
    cy.get(':nth-child(3) > :nth-child(1) > input').type('valnei@teste.com');
    cy.get(':nth-child(3) > :nth-child(2) > input').type('11956455352');
    cy.get(':nth-child(3) > :nth-child(2) > :nth-child(1) > input').type('79020-100');
    cy.get(':nth-child(3) > :nth-child(2) > :nth-child(2) > input').click();
    cy.get(':nth-child(4) > :nth-child(1) > input').type('50');
    cy.get('.delivery-method > :nth-child(2)').click();
    cy.get('.dropzone').selectFile('exemplo.jpg', {
      action: 'drag-drop'
     });
    cy.get('.button-success').click();
    
  });

})