# squeeze-js
Safe property extraction for Javascript objects.


Vanilla JS method for safely extracting property value:

```javascript
let zipcode;
if (person && person.address && person.address.zipcode) {
  zipcode = person.address.zipcode;
}
```


Safe extraction of property value with Squeeze:
```javascript
const squeeze = require('squeeze-js');
let zipcode = squeeze(person, _ => _.address.zipcode);
```
