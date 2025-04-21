//Import packages
const chai = require('chai');
const sinon = require('sinon');
const supertest = require('supertest');
const app = require('../src/index');
const nock = require('nock');

//Extract chai 
const should = chai.should();
const expect = chai.expect
const assert = chai.assert;


//Extract sinon
const spy = sinon.spy;
const stub = sinon.stub;
const mock = sinon.mock;
const server = supertest(app);

module.exports = {
    server,
    spy,
    stub,
    mock,
    should,
    expect,
    assert,
    nock
}

after(() => {
    app.close();
})