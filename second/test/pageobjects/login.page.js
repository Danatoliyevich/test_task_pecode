const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername () { return $("//input[@placeholder='Username']") }
    get inputPassword () { return $("//input[@placeholder='Password']") }
    get btnSubmit () { return $("//input[@value='Login']") }
   
    

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password) {
        await this.inputUsername.setValue(username);
        browser.pause(5000);
        await this.inputPassword.setValue(password);
        browser.pause(5000);
        await this.btnSubmit.click();
    }


    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return super.open();
    }
}

module.exports = new LoginPage();
