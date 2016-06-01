#FS and Async

##Description:
This program reads three files and console.logs the first 8 bytes in hex of each file. Also, it guarantees that three files are read and console logged in the
order `'one.txt', 'two.txt', 'three.txt'` regardless of file size.

Async testing is part of the program, and "false positives" are not happening.

##To run:
  * Clone to your own repo
  * Navigate to the root directory
  * Type node async.js
  * For testing, type mocha test/async_test
