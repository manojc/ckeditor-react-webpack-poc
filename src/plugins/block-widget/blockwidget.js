import BlockWidgetEditing from './blockwidget-editing';
import BlockWidgetUi from './blockwidget-ui';
import Plugin from '@ckeditor/ckeditor5-core/src/plugin';

export default class BlockWidget extends Plugin {
    static get requires() {
        return [ BlockWidgetEditing, BlockWidgetUi ];
    }
}