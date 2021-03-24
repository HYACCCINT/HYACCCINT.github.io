/* JS Library usage examples */
"use strict";
log('----------')
log('SCRIPT: Examples of using our libraries')
log('In general, we should have the code that uses our libraries separate from the actual library code.')

// Some normal jQuery:
const e = $('#myId')
log(e.text())

// Our jQuery clone:
const e2 = $$$('#myId')
log(e2.text())
e2.addClass('myClass')
e2.attr('myAttr', 'test')
log(e2.attr('myAttr'))


const tr = new Transistor()
