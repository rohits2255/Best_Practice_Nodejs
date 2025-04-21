const {
    app,
    server,
    assert, 
    spy,
    stub,
    mock,
    should,
    expect,
    nock,
} = require('./index');


//Import local methods
const test = require('../src/test');



describe("THIS IS ASSERT SECTION TEST>>>>>", () => {

    it('assert check', () => {
        assert.equal(5, 5);
    })

    describe("THIS IS SPY CHECK >>>>>", () => {
        const test_spy = spy(test, 'first');

        afterEach(() => {
            test_spy.resetHistory();
        })

        it('spy call check', () => { 
            test.first(1);
            test.first(2);
            assert.isTrue(test_spy.calledTwice);
        });
    
        it('spy return check', () => {
            const value = test.first(3);
            assert.equal(test_spy.returnValues[0], 6)
        });
    })

    describe("THIS IS STUB CHECK >>>>>", () => {
        const test_stub = stub(test, 'second');
    

        it('stub return check', () => {
            test_stub.returns(10);
            assert.equal(test.second(1), 10);
        });
    })
    
})

describe('THIS IS SHOULD SECTION TEST>>>>>', () => {

    it('should check', () => {
        [1,2,3].should.be.an('array');
    })
})

describe('THIS IS EXPECT SECTION TEST>>>>>', () => {

    it('expect check', () => {
        expect("44").to.be.a('string');
    })
})

describe('THIS IS SUPERTEST SECTION TEST>>>>>', () => {
    //this.timeout(1000)
    it('test /health', (done) => {
        server
        .get('/health')
        .set('Accept', 'application/json')
        // .end((err, res) => {
         
        // })
        .then((res) => {
            res.should.have.property('status').to.be.equal(200);
            expect(res).to.have.property('text').equals('Server is up and running');
            done()
        }).catch((err) => {
            console.log(err);
        })
    })
})