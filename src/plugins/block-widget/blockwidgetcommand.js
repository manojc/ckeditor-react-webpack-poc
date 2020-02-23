import Command from '@ckeditor/ckeditor5-core/src/command';

export default class BlockWidgetCommand extends Command {
    execute() {
        this.editor.model.change( writer => {
            // Insert <simpleBox>*</simpleBox> at the current selection position
            // in a way that will result in creating a valid model structure.
            this.editor.model.insertContent( createElement( writer ) );
        } );
    }

    refresh() {
        const model = this.editor.model;
        const selection = model.document.selection;
        const allowedIn = model.schema.findAllowedParent( selection.getFirstPosition(), 'block-widget' );

        this.isEnabled = allowedIn !== null;
    }
}

function createElement( writer ) {
    const blockwidget = writer.createElement( 'block-widget' );
    const insideblockwidget = writer.createElement( 'inside-block-widget' );

    writer.append( insideblockwidget, blockwidget );

    return blockwidget;
}