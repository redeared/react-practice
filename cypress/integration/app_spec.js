describe('App', () => {
    it('should open main page with "No films found"', () => {
        cy.visit('http://localhost:8080/');
        cy.contains('No films found');
    });

    it('should type "action" inside input and start search by "Enter" press', () => {
        cy.get('input')
            .type('Action')
            .type('{enter}');
        cy.contains('Sort by');
    });

    it('should clear search result', () => {
        cy.get('input')
            .type('{selectall}{del}')
            .type('{enter}');
        cy.contains('No films found');
    });

    it('should run "comedy" search by clicking on search button', () => {
        cy.get('input')
            .type('comedy');
        cy.get('button').last().click();
        cy.contains('Sort by');
    });
});
