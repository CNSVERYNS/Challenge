export const acceptCookies = () => {
    cy.get('#onetrust-accept-btn-handler').click()
  };

export const clickProducts = () => {
    cy.get('#menu-item-11327').click();
}

/*
export const clickLoadBoards = () => {
    cy.get('.dropdown-item.final_level:hidden').eq(0).click({force:true});;
}

export const clickCombo = () => {
    cy.get('#combo-tab').scrollIntoView().click();
}
*/
