# Automated tests with Webdriver/Selenium 2.0 and Node.js

1. `git clone https://github.com/alexandr-g/webdriverio-tests.git`
2. cd webdriverio-tests

Required: 

1) java <br>
2) node.js <br>
3) selenium-server-standalone (you can find it attached inside lib folder) <br>

Project structure:

```
lib/
  ├── selenium-server-standalone.jar
mocha-test.js ------ tests
package.json

```

## Getting started

1. run `npm i` to install required packages
2. start selenium-server-standalone using <br>
2.1	cd lib  <br>
2.2	run `java -jar selenium-server-standalone-2.45.0.jar` <br>

3. run `mocha mocha-test.js` to launch tests 
	


**That's it!**
