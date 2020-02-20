import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import { toWidget, toWidgetEditable } from '@ckeditor/ckeditor5-widget/src/utils';

export default class WidgetEditing extends Plugin {
    init() {
        console.log('WidgetEditing#init() got called');
        this._defineSchema();
        this._defineConverters();
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
    }

    _defineConverters() {
        //convertor for creating block-widget element view in editor
        this.editor.conversion.for('upcast').elementToElement({
            view: {
                name: 'section',
                classes: 'block-widget'
            },
            model: 'block-widget'
        });
        this.editor.conversion.for('upcast').elementToElement({
            view: {
                name: 'h1',
                classes: 'inside-block-widget'
            },
            model: 'inside-block-widget',
        });


        this.editor.conversion.for('downcast').elementToElement({
            model: 'block-widget',
            view: {
                name: 'section',
                classes: 'block-widget'
            }
        });
        this.editor.conversion.for('downcast').elementToElement({
            model: 'inside-block-widget',
            view: {
                name: 'h1',
                classes: 'inside-block-widget'
            }
        });


        conversion.for( 'editingDowncast' ).elementToElement( {
            model: 'block-widget',
            view: ( modelElement, viewWriter ) => {
                const section = viewWriter.createContainerElement( 'section', { class: 'block-widget' } );

                return toWidget( section, viewWriter, { label: 'simple box widget' } );
            }
        } );
        conversion.for( 'editingDowncast' ).elementToElement( {
            model: 'inside-block-widget',
            view: ( modelElement, viewWriter ) => {
                // Note: You use a more specialized createEditableElement() method here.
                const h1 = viewWriter.createEditableElement( 'h1', { class: 'inside-block-widget' } );

                return toWidgetEditable( h1, viewWriter );
            }
        } );

    }
}