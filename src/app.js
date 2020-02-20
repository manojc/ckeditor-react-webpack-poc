import * as React from "react";
import CKEditor from "@ckeditor/ckeditor5-react";
import CKEditorInspector from '@ckeditor/ckeditor5-inspector';
import { Component } from "react";
import ClassicEditor from "./ckeditor";

export default class App extends Component {

    editor;

    constructor(props) {
        super(props);
        this.makeMeBold = this.makeMeBold.bind(this);
    }

    makeMeBold() {
        // console.log("clicked !", this);
        this.editor.commands.get('bold').execute('bold');
    }

    render() {
        return (
            <div>
                <CKEditor
                    editor={ClassicEditor}
                    data="<p>Hellos from CKEditor 5!</p> 
                    <section class='block-widget'>
                      <h1 class='inside-block-widget'>hai</h1>
                    </section>"
                    onInit={editor => {
                        // You can store the "editor" and use when it is needed.
                        console.log('Editor is ready to use!', editor);
                        console.log(Array.from(editor.ui.componentFactory.names()));
                        this.editor = editor;
                        CKEditorInspector.attach( 'editor', editor );
                    }}
                    onChange={(event, editor) => {
                        const data = editor.getData();
                        console.log({ event, editor, data });
                    }}
                    onBlur={(event, editor) => {
                        console.log('Blur.', editor);
                    }}
                    onFocus={(event, editor) => {
                        console.log('Focus.', editor);
                    }}
                />
                <button onClick={this.makeMeBold}>B</button>
            </div>
        )
    }

}