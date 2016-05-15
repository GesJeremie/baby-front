export default function() {
  this.get('/api/offers', (db, request) => {
    let data = {};
    data = db.offers.map((attrs) => {
      return { type: 'offers', id: attrs.id, attributes: attrs };
    });

    return { data };
  });


}
