let object = {};


function createObject(object, keyname, keyvalue) {
  let key = keyname;
  object[key] = keyvalue;
  console.log(object);
}

createObject(object, 'Nome', 'Khazad');
