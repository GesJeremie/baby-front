export default function(server) {

  // Seed your development database using your factories. This
  // data will not be loaded in your tests.

  // server.createList('contact', 10);
  var offer_contact = server.create('offer-contact');
  server.createList('offer', 30, { offer_contact: offer_contact.id });
}
