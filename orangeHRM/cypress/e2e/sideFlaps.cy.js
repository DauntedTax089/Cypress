describe("sideFlaps", () => {

    it("TC01_adminFlap", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")//Abrir o website
        cy.get('input[placeholder="Username"]').type("Admin") //Digitar o username
        cy.get('input[placeholder="Password"]').type("admin123") //Digitar a password
        cy.get('button[type="submit"]').click(); //Clicar no botão login
        cy.title().should('eq', "OrangeHRM") //Assertion de título

        cy.xpath("/html/body/div/div[1]/div[1]/aside/nav/div[2]/ul/li[1]/a").click(); //Clicar na aba Admin
        cy.url().should("include", "admin") //Assertion - Verificar se a url contém o text citado
            .and("eq", "https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers") //Assertion - Verificar se a url é a que foi solicitada;
            .and("contain", "viewSystemUsers"); //Assertion verificar se a url contém o texto solicitado;
    })

    it("TC02_PIMFlap", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")//Abrir o website
        cy.get('input[placeholder="Username"]').type("Admin") //Digitar o username
        cy.get('input[placeholder="Password"]').type("admin123") //Digitar a password
        cy.get('button[type="submit"]').click(); //Clicar no botão login
        cy.title().should('eq', "OrangeHRM") //Assertion de título

        cy.xpath("/html/body/div/div[1]/div[1]/aside/nav/div[2]/ul/li[2]/a").click(); //Clicar na aba PIM
        cy.url().should("include", "pim") //Assertion - Verificar se a url contém o text citado
            .and("eq", "https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList") //Assertion - Verificar se a url é a que foi solicitada;
            .and("contain", "viewEmployeeList"); //Assertion verificar se a url contém o texto solicitado;
    })

    it("TC03_leaveFlap", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")//Abrir o website
        cy.get('input[placeholder="Username"]').type("Admin") //Digitar o username
        cy.get('input[placeholder="Password"]').type("admin123") //Digitar a password
        cy.get('button[type="submit"]').click(); //Clicar no botão login
        cy.title().should('eq', "OrangeHRM") //Assertion de título

        cy.xpath("/html/body/div/div[1]/div[1]/aside/nav/div[2]/ul/li[3]/a").click(); //Clicar na aba leave
        cy.url().should("include", "leave") //Assertion - Verificar se a url contém o text citado
            .and("eq", "https://opensource-demo.orangehrmlive.com/web/index.php/leave/viewLeaveList") //Assertion - Verificar se a url é a que foi solicitada;
            .and("contain", "viewLeaveList"); //Assertion verificar se a url contém o texto solicitado;
    })

    it("TC04_timeFlap", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")//Abrir o website
        cy.get('input[placeholder="Username"]').type("Admin") //Digitar o username
        cy.get('input[placeholder="Password"]').type("admin123") //Digitar a password
        cy.get('button[type="submit"]').click(); //Clicar no botão login
        cy.title().should('eq', "OrangeHRM") //Assertion de título

        cy.xpath("/html/body/div/div[1]/div[1]/aside/nav/div[2]/ul/li[4]/a").click(); //Clicar na aba time
        cy.url().should("include", "time") //Assertion - Verificar se a url contém o text citado
            .and("eq", "https://opensource-demo.orangehrmlive.com/web/index.php/time/viewEmployeeTimesheet") //Assertion - Verificar se a url é a que foi solicitada;
            .and("contain", "viewEmployeeTimesheet"); //Assertion verificar se a url contém o texto solicitado;
    })

    it("TC05_recruitmentFlap", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")//Abrir o website
        cy.get('input[placeholder="Username"]').type("Admin") //Digitar o username
        cy.get('input[placeholder="Password"]').type("admin123") //Digitar a password
        cy.get('button[type="submit"]').click(); //Clicar no botão login
        cy.title().should('eq', "OrangeHRM") //Assertion de título

        cy.xpath("/html/body/div/div[1]/div[1]/aside/nav/div[2]/ul/li[5]/a").click(); //Clicar na aba recruitment
        cy.url().should("include", "recruitment") //Assertion - Verificar se a url contém o text citado
            .and("eq", "https://opensource-demo.orangehrmlive.com/web/index.php/recruitment/viewCandidates") //Assertion - Verificar se a url é a que foi solicitada;
            .and("contain", "viewCandidates"); //Assertion verificar se a url contém o texto solicitado;
    })

    it("TC06_myInfoFlap", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")//Abrir o website
        cy.get('input[placeholder="Username"]').type("Admin") //Digitar o username
        cy.get('input[placeholder="Password"]').type("admin123") //Digitar a password
        cy.get('button[type="submit"]').click(); //Clicar no botão login
        cy.title().should('eq', "OrangeHRM") //Assertion de título

        cy.xpath("/html/body/div/div[1]/div[1]/aside/nav/div[2]/ul/li[6]/a").click(); //Clicar na aba My info
        cy.url().should("include", "viewPersonalDetails") //Assertion - Verificar se a url contém o text citado
            .and("eq", "https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPersonalDetails/empNumber/7") //Assertion - Verificar se a url é a que foi solicitada;
            .and("contain", "empNumber"); //Assertion verificar se a url contém o texto solicitado;
    })

    it("TC07_performanceFlap", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")//Abrir o website
        cy.get('input[placeholder="Username"]').type("Admin") //Digitar o username
        cy.get('input[placeholder="Password"]').type("admin123") //Digitar a password
        cy.get('button[type="submit"]').click(); //Clicar no botão login
        cy.title().should('eq', "OrangeHRM") //Assertion de título

        cy.xpath("/html/body/div/div[1]/div[1]/aside/nav/div[2]/ul/li[7]/a").click(); //Clicar na aba performance
        cy.url().should("include", "searchEvaluatePerformanceReview") //Assertion - Verificar se a url contém o texto citado
            .and("eq", "https://opensource-demo.orangehrmlive.com/web/index.php/performance/searchEvaluatePerformanceReview") //Assertion - Verificar se a url é a que foi solicitada;
            .and("contain", "performance"); //Assertion verificar se a url contém o texto solicitado;
    })

    it("TC08_directoryFlap", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")//Abrir o website
        cy.get('input[placeholder="Username"]').type("Admin") //Digitar o username
        cy.get('input[placeholder="Password"]').type("admin123") //Digitar a password
        cy.get('button[type="submit"]').click(); //Clicar no botão login
        cy.title().should('eq', "OrangeHRM") //Assertion de título

        cy.xpath("/html/body/div/div[1]/div[1]/aside/nav/div[2]/ul/li[9]/a").click(); //Clicar na aba directory
        cy.url().should("include", "viewDirectory") //Assertion - Verificar se a url contém o texto citado
            .and("eq", "https://opensource-demo.orangehrmlive.com/web/index.php/directory/viewDirectory") //Assertion - Verificar se a url é a que foi solicitada;
            .and("contain", "directory"); //Assertion verificar se a url contém o texto solicitado;
    })

    it("TC09_maintenanceFlap", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")//Abrir o website
        cy.get('input[placeholder="Username"]').type("Admin") //Digitar o username
        cy.get('input[placeholder="Password"]').type("admin123") //Digitar a password
        cy.get('button[type="submit"]').click(); //Clicar no botão login
        cy.title().should('eq', "OrangeHRM") //Assertion de título

        cy.xpath("/html/body/div/div[1]/div[1]/aside/nav/div[2]/ul/li[10]/a").click(); //Clicar na aba maintenance
        cy.get('input[name="password"]').type("admin123") //Digitar a password
        cy.xpath("/html/body/div/div[1]/div[1]/form/div[4]/button[2]").click();
        cy.url().should("include", "maintenance") //Assertion - Verificar se a url contém o texto citado
            .and("eq", "https://opensource-demo.orangehrmlive.com/web/index.php/maintenance/purgeEmployee") //Assertion - Verificar se a url é a que foi solicitada;
            .and("contain", "purgeEmployee"); //Assertion verificar se a url contém o texto solicitado;
    })

    it("TC10_claimFlap", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")//Abrir o website
        cy.get('input[placeholder="Username"]').type("Admin") //Digitar o username
        cy.get('input[placeholder="Password"]').type("admin123") //Digitar a password
        cy.get('button[type="submit"]').click(); //Clicar no botão login
        cy.title().should('eq', "OrangeHRM") //Assertion de título

        cy.xpath("/html/body/div/div[1]/div[1]/aside/nav/div[2]/ul/li[11]/a").click(); //Clicar na aba claim
        cy.url().should("include", "claim") //Assertion - Verificar se a url contém o texto citado
            .and("eq", "https://opensource-demo.orangehrmlive.com/web/index.php/claim/viewAssignClaim") //Assertion - Verificar se a url é a que foi solicitada;
            .and("contain", "viewAssignClaim"); //Assertion verificar se a url contém o texto solicitado;
    })

    it("TC11_buzzFlap", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")//Abrir o website
        cy.get('input[placeholder="Username"]').type("Admin") //Digitar o username
        cy.get('input[placeholder="Password"]').type("admin123") //Digitar a password
        cy.get('button[type="submit"]').click(); //Clicar no botão login
        cy.title().should('eq', "OrangeHRM") //Assertion de título

        cy.xpath("/html/body/div/div[1]/div[1]/aside/nav/div[2]/ul/li[12]/a").click(); //Clicar na aba buzz
        cy.url().should("include", "buzz") //Assertion - Verificar se a url contém o texto citado
            .and("eq", "https://opensource-demo.orangehrmlive.com/web/index.php/buzz/viewBuzz") //Assertion - Verificar se a url é a que foi solicitada;
            .and("contain", "viewBuzz"); //Assertion verificar se a url contém o texto solicitado;
    })
})