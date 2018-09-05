var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../server');
var db = require('../models');
var expect = chai.expect;

// Setting up the chai http plugin
chai.use(chaiHttp);

var request;

describe('GET /api/orders', function() {
  // Before each test begins, create a new request server for testing
  // & delete all examples from the db
  beforeEach(function() {
    request = chai.request(server);
    return db.sequelize.sync({ force: true });
  });

  it('should find all examples', function(done) {
    // Add some examples to the db to test with
    db.CoffeeOrder.bulkCreate([
      { name: 'First Example', comments: 'First Description' },
      { name: 'Second Example', comments: 'Second Description' }
    ]).then(function() {
      // Request the route that returns all examples
      request.get('/api/orders').end(function(err, res) {
        var responseStatus = res.status;
        var responseBody = res.body;

        // Run assertions on the response

        expect(err).to.be.null;

        expect(responseStatus).to.equal(200);

        expect(responseBody)
          .to.be.an('array')
          .that.has.lengthOf(2);

        expect(responseBody[0])
          .to.be.an('object')
          .that.includes({ name: 'First Example', comments: 'First Description' });

        expect(responseBody[1])
          .to.be.an('object')
          .that.includes({ name: 'Second Example', comments: 'Second Description' });

        // The `done` function is used to end any asynchronous tests
        done();
      });
    });
  });
});