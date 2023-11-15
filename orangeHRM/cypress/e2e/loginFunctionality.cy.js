describe('loginFunctionality', () => {

  it('TC01_loginSuccessfully', () => {
    //Abrir o website
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    //Digitar o username:"Admin"
    cy.get('input[placeholder="Username"]').type("Admin");

    //Digitar a password:"admin123"
    cy.get('input[placeholder="Password"]').type("admin123");

    //Clicar no botão login
    cy.get('button[type="submit"]').click();

    //Assertion - Verificar se o login foi realizado com sucesso
    cy.xpath("/html/body/div/div[1]/div[1]/header/div[1]/div[1]/span/h6").contains("Dashboard")
  })

  it('TC02_invalidUsername', () => {
    //Abrir o website
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    //Digitar o username:"vasco_da_gama"
    cy.get('input[placeholder="Username"]').type("vasco_da_gama");

    //Digitar a password:"admin123"
    cy.get('input[placeholder="Password"]').type("admin123");

    //Clicar no botão login
    cy.get('button[type="submit"]').click();

    //Assertion - Verificar se o login não foi realizado
    cy.xpath("/html/body/div/div[1]/div/div[1]/div/div[2]/div[2]/div/div[1]/div[1]/p").contains("Invalid credentials")
  })

  it('TC03_invalidPassword', () => {
    //Abrir o website
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    //Digitar o username:"Admin"
    cy.get('input[placeholder="Username"]').type("Admin");

    //Digitar a password:"vasco_da_gama"
    cy.get('input[placeholder="Password"]').type("vasco_da_gama");

    //Clicar no botão login
    cy.get('button[type="submit"]').click();

    //Assertion - Verificar se o login não foi realizado
    cy.xpath("/html/body/div/div[1]/div/div[1]/div/div[2]/div[2]/div/div[1]/div[1]/p").contains("Invalid credentials")
  })

  it('TC04_changedCredentials', () => {
    //Abrir o website
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    //Digitar o username:"admin123"
    cy.get('input[placeholder="Username"]').type("admin123");

    //Digitar a password:"Admin"
    cy.get('input[placeholder="Password"]').type("Admin");

    //Clicar no botão login
    cy.get('button[type="submit"]').click();

    //Assertion - Verificar se o login não foi realizado
    cy.xpath("/html/body/div/div[1]/div/div[1]/div/div[2]/div[2]/div/div[1]/div[1]/p").contains("Invalid credentials")
  })

  it('TC05_capitalUsername', () => { //Bug REPORTER; Login realizado com sucesso
    //Abrir o website
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    //Digitar o username:"ADMIN"
    cy.get('input[placeholder="Username"]').type("ADMIN");

    //Digitar a password:"admin123"
    cy.get('input[placeholder="Password"]').type("admin123");

    //Clicar no botão login
    cy.get('button[type="submit"]').click();

    //Assertion - Verificar se o login não foi realizado
    cy.xpath("/html/body/div/div[1]/div/div[1]/div/div[2]/div[2]/div/div[1]/div[1]/p").contains("Invalid credentials")
  })

  it('TC06_capitalPassword', () => {
    //Abrir o website
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    //Digitar o username:"Admin"
    cy.get('input[placeholder="Username"]').type("Admin");

    //Digitar a password:"ADMIN123"
    cy.get('input[placeholder="Password"]').type("ADMIN123");

    //Clicar no botão login
    cy.get('button[type="submit"]').click();

    //Assertion - Verificar se o login não foi realizado
    cy.xpath("/html/body/div/div[1]/div/div[1]/div/div[2]/div[2]/div/div[1]/div[1]/p").contains("Invalid credentials")
  })

  it('TC07_withoutUsername', () => {
    //Abrir o website
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    //Digitar a password:"admin123"
    cy.get('input[placeholder="Password"]').type("admin123");

    //Clicar no botão login
    cy.get('button[type="submit"]').click();

    //Assertion - Verificar se o login não foi realizado
    cy.xpath("/html/body/div/div[1]/div/div[1]/div/div[2]/div[2]/form/div[1]/div/span").contains("Required")
  })

  it('TC08_withoutPassword', () => {
    //Abrir o website
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    //Digitar a username:"Admin"
    cy.get('input[placeholder="Username"]').type("Admin");

    //Clicar no botão login
    cy.get('button[type="submit"]').click();

    //Assertion - Verificar se o login não foi realizado
    cy.xpath("/html/body/div/div[1]/div/div[1]/div/div[2]/div[2]/form/div[2]/div/span").contains("Required")
  })

  it('TC09_withoutCredentials', () => {
    //Abrir o website
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    //Clicar no botão login
    cy.get('button[type="submit"]').click();

    //Assertion - Verificar se o login não foi realizado
    cy.xpath("/html/body/div/div[1]/div/div[1]/div/div[2]/div[2]/form/div[1]/div/span").contains("Required")
    cy.xpath("/html/body/div/div[1]/div/div[1]/div/div[2]/div[2]/form/div[2]/div/span").contains("Required")
  })

  it('TC10_backspaceBeforeUsername', () => {
    //Abrir o website
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    //Digitar o username:" Admin"
    cy.get('input[placeholder="Username"]').type(" Admin");

    //Digitar a password:"admin123"
    cy.get('input[placeholder="Password"]').type("admin123");

    //Clicar no botão login
    cy.get('button[type="submit"]').click();

    //Assertion - Verificar se o login não foi realizado
    cy.xpath("/html/body/div/div[1]/div/div[1]/div/div[2]/div[2]/div/div[1]/div[1]/p").contains("Invalid credentials")
  })

  it('TC11_backspaceAfterUsername', () => { //Bug REPORTER; Login realizado com sucesso
    //Abrir o website
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    //Digitar o username:"Admin "
    cy.get('input[placeholder="Username"]').type("Admin ");

    //Digitar a password:"admin123"
    cy.get('input[placeholder="Password"]').type("admin123");

    //Clicar no botão login
    cy.get('button[type="submit"]').click();

    //Assertion - Verificar se o login não foi realizado
    cy.xpath("/html/body/div/div[1]/div/div[1]/div/div[2]/div[2]/div/div[1]/div[1]/p").contains("Invalid credentials")
  })

  it('TC12_backspaceBeforePassword', () => {
    //Abrir o website
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    //Digitar o username:"Admin"
    cy.get('input[placeholder="Username"]').type("Admin");

    //Digitar a password:" admin123"
    cy.get('input[placeholder="Password"]').type(" admin123");

    //Clicar no botão login
    cy.get('button[type="submit"]').click();

    //Assertion - Verificar se o login não foi realizado
    cy.xpath("/html/body/div/div[1]/div/div[1]/div/div[2]/div[2]/div/div[1]/div[1]/p").contains("Invalid credentials")
  })

  it('TC13_backspaceAfterPassword', () => {
    //Abrir o website
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    //Digitar o username:"Admin"
    cy.get('input[placeholder="Username"]').type("Admin");

    //Digitar a password:"admin123 "
    cy.get('input[placeholder="Password"]').type("admin123 ");

    //Clicar no botão login
    cy.get('button[type="submit"]').click();

    //Assertion - Verificar se o login não foi realizado
    cy.xpath("/html/body/div/div[1]/div/div[1]/div/div[2]/div[2]/div/div[1]/div[1]/p").contains("Invalid credentials")
  })
})