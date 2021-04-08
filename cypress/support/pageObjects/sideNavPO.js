class sideNav 
{

getSideNav(){
    return cy.get('.menu-hamburger')
}

verifyingSideNav(){
    return cy.get('.menu-panel')
}

getCloseIcon(){
    return cy.get('.menu-close')
}


}
export default sideNav;