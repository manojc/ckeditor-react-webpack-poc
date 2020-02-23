import Plugin from "@ckeditor/ckeditor5-core/src/plugin";

import SimplePluginCommand from "./simpleplugincommand";

export default class SimplePlugin extends Plugin {

    init() {
        console.log("simple plugin got initialised !");                
        this.editor.commands.add("myplugin",new SimplePluginCommand(this.editor));
    }
}
