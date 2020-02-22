import Plugin from '@ckeditor/ckeditor5-core/src/plugin';

export default class BlockWidgetUi extends Plugin {
    init() {
        console.log( 'widgetUi#init() got called' );
    }
}