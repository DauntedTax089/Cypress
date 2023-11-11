describe ("toDoListItens", () => {

    beforeEach(() => {
        //Visitar a página da web
        cy.visit("https://lambdatest.github.io/sample-todo-app/")
    })

    it("Adicionar Selenium", () => {
        //Adicionar tarefa Selenium 
        cy.xpath("/html/body/div/div/div/form/input[1]").type("Selenium");
        cy.xpath('//*[@id="addbutton"]').click();
        //Assertion - Verificar se a tarefa foi adicionada com sucesso
        cy.xpath("/html/body/div/div/div/ul/li[6]/span").should("contain", "Selenium");
    })
    it("Adicionar Cypress", () => {
        //Adicionar tarefa Cypress 
        cy.xpath("/html/body/div/div/div/form/input[1]").type("Cypress");
        cy.xpath('//*[@id="addbutton"]').click();
        //Assertion - Verificar se a tarefa foi adicionada com sucesso
        cy.xpath("/html/body/div/div/div/ul/li[6]/span").should("contain", "Cypress");
    })
    it("Adicionar JavaScrypt", () => {
        //Adicionar tarefa JavaScrypt 
        cy.xpath("/html/body/div/div/div/form/input[1]").type("JavaScrypt");
        cy.xpath('//*[@id="addbutton"]').click();
        //Assertion - Verificar se a tarefa foi adicionada com sucesso
        cy.xpath("/html/body/div/div/div/ul/li[6]/span").should("contain", "JavaScrypt");
    })
    it("Adicionar Java", () => {
        //Adicionar tarefa Java 
        cy.xpath("/html/body/div/div/div/form/input[1]").type("Java");
        cy.xpath('//*[@id="addbutton"]').click();
        //Assertion - Verificar se a tarefa foi adicionada com sucesso
        cy.xpath("/html/body/div/div/div/ul/li[6]/span").should("contain", "Java");
    })
    it("Adicionar HMTL5", () => {
        //Adicionar tarefa HMTL5 
        cy.xpath("/html/body/div/div/div/form/input[1]").type("HMTL5");
        cy.xpath('//*[@id="addbutton"]').click();
        //Assertion - Verificar se a tarefa foi adicionada com sucesso
        cy.xpath("/html/body/div/div/div/ul/li[6]/span").should("contain", "HMTL5");
    })
    it("Adicionar CSS3", () => {
        //Adicionar tarefa CSS3 
        cy.xpath("/html/body/div/div/div/form/input[1]").type("CSS3");
        cy.xpath('//*[@id="addbutton"]').click();
        //Assertion - Verificar se a tarefa foi adicionada com sucesso
        cy.xpath("/html/body/div/div/div/ul/li[6]/span").should("contain", "CSS3");
    })
    it("Adicionar GitHub", () => {
        //Adicionar tarefa GitHub 
        cy.xpath("/html/body/div/div/div/form/input[1]").type("GitHub");
        cy.xpath('//*[@id="addbutton"]').click();
        //Assertion - Verificar se a tarefa foi adicionada com sucesso
        cy.xpath("/html/body/div/div/div/ul/li[6]/span").should("contain", "GitHub");
    })
    it("Adicionar Jira", () => {
        //Adicionar tarefa Jira 
        cy.xpath("/html/body/div/div/div/form/input[1]").type("Jira");
        cy.xpath('//*[@id="addbutton"]').click();
        //Assertion - Verificar se a tarefa foi adicionada com sucesso
        cy.xpath("/html/body/div/div/div/ul/li[6]/span").should("contain", "Jira");
    })
    it("Adicionar SeleniumWithJava", () => {
        //Adicionar tarefa SeleniumWithJava 
        cy.xpath("/html/body/div/div/div/form/input[1]").type("SeleniumWithJava");
        cy.xpath('//*[@id="addbutton"]').click();
        //Assertion - Verificar se a tarefa foi adicionada com sucesso
        cy.xpath("/html/body/div/div/div/ul/li[6]/span").should("contain", "SeleniumWithJava");
    })
    it("Adicionar API", () => {
        //Adicionar tarefa API 
        cy.xpath("/html/body/div/div/div/form/input[1]").type("API");
        cy.xpath('//*[@id="addbutton"]').click();
        //Assertion - Verificar se a tarefa foi adicionada com sucesso
        cy.xpath("/html/body/div/div/div/ul/li[6]/span").should("contain", "API");
    })
})