import Command from '@ckeditor/ckeditor5-core/src/command';

export default class SimplePluginCommand extends Command {

    attributeKey;
    attributevalue;

    constructor(editor, attribute, attributevalue) {
        super(editor);
        this.attributeKey = attribute;
        this.attributevalue = attributevalue;
    }

    execute(options = {}) {
        console.log("inside execute simpleplugin !",options);
        const editor = this.editor; // will hold entire ckeditor instance
        const document = editor.model.document; // will hold entire document, ie the entire text documents inside ckeditor
        const selection = editor.model.document.selection; // will hold the details of selection that is made on ckeditor
        const schema = editor.model.schema; // will hold the model schema of ckeditor, which determines the behaviour or features of each elements added in ckeditor

        const value = options.color ? options.color : this.attributevalue;

        // change() method available from editor model will listen to all changes that are made on model , ie when adding different elements or attributes to elements. This method will hold instance of writer which helps in updating the model and there by change in view of ckeditor.

        editor.model.change(writer => {
            console.log("inside simpleplugin model change function");            
            if (selection.isCollapsed) {
                writer.setSelectionAttribute(this.attributeKey, value);
            }
            else {
                const ranges = schema.getValidRanges(selection.getRanges(), this.attributeKey)
                for (const one of ranges) {
                    writer.setAttribute(this.attributeKey, value, one);
                }
            }
        });
    }
}


//random code samples for reference ! 

//console.log(this.editor.model.document);
//console.log(this.editor.model.document.getRoot());
//console.log(this.editor.model.document.selection);
//console.log(editor.model.document.selection.getRanges());
// writer.insertText('test-data',editor.model.document.selection.getFirstPosition());
//const newElement = writer.createElement('myplugin');
//editor.model.insertContent( newElement, editor.model.document.selection.getFirstPosition() );