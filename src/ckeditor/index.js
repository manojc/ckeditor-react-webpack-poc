import EditorBase from "@ckeditor/ckeditor5-editor-decoupled/src/decouplededitor";
import Essentials from "@ckeditor/ckeditor5-essentials/src/essentials";
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import BlockWidget from "../plugins/block-widget/blockwidget";
import SimplePlugin from "../plugins/simpleplugin/simplepluging";

export default class CKEditorConfig extends EditorBase {

    static builtinPlugins = [
        Essentials,
        Paragraph,
        Bold,
        BlockWidget,
        SimplePlugin
    ];

    static defaultConfig = {
        toolbar: ['bold'],
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