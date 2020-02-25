import Plugin from "@ckeditor/ckeditor5-core/src/plugin";

import SimplePluginCommand from "./simpleplugincommand";


const pluginType = "fontColor";
const pluginStyle = "color";

export default class SimplePlugin extends Plugin {

    init() {
        console.log("simple plugin got initialised !");

        const editor = this.editor;

        // editor.model.schema.register('myplugin', {
        //     allowWhere: '$block',
        //     allowContentOf: '$text'
        // });
        // editor.conversion.elementToElement({
        //     model: 'myplugin',
        //     view: {
        //         name: 'span',
        //         classes: 'any-class',
        //     }
        // });

        // editor.commands.add("myplugin", new SimplePluginCommand(editor));

        editor.model.schema.extend('$text', { allowAttributes: pluginType });
        editor.model.schema.setAttributeProperties(pluginType, { isFormatting: false });

        editor.conversion.for('upcast').elementToAttribute({
            view: {
                name: 'span',
                styles: {
                    [pluginStyle]: '/([A-Za-z])\w+/g'
                }
            },
            model: {
                key: pluginType,
                value: function (viewElement) {
                    return viewElement.getStyle(pluginStyle);
                }
            }
        });

        editor.conversion.for('downcast').attributeToElement({
            model: pluginType,
            view: function (modelAttributeValue, viewWriter) {
                return viewWriter.createAttributeElement('span', {
                    style: pluginStyle + ':' + modelAttributeValue
                });
            }
        });

        editor.commands.add("myplugin", new SimplePluginCommand(editor, pluginType, 'brown'));
    }
}
