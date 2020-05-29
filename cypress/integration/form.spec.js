describe('Form input',()=>{

    it('can navigate to the site',()=>{
        cy.visit('http://localhost:3000/login')
    }) 

    // get the input and type a name it and check the validation

    it('name input' ,()=>{
        cy.get('input[name="username"]')
        .type('w')
        .should('have.value', 'w')        
    }
        )


})