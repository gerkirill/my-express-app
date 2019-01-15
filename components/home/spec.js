var request = require('supertest');

describe('loading express', function () {
  var server;

  beforeEach(function () {
    delete require.cache[require.resolve('../../bin/www')];
    server = require('../../bin/www');
  });

  afterEach(function (done) {
    server.close(done);
  });

  it('responds to /', function testSlash(done) {
    request(server)
      .get('/')
      .expect(/Welcome to Express/)
      .expect(200, done);
  });
});