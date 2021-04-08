/// <reference types="Cypress" />
import sideNavPO from "../../support/pageObjects/sideNavPO"



describe('This file will hold all the test scripts involving the side nav', function(){

    const sideNav= new sideNavPO()



    beforeEach(function(){
        cy.visit(Cypress.env('url'))
        cy.fixture('sideNav').then(function(locator){
            this.locator = locator
        })
    })


    it('Users should be able to navigate to the gothamist side nav', function(){ 
        sideNav.getSideNav().click()
        sideNav.verifyingSideNav().should('be.visible')
    })

    it('Users should be able to close the side nave by clicking on the X', function(){ 
        sideNav.getSideNav().click()
        sideNav.verifyingSideNav().should('be.visible')
        sideNav.getCloseIcon().click()
        sideNav.verifyingSideNav().should('not.be.visible')
    })

    it('Donate button should work on the side nav', function(){
        sideNav.getSideNav().click()
        sideNav.verifyingSideNav().should('be.visible')
        cy.clickAndVerify(this.locator.donateButton,this.locator.donatePageVerifyingText)
    })

   /* it('SEND A STORY IDEA button should work on the side nav', function(){
        sideNav.getSideNav().click()
        sideNav.verifyingSideNav().should('be.visible')
        cy.clickAndVerify(this.locator.sendAStoryIdea,this.locator.sendAStoryIdeaVerifyingText)
    })*/

    it('Advertising link from the side nav should be working', function(){
        sideNav.getSideNav().click()
        sideNav.verifyingSideNav().should('be.visible')
        cy.clickAndVerify(this.locator.advertising,this.locator.advertisingVerifyingText)
    })

    it('RSS Feed link from the side nav shoul be working', function(){
        sideNav.getSideNav().click()
        sideNav.verifyingSideNav().should('be.visible')
        cy.clickAndVerify(this.locator.rssFeed,this.locator.rssFeedVerifyingText)
    })

    it('Diversity link from the side nav should be working', function(){
        sideNav.getSideNav().click()
        sideNav.verifyingSideNav().should('be.visible')
        cy.clickAndVerify(this.locator.diversity,this.locator.diversityVerifyingText)
    })

    it('Facebook link from the side nav should be working', function(){
        sideNav.getSideNav().click()
        sideNav.verifyingSideNav().should('be.visible')
        cy.clickAndVerify(this.locator.facebook,this.locator.facebookVerifyingText)
    })

    it('Twitter link from the side nav should be working', function(){
        sideNav.getSideNav().click()
        sideNav.verifyingSideNav().should('be.visible')
        cy.clickAndVerify(this.locator.twitter,this.locator.twitterVerifyingText)
    })
    
    it('Instagram link from the side nav should be working', function(){
        sideNav.getSideNav().click()
        sideNav.verifyingSideNav().should('be.visible')
        cy.clickAndVerify(this.locator.instagram,this.locator.instagramVerifyingText)
    })

    it('Youtube link from the side nav should be working', function(){
        sideNav.getSideNav().click()
        sideNav.verifyingSideNav().should('be.visible')
        cy.clickAndVerify(this.locator.youtube,this.locator.youtubeVerifyingText)
    })

    it('Terms of use link from the side nav should be working', function(){
        sideNav.getSideNav().click()
        sideNav.verifyingSideNav().should('be.visible')
        cy.clickAndVerify(this.locator.termsOfUse,this.locator.termsOfUseVerifyingText)
    })

    it('Privacy policy link from the side nav should be working', function(){
        sideNav.getSideNav().click()
        sideNav.verifyingSideNav().should('be.visible')
        cy.clickAndVerify(this.locator.privacyPolicy,this.locator.privacyPolicyVerifyingText)
    })
    /*
    it('Accessibility  link from the side nav should be working', function(){
        sideNav.getSideNav().click()
        sideNav.verifyingSideNav().should('be.visible')
        cy.clickAndVerify(this.locator.accessibility,this.locator.accessibilityVerifyingText)
    })
    */
})