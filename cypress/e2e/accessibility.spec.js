/// <reference types="Cypress" />

describe("Accessibility tests", () => {
    beforeEach(() => {
        cy.visit("/").get("main").injectAxe();
    })

    it("Has no detectable accessibility violations on Home page", () => {
        cy.checkA11y();
    })
})