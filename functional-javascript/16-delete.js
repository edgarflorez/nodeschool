function getDependencies(tree, result) {

    console.log('tree ', tree)
    result = result || [];
    let deps = tree && tree.dependencies || [];

    Object.keys(deps).forEach( dep => {
        let key = dep +"@"+ deps[dep].version
        if( result.indexOf(key) == -1 ) {
            result.push(key);
        }
        getDependencies(deps[dep], result);
    })

    return result.sort();
}

var loremIpsum = {
    "name": "lorem-ipsum",
    "version": "0.1.1",
    "dependencies": {
      "optimist": {
        "version": "0.3.7",
        "dependencies": {
          "wordwrap": {
            "version": "0.0.2"
          }
        }
      },
      "inflection": {
        "version": "1.2.6"
      }
    }
  }

getDependencies(loremIpsum);













/*
function getDependencies(tree, dependencies) {
    // SOLUTION GOES HERE
    // Note: Feel free to add additional arguments
    // to this function for use with recursive calls.
    // Or not! There are many ways to recurse.
    // console.log(tree);
    dependencies = dependencies || [];
    if(typeof tree['dependencies'] != 'undefined'){
        for (const key in tree['dependencies']) {
            let dependency = key + "@"+  tree['dependencies'][key]['version'];
            if(dependencies.indexOf(dependency) === -1){
                dependencies.push(dependency);
            }

            if(typeof tree['dependencies'][key]['dependencies'] != 'undefined'){
                getDependencies(tree['dependencies'][key], dependencies);
            }
        }
    }
    return dependencies.sort();
  }

  module.exports = getDependencies
  */