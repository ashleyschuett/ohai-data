var child_process = require("child_process");

var executable = "ohai";

module.exports = {

    detect: function(options, fn){
        if(typeof options == "function"){
            fn = options;
            options = {};
        }

        child_process.exec(options.executable || executable, function(err, stdout, stderr){
            if(err)
                return fn(err);

            try{
                stdout = JSON.parse(stdout);
                return fn(null, stdout);
            }
            catch(err){
                return fn(err);
            }
        });
    }

}
