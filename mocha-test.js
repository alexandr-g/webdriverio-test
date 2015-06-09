'use strict';

var chai        = require('chai'),
    assert      = chai.assert,
    expect      = chai.expect,
    webdriverio = require('webdriverio');

describe('my webdriverio smoke tests', function() {

    this.timeout(99999999);
    var client = {};

    before(function(done) {
            client = webdriverio.remote({ desiredCapabilities: {browserName: 'chrome'} });
            client.init(done);
            client.url('http://alexandr-g.github.io/')
    });

    describe('when page load', function() {
        it('should display right title', function(done) {   
            client
              .getTitle(function(err, title) {
                  assert.equal(undefined, err);
                  assert.strictEqual(title,'Alexandr | Front End Developer');
                })
              .call(done);
            });
        });

    describe('my navigation tests', function() {

        describe('navigation between pages', function() {  
            it('should work', function(done) {
                client
                    .click('header>nav>ul>li:nth-child(2)') // About page
                    .pause(1000)
                    .getText('#wrapper>section>h3', function(err, text) {
                        assert.equal(text, 'About', 'correct h3 is present on the page');
                    })
                    .click('header>nav>ul>li:last-child') // Contact page
                    .pause(1000)
                    .getText('#primary>h3', function(err, text) {
                        assert.strictEqual(text, 'General Information', 'correct h3 is present on the page');
                    })
                    .click('header>nav>ul>li:first-child') // back to Portfolio page 
                    .call(done); 
            });
        });
    });

    after(function(done) {
        client.end(done);
    });
});

// TODO: add to smoke tests => check color test