import { io } from "socket.io-client";

it("Should show spinner while connecting", () => {
  cy.visit("http://127.0.0.1:5173/chat");
  cy.get('[data-test-id="spinner"]');
});

it("Should show an error if no other user is in queue for 30 seconds", () => {
  cy.visit("http://127.0.0.1:5173/chat");
  cy.wait(31000);
  cy.contains("Seems like there aren't other people willing to talk")
})

// it("Should connect if there is another user in queue", async () => {
//   cy.visit("http://127.0.0.1:5173/chat");

//   const socket = io("http://localhost:3000");

//   await new Promise<void>(resolve => {
//     socket.on("connect", () => {
//       cy.get('[data-test-id="chat-input"');
//       resolve();
//     });
//   }).then(() => socket.disconnect());
// });

// it("Should show chat after connecting", () => {
//   cy.visit("/chat");
//   cy.get('[data-test-id="chat-input"');
// });
