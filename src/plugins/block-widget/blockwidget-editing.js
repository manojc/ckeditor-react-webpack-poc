import Plugin from '@ckeditor/ckeditor5-core/src/plugin';

import BlockWidgetCommand from './blockwidgetcommand';



export default class BlockWidgetEditing extends Plugin {

    init() {
        console.log('WidgetEditing#init() got called');
        this._defineSchema();
        this._defineConverters();

        this.editor.commands.add('blockwidget',new BlockWidgetCommand(this.editor));
    }

    _defineSchema() {
        // read link https://ckeditor.com/docs/ckeditor5/latest/api/module_engine_model_schema-SchemaItemDefinition.html
        // schema rules are defined to different elements using register or extend methods
        this.editor.model.schema.register('block-widget', {
            allowWhere: '$block'
        });

        this.editor.model.schema.register('inside-block-widget', {
            allowIn: 'block-widget',
            allowContentOf: '$block',
            isLimit:true
        });

        this.editor.model.schema.register("feedplaceholder",{
            allowIn:"inside-block"
        })
    }

    _defineConverters() {
        //convertor for creating block-widget element view in editor
        this.editor.conversion.elementToElement({
            view: {
                name: 'section',
                classes: 'block-widget'
            },
            model: 'block-widget'
        });
        this.editor.conversion.elementToElement({
            view: {
                name: 'h1',
                classes: 'inside-block-widget'
            },
            model: 'inside-block-widget',
        });


        this.editor.conversion.elementToElement({
            model: 'block-widget',
            view: {
                name: 'section',
                classes: 'block-widget'
            }
        });
        this.editor.conversion.elementToElement({
            model: 'inside-block-widget',
            view: {
                name: 'h1',
                classes: 'inside-block-widget'
            }
        });     
        this.editor.conversion.elementToElement({
            model: 'placeholder',
            view: {
                name: 'span',
                classes: [ 'placeholder' ]
            }
        });       
    }
}