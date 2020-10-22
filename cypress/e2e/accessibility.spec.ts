/// <reference types="Cypress" />

describe("Accessibility tests", () => {
    beforeEach(() => {
        cy.visit("/").get("main").injectAxe();
    })

    after(() => {
        cy.visit("/");
    })

    it("Has no detectable a11y violations on the home page", () => {
        cy.checkA11y();
    })

    it("Has no detectable a11y violations on the About page", () => {
        cy.findByText(/learn more/i)
            .click()
            .checkA11y()
    })

    it("Has no detectable a11y violations on the Blog page", () => {
        cy.findByText(/view blog/i)
            .click()
            .checkA11y()
    })

    it("Has no detectable a11y violations on a Post page", () => {
        cy.findByTestId('post-first')
            .click()
            .checkA11y()
    })

    it("Has no detectable a11y violations on a Category page", () => {
        cy.findByTestId('category-list')
            .findByText(/musings/i)
            .click()
            .checkA11y()
    })
})