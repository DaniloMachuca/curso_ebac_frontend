describe("Agenda", () => {
  //visita a página após cada operação
  beforeEach(() => {
    cy.visit("https://ebac-agenda-contatos-tan.vercel.app/");
  });

  it("deve renderizar a agenda", () => {
    cy.get("h1").should("be.visible");
  });

  it("deve adicionar um contato", () => {
    cy.get('[type="text"]').type("João");
    cy.get('[type="email"]').type("j@j.com");
    cy.get('[type="tel"]').type("123456789");
    cy.get(".adicionar").click();
    cy.get(".sc-beqWaB").should("contain", "João");
  });

  it("Deve editar um contato", () => {
    cy.get(".edit").click();
    cy.get('[type="text"]').clear().type("Maria");
    cy.get('[type="email"]').clear().type("m@m.com");
    cy.get('[type="tel"]').clear().type("987654321");
    cy.get(".alterar").click();
    cy.get(".sc-beqWaB").should("contain", "Maria");
  });

  it("deve remover um contato", () => {
    cy.get(".delete").click();
    cy.get("html").should("not.contain", "Maria");
  });
});
