
describe('register',()=>{

    it('can navigate to the site',()=>{
        cy.visit('http://localhost:3000/login')
    }) 

    it('click register link',()=>{
        cy.get('.registerLink')
        .click();
        cy.get('input[name="name"]')
        .type('abcde')
        cy.get('input[name="username"]')
        .type('abcde')
        cy.get('input[name="password"]')
        .type('abcde')
        cy.get('.registerButton')
        .click()
        
    })
})

describe('Form input',()=>{

    it('can navigate to the site',()=>{
        cy.visit('http://localhost:3000/login')
    }) 

    // get the input and type a name it and check the validation

    it('name input' ,()=>{
        cy.get('input[name="username"]')
        .type('a')
        .should('have.value', 'a')
        cy.get('.errorMessage')
        .contains('The username must be at least three characters')
              
    }
        )



    it('log in',()=>{
        cy.get('input[name="username"]')
        .type('bcde')
        cy.get('input[name="password"]')
        .type('abcde')
        cy.get('button')
        .click()
      
    })

})