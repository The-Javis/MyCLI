const cmd = require("execa");

module.exports = class nodeProyect{
    constructor(root){
        this.root = root;
    }
    init(){
        return cmd.sync("npm init -y",{stdout:"inherit",cwd:this.root})
    }
}