class homepage{

    getDonateButton(){
        return cy.get(".c-main-header__right > a")
    }

    getNewsletterLink(){
        return cy.get("nav[class='c-primary-nav']>ul>li:nth-child(5)>a")
    }
    
}
export default homepage;