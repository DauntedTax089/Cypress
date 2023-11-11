describe("toDoList10Itens", () => {

    beforeEach(() => {
    })
    it("Adicionar 10 novas tarefas", () => {
        //Visitar página
        cy.visit("https://lambdatest.github.io/sample-todo-app/")

        //Adicionar primeira tarefa
        cy.get('input[type="text"]').type("Selenium")
        cy.get('input[class="btn btn-primary"]').click();
        //Assertion - Verificar se a primeira tarefa foi adicionada com sucesso;
        cy.xpath('/html/body/div/div/div/ul/li[6]/span').contains("Selenium");

        //Adicionar a segunda tarefa
        cy.get('input[ng-model="sampleList.sampletodoText"]').type("Cypress");
        cy.get("input#addbutton").click();
        //Assertion - Verificar se a segunda tarefa foi adicionada com sucesso;
        cy.xpath("/html/body/div/div/div/ul/li[7]/span").should("contain", "Cypress");

        //Adicionar terceira tarefa
        cy.get('#sampletodotext').type("JavaScrypt")
        cy.get('input[class="btn btn-primary"]').click();
        //Assertion - Verificar se a primeira tarefa foi adicionada com sucesso;
        cy.xpath('/html/body/div/div/div/ul/li[8]/span').contains("JavaScrypt");

        //Adicionar a quarta tarefa
        cy.get('#sampletodotext').type("Java");
        cy.get("input#addbutton").click();
        //Assertion - Verificar se a segunda tarefa foi adicionada com sucesso;
        cy.xpath("/html/body/div/div/div/ul/li[9]/span").should("contain", "Java");

        //Adicionar quinta tarefa
        cy.get('#sampletodotext').type("HTML5")
        cy.get('input[class="btn btn-primary"]').click();
        //Assertion - Verificar se a primeira tarefa foi adicionada com sucesso;
        cy.xpath('/html/body/div/div/div/ul/li[10]/span').contains("HTML5");

        //Adicionar a sexta tarefa
        cy.get('#sampletodotext').type("CSS3");
        cy.get("input#addbutton").click();
        //Assertion - Verificar se a segunda tarefa foi adicionada com sucesso;
        cy.xpath("/html/body/div/div/div/ul/li[11]/span").should("contain", "CSS3");

        //Adicionar sétima tarefa
        cy.get('#sampletodotext').type("Github")
        cy.get('input[class="btn btn-primary"]').click();
        //Assertion - Verificar se a primeira tarefa foi adicionada com sucesso;
        cy.xpath('/html/body/div/div/div/ul/li[12]/span').contains("Github");

        //Adicionar a oitava tarefa
        cy.get('#sampletodotext').type("Jira");
        cy.get("input#addbutton").click();
        //Assertion - Verificar se a segunda tarefa foi adicionada com sucesso;
        cy.xpath("/html/body/div/div/div/ul/li[13]/span").should("contain", "Jira");

        //Adicionar nona tarefa
        cy.get('#sampletodotext').type("SeleniumWithJava")
        cy.get('input[class="btn btn-primary"]').click();
        //Assertion - Verificar se a primeira tarefa foi adicionada com sucesso;
        cy.xpath('/html/body/div/div/div/ul/li[14]/span').contains("SeleniumWithJava");

        //Adicionar a décima tarefa
        cy.get('#sampletodotext').type("API");
        cy.get("input#addbutton").click();
        //Assertion - Verificar se a segunda tarefa foi adicionada com sucesso;
        cy.xpath("/html/body/div/div/div/ul/li[15]/span").should("contain", "API");
    })
})