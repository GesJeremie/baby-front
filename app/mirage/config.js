export default function() {
  this.get('/api/offers', (db, request) => {
    let data = {};
    data = db.offers.map((attrs) => {
      return { type: 'offers', id: attrs.id, attributes: attrs };
    });

    return { data };
  });

  this.post('/api/offer-contacts', (db, request) => {
    var offerContact = db['offer-contacts'].insert({
      offer_id: request.offer_id,
      email: request.email,
      phone: request.phone,
      messahe: request.message
    });

    return { type: 'offer-contacts', id: offerContact.id, attributes: offerContact };

  });

}
