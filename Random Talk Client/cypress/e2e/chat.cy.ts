import { io } from "socket.io-client";

it("Should show spinner while connecting", () => {
  cy.visit("/chat");
  cy.get('[data-test-id="spinner"]');
});

it("Should connect if there is another user in queue", async () => {
  cy.visit("/chat");

  const socket = io("http://localhost:3000");

  await new Promise<void>(resolve => {
    socket.on("connect", () => {
      cy.get('[data-test-id="chat-input"');
      resolve();
    });
  }).then(() => socket.disconnect());
});

// it("Should show chat after connecting", () => {
//   cy.visit("/chat");
//   cy.get('[data-test-id="chat-input"');
// });
