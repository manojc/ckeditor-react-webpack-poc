import WidgetEditing from './widget-editing';
import WidgetUi from './widget-ui';
import Plugin from '@ckeditor/ckeditor5-core/src/plugin';

export default class BlockWidget extends Plugin {
    static get requires() {
        return [ WidgetEditing, WidgetUi ];
    }
}