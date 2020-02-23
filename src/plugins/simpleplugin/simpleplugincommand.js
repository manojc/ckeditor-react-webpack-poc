import Command from '@ckeditor/ckeditor5-core/src/command';

export default class SimplePluginCommand extends Command {

    execute(){
        console.log("inside execute simpleplugin !"); 
        
        this.editor.model.change( writer => {
            console.log("inside model change function");
        });
    }

}