import { acceptCookies, clickProducts } from "../support/commands";

describe('DAT UI', () => {
  Cypress.on('uncaught:exception', (err, runnable) => {   
      return false;
  });
    
  const baseUrl = Cypress.env('base_url');

  const testData = [
    {
      formerName: 'Formerly Power Select Broker/Carrier'
    }
    
  ];

  it('Load Board Validation', () => {
      cy.visit(baseUrl);

      acceptCookies;
      clickProducts;
      cy.get('.dropdown-item.final_level:hidden').eq(0).click({force:true});
      cy.get('#combo-tab').scrollIntoView().click();

      cy.get('#jet-tabs-content-1873').find('.eae-table-1')
        .should('contain.text', testData[0].formerName);
  });

});
