import EditorBase from "@ckeditor/ckeditor5-editor-decoupled/src/decouplededitor";
import Essentials from "@ckeditor/ckeditor5-essentials/src/essentials";

export default class CKEditorConfig extends EditorBase {

    static builtinPlugins = [
        Essentials
    ];

    static defaultConfig = {
        toolbar: {
            items: []
        },
        removePlugins: ['toolbar'],
        alignment: {
            options: ['left', 'center', 'right']
        },
        typing: {
            undoStep: 10
        },

        // This value must be kept in sync with the language defined in webpack.config.js.
        language: 'en'
    };

};