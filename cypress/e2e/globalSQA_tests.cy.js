import { url, firstname, lastname, postalcode, user,
   currency, searchQuery, customer, 
   dep_amount, with_amount } from "./selectors.cy"

describe('template spec', () => {

  beforeEach(() => {
    cy.visit(url)
    //Login to dashboard
    cy.wait(2000)
    cy.get('body')
  })

  afterEach(() => {
    // back to home
    cy.get('.home').click()
  }
  )

  
  it('Admin Section Test', () => {
    cy.get(':nth-child(3) > .btn').click()
    cy.wait(1000)

    // Add customer tests
    cy.get('[ng-class="btnClass1"]').click()
    cy.wait(1000)
    cy.get(':nth-child(1) > .form-control').type(firstname)
    cy.get(':nth-child(2) > .form-control').type(lastname)
    cy.get(':nth-child(3) > .form-control').type(postalcode)
    cy.get('form.ng-dirty > .btn').click()

    // Open customer test
    cy.get('[ng-class="btnClass2"]').click()
    cy.wait(1000)
    cy.get('#userSelect').select(user)
    cy.get('#currency').select(currency)
    cy.get('form.ng-dirty > button').click()

    // Search Customer
    cy.get('[ng-class="btnClass3"]').click()
    cy.wait(1000)
    cy.get('.form-control').type(searchQuery)
    cy.get(':nth-child(5) > button').click()
  })

  it('Customer Section Test',() =>{
    cy.get('.borderM > :nth-child(1) > .btn').click()
    cy.wait(1000)

    // Login as a customer
    cy.get('#userSelect').select(customer)
    cy.get('form.ng-valid > .btn').click()

    // deposit money
    cy.get('[ng-class="btnClass2"]').click()
    cy.get('.form-control').type(dep_amount)
    cy.get('form.ng-dirty > .btn').click()

    // withdraw money
    cy.get('[ng-class="btnClass3"]').click()
    cy.get('.form-control').type(with_amount)
    cy.get('form.ng-dirty > .btn').click()
    cy.wait(1000)

    // transaction history
    cy.get('[ng-class="btnClass1"]').click()
    cy.wait(1000)

    // log out
    cy.get('.logout').click()

  })
})