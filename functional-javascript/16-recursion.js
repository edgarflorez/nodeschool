function getDependencies(mod, result) {
  result = result || []
  var dependencies = mod.dependencies || []
  Object.keys(dependencies).forEach(function(dep) {
    var key = dep + '@' + mod.dependencies[dep].version
    if (result.indexOf(key) === -1) result.push(key)
    getDependencies(mod.dependencies[dep], result)
  })
  return result.sort()
}

module.exports = getDependencies

/*
module.exports = function getDependencies(tree) {

  console.log("STEP INTO");
  console.log(tree);
  
  if ( typeof tree === 'undefined' ){
    // console.log("UNDEFINED");
    return [];
  }

  if (typeof tree.dependencies != 'undefined' ){
    return getDependencies(tree['dependencies']);
  }

  let result  = []
  result.concat( Object.keys(tree).forEach( function (value) {
    // console.log("----",value + '@' + tree[value]['version']);
    
    if(typeof tree[value]['version'] === 'undefined'){
      return;  
    }
    result.push(value + '@' + tree[value]['version'] );
            
    console.log("PROGRESS A result value:", value, result);

    if (typeof tree[value]['dependencies'] != 'undefined' ){
      console.log("CONCAT", result , " WITH ",getDependencies( tree[value]['dependencies'] ));
      let innerResults = getDependencies( tree[value]['dependencies'] )
      result.concat( innerResults );
    }

    console.log("PROGRESS B result ", result);


  } ));

  result.sort();

  console.log( result );

  return result;

}
*/