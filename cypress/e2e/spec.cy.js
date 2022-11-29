describe('empty spec', () => {
  it('passes', () => {
    cy.visit('https://www.dicoding.com/')
    
    //login
    cy.get('.navbar-nav-right > :nth-child(1) > .dcd-btn').click()
    cy.get(':nth-child(3) > .form-control').click()
      .type("2041720208@student.polinema.ac.id")
    cy.get('#login-password')
      .type("oktavian208")
    cy.get('.form-group.mb-4 > .dcd-btn').click()

    //aktivitas belajar
    cy.get('.dcd-link > .mb-0').click()
    cy.get('.close > span').click()
    cy.get('.module-list-item__link > strong').click()
    cy.get('#module-8 > :nth-child(3) > .module-list-item__link').click()
    cy.get('.classroom-top-nav__title').click()

    //dicoding challenge
    cy.get('.dashboard-top-nav__item--challenge > .dashboard-top-nav__link').click()
    cy.get('.alert > .text-center > a').click()
    cy.get(':nth-child(1) > .card > .card-body > [data-equal-height="card"] > .mb-0 > a').click()
    cy.get('.col-lg-3 > .btn-primary').click()
    cy.get('[href="https://www.dicoding.com/challenges/735/discussions"]').click()
    cy.get('[href="https://www.dicoding.com/challenges/735/submittedapps"]').click()
    cy.get('[href="https://www.dicoding.com/challenges/735/mysubmissions"]').click()
    cy.get('[href="https://www.dicoding.com/challenges/735/winningapps"]').click()
    
  
    //langganan
    cy.get('.d-none > .nav-link').click()
    cy.get('.d-none > .dcd-btn').click()
    cy.get(':nth-child(1) > .dcd-rounded-4 > .mt-3').click()
    cy.get('#promo-code').click()
      .type("TRITREAT")
    cy.get('#apply-promo-code').click()
    cy.get('.text-right > .dcd-btn').click()

    

  })
})