
const LoginPage = require('../pageobjects/login.page');






describe('My Login application', () => {

    it('should login with invalid credentials', async () => {
        await LoginPage.open();
        

        await LoginPage.login("username", "password");
        
 

    });

    it('verify elements', async () => {
        const elem1 = await $("//img[@id='logomini']")
        await expect(elem1).toBeDisplayed()
        const elem2 = await $("//h1[normalize-space()='QA Portal Login']")
        await expect(elem2).toBeDisplayed()
        const elem3 = await $("//div[@class='wrapper']")
        await expect(elem3).toBeDisplayed()
        const elem4 = await $("//div[@class='wrapper']//form")
        await expect(elem4).toBeDisplayed()
        const elem5 = await $("//input[@placeholder='Username']")
        await expect(elem5).toBeDisplayed()
        const elem6 = await $("//input[@placeholder='Password']")
        await expect(elem6).toBeDisplayed()
        const elem7 = await $("//input[@value='Login']")
        await expect(elem7).toBeDisplayed()
     });


     it('Verify that all the error messages appear', async () => {
        const errorm = await $("//span[normalize-space()='No account found with that username.']")
        await expect(errorm).toBeDisplayed()
        
     });




     
});

describe('My Login application', () => {

    it('should login with invalid credentials', async () => {
        await LoginPage.open();
        

        await LoginPage.login("username2", "password3");
        
 

    });
    it('should check result', async () => {
        
        const errorres = $("//span[normalize-space()='No account found with that username.']")
        
        await expect(errorres).not.toBeDisplayed();
        
        
    });  
}); 
