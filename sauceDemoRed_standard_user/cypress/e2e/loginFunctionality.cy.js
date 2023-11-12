describe('loginFunctionality', () => {

  beforeEach(() => {
    //Abrir o website
    cy.visit('https://www.saucedemo.com/v1/index.html')

  })
  it('TC01_loginSuccessfully', () => {
    //Digitar o username:"standard_user"
    cy.get("#user-name").type("standard_user");

    //Digitar a password:"secret_sauce"
    cy.get("#password").type("secret_sauce")

    //Clicar no botão login
    cy.get("#login-button").click();

    //Assertion - Verificar se login foi realizado com sucesso
    cy.xpath("/html/body/div/div[2]/div[2]/div/div[1]/div[3]/div").contains("Products")

  })

  it('TC02_invalidUsername', () => {
    //Digitar o username:"vasco_da_gama"
    cy.get("#user-name").type("vasco_da_gama");

    //Digitar a password:"secret_sauce"
    cy.get("#password").type("secret_sauce")

    //Clicar no botão login
    cy.get("#login-button").click();

    //Assertion - Verificar se login não foi realizado
    cy.xpath("/html/body/div[2]/div[1]/div/div/form/h3").should("be.visible");
    cy.xpath("/html/body/div[2]/div[1]/div/div/form/h3").contains("Username and password");

  })

  it('TC03_invalidPassword', () => {
    //Digitar o username:"standard_user"
    cy.get("#user-name").type("standard_user");

    //Digitar a password:"vasco_da_gama"
    cy.get("#password").type("vasco_da_gama")

    //Clicar no botão login
    cy.get("#login-button").click();

    //Assertion - Verificar se login não foi realizado
    cy.xpath("/html/body/div[2]/div[1]/div/div/form/h3").should("be.visible");
    cy.xpath("/html/body/div[2]/div[1]/div/div/form/h3").contains("Username and password");

  })

  it('TC04_changedCredentials', () => {
    //Digitar o username:"secret_sauce"
    cy.get("#user-name").type("secret_sauce");

    //Digitar a password:"standard_user"
    cy.get("#password").type("standard_user")

    //Clicar no botão login
    cy.get("#login-button").click();

    //Assertion - Verificar se login não foi realizado
    cy.xpath("/html/body/div[2]/div[1]/div/div/form/h3").should("be.visible");
    cy.xpath("/html/body/div[2]/div[1]/div/div/form/h3").contains("Username and password");

  })

  it('TC05_capitalUsername', () => {
    //Digitar o username:"STANDARD_USER"
    cy.get("#user-name").type("STANDARD_USER");

    //Digitar a password:"secret_sauce"
    cy.get("#password").type("secret_sauce")

    //Clicar no botão login
    cy.get("#login-button").click();

    //Assertion - Verificar se login não foi realizado
    cy.xpath("/html/body/div[2]/div[1]/div/div/form/h3").should("be.visible");
    cy.xpath("/html/body/div[2]/div[1]/div/div/form/h3").contains("Username and password");

  })

  it('TC06_capitalPassword', () => {
    //Digitar o username:"standard_user"
    cy.get("#user-name").type("standard_user");

    //Digitar a password:"SECRET_SAUCE"
    cy.get("#password").type("SECRET_SAUCE")

    //Clicar no botão login
    cy.get("#login-button").click();

    //Assertion - Verificar se login não foi realizado
    cy.xpath("/html/body/div[2]/div[1]/div/div/form/h3").should("be.visible");
    cy.xpath("/html/body/div[2]/div[1]/div/div/form/h3").contains("Username and password");

  })

  it('TC07_withoutUsername', () => {
    //Não digitar username

    //Digitar a password:"secret_sauce"
    cy.get("#password").type("secret_sauce")

    //Clicar no botão login
    cy.get("#login-button").click();

    //Assertion - Verificar se login não foi realizado
    cy.xpath("/html/body/div[2]/div[1]/div/div/form/h3").should("be.visible");
    cy.xpath("/html/body/div[2]/div[1]/div/div/form/h3").contains("Username is required");

  })

  it('TC08_withoutPassword', () => {
    //Digitar o username:"standard_user"
    cy.get("#user-name").type("standard_user");

    //Não digitar password

    //Clicar no botão login
    cy.get("#login-button").click();

    //Assertion - Verificar se login não foi realizado
    cy.xpath("/html/body/div[2]/div[1]/div/div/form/h3").should("be.visible");
    cy.xpath("/html/body/div[2]/div[1]/div/div/form/h3").contains("Password is required");

  })

  it('TC09_withoutCredentials', () => {
    //Não digitar Username

    //Não digitar password

    //Clicar no botão login
    cy.get("#login-button").click();

    //Assertion - Verificar se login não foi realizado
    cy.xpath("/html/body/div[2]/div[1]/div/div/form/h3").should("be.visible");
    cy.xpath("/html/body/div[2]/div[1]/div/div/form/h3").contains("Username is required");

  })

  it('TC10_backspaceBeforeUsername', () => {
    //Digitar o username:" standard_user"
    cy.get("#user-name").type(" standard_user");

    //Digitar a password:"secret_sauce"
    cy.get("#password").type("secret_sauce")

    //Clicar no botão login
    cy.get("#login-button").click();

    //Assertion - Verificar se login não foi realizado
    cy.xpath("/html/body/div[2]/div[1]/div/div/form/h3").should("be.visible");
    cy.xpath("/html/body/div[2]/div[1]/div/div/form/h3").contains("Username and password");

  })

  it('TC11_backspaceAfterUsername', () => {
    //Digitar o username:"standard_user "
    cy.get("#user-name").type("standard_user ");

    //Digitar a password:"secret_sauce"
    cy.get("#password").type("secret_sauce")

    //Clicar no botão login
    cy.get("#login-button").click();

    //Assertion - Verificar se login não foi realizado
    cy.xpath("/html/body/div[2]/div[1]/div/div/form/h3").should("be.visible");
    cy.xpath("/html/body/div[2]/div[1]/div/div/form/h3").contains("Username and password");

  })

  it('TC12_backspaceBeforePassword', () => {
    //Digitar o username:"standard_user"
    cy.get("#user-name").type("standard_user");

    //Digitar a password:" secret_sauce"
    cy.get("#password").type(" secret_sauce")

    //Clicar no botão login
    cy.get("#login-button").click();

    //Assertion - Verificar se login não foi realizado
    cy.xpath("/html/body/div[2]/div[1]/div/div/form/h3").should("be.visible");
    cy.xpath("/html/body/div[2]/div[1]/div/div/form/h3").contains("Username and password");

  })

  it('TC13_backspaceAfterPassword', () => {
    //Digitar o username:"standard_user"
    cy.get("#user-name").type("standard_user");

    //Digitar a password:" secret_sauce"
    cy.get("#password").type(" secret_sauce")

    //Clicar no botão login
    cy.get("#login-button").click();

    //Assertion - Verificar se login não foi realizado
    cy.xpath("/html/body/div[2]/div[1]/div/div/form/h3").should("be.visible");
    cy.xpath("/html/body/div[2]/div[1]/div/div/form/h3").contains("Username and password");

  })
})