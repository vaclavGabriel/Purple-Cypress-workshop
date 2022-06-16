describe('My first test', () => {
    it('Does not do much', () => {
        cy.setCookie('__kwc_agreed', 'true')
        cy.setCookie('darwin_mock_name', 'ANCILLARY_BUNDLING')
        cy.setCookie('darwin_mock_value', 'off')
        cy.visit('https://kiwi.com/u/958gt6')
    })
})