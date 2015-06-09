# Automated tests with webdriverio and Node.js

simply

1. `git clone https://github.com/alexandr-g/webdriverio-tests.git`
2. cd webdriverio-tests

Required: 

- java <br>
- node.js <br>
- selenium-server-standalone (you can find it attached inside lib folder) <br>

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
