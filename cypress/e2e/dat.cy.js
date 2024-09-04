describe('API Tests', () => {

    const requestBody = {
        user_id: 545800,
        action: "create",
        data: {
            name: "Sample Servicee",
            type: "example"
        }
    };

    const interceptUrl = 'https://sumome.com/services';



    
    it('API Call & Response Validation', () => {
                   
                   cy.intercept('POST', interceptUrl, (req) => {
                    
                    expect(req.body).to.deep.equal(requestBody);
                    
                    req.reply({
                        statusCode: 200,
                        body: {
                            created_at: "2018-01-31T10:00:00Z",
                            updated_at: "2024-08-29T12:00:00Z",
                        },
                    });
                }).as('apiRequest');
            
        
        // cy.visit(intercepUrl); 

            });
    
            it('Display Rules Extraction', () => {
                cy.intercept('POST', interceptUrl).as('apiRequest');
                
                
                // cy.visit(interceptUrl);
                
                cy.wait('@apiRequest').then((interception) => {
                    const responseBody = interception.response.body;

const displayRules = responseBody.display_rules.find(rule => rule.path === 'industry-trends/trendlines');
            
expect(displayRules).to.not.be.undefined;

const elementIds = {
    id: displayRules.id,
    site_id: displayRules.site_id,
    app_id: displayRules.app_id,
    object_id: displayRules.object_id,
    group_id: displayRules.group_id
};
cy.log('Element IDs:', elementIds);
});
});
it('Time Difference Calculation', () => {
    cy.intercept('POST', interceptUrl, (req) => {
        req.reply({
            statusCode: 200,
            body: {
                created_at: "2018-01-31T10:00:00Z",
                updated_at: "2024-08-29T12:00:00Z",
            },
        });
    }).as('apiRequest');

    
    cy.request({
        method: 'POST',
        url: interceptUrl,
        body: requestBody,
    });

    cy.wait('@apiRequest').then((interception) => {
        const responseBody = interception.response.body;
        
        const createdAt = new Date(responseBody.created_at);
        const updatedAt = new Date(responseBody.updated_at);

        const timeDifference = updatedAt - createdAt;

        cy.log('Time Difference (ms):', timeDifference);
        
   });
});

});