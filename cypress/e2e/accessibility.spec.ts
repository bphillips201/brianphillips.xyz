/// <reference types="Cypress" />

import language from "../../src/utils/language";

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
        cy.findByText(language.homePage.aboutMeLink)
            .click()
            .checkA11y()
    })

    it("Has no detectable a11y violations on the Blog page", () => {
        cy.findByText(language.homePage.viewBlog)
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
            .find('li:first-of-type a')
            .click()
            .checkA11y()
    })
})