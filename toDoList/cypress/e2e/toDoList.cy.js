describe('toDoList', () => {

  it('Adicionar uma tarefa', () => {

    //Visitar a página
    cy.visit('https://lambdatest.github.io/sample-todo-app/')

    //Assertion - Verificar se estou na página solicitada
    cy.title().should("eq", "Sample page - lambdatest.com");

    //Digitar nova tarefa
    cy.get("#sampletodotext").type("Selenium");

    //Clicar no botão ADD
    cy.get("input#addbutton").click();

    //Assertion - Verificar se a tarefa foi adicionada com sucesso
    cy.xpath("/html/body/div/div/div/ul/li[6]/span").contains("Selenium");

  })

})