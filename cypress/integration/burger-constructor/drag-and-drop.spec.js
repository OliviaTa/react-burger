describe('drag and drop is working', function () {
    before(() => {
        cy.visit('http://localhost:3000');
    });

    it('bun should be dropped in burger constructor', function () {
        cy.get('[class^=ingredient-item_item__]').first().trigger('dragstart');
        cy.get('[class^=burger-constructor_wrapper]').trigger('drop');
    });

    it('ingredient should be dropped in burger constructor', function () {
        cy.get('[class^=ingredient-item_item__]').last().trigger('dragstart');
        cy.get('[class^=burger-constructor_wrapper]').trigger('drop');
    });
});