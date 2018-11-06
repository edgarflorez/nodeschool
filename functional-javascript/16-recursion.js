module.exports = function getDependencies(tree) {
  // SOLUTION GOES HERE
  // Note: Feel free to add additional arguments
  // to this function for use with recursive calls.
  // Or not! There are many ways to recurse.
  //console.log(tree);

  /*
  if (typeof tree['dependencies'] != 'undefined' ){
    return getDependencies(tree['dependencies']);
  }
  let result  = []
  return result.concat( Object.keys(tree).forEach( function (value) {
    result.push(value + '@' + tree[value]['version'] );
  } )).sort();
  */

  //console.log(result);

  console.log("STEP INTO");
  console.log(tree);
  
  if ( typeof tree === 'undefined' ){
    console.log("UNDEFINED");
    return [];
  }

  if (typeof tree.dependencies != 'undefined' ){
    return getDependencies(tree['dependencies']);
  }

  let result  = []
  return result.concat( Object.keys(tree).forEach( function (value) {
    console.log("----",value + '@' + tree[value]['version']);
    if(typeof tree[value]['version'] === 'undefined'){
      return;  
    }
    result.push(value + '@' + tree[value]['version'] );
  } )).sort();



}
