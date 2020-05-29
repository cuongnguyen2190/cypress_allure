class Page {
    public pause(ms): void {
        cy.wait(ms)
    }

    public getElement(locator: string): Cypress.Chainable {
        return cy.get(locator)
    }
    
    public logInfo(message): void {
        cy.log(message)
    }

    public setMobileViewport(): void {
        cy.viewport('iphone-x')
    }

    public setTabletViewport(): void {
        cy.viewport('ipad-2')
    }

    public setDesktopViewport(): void {
        cy.viewport('macbook-13')
    }

    public setLargeDesktopViewport(): void {
        cy.viewport(1980, 1080)
    }
}

export = Page;