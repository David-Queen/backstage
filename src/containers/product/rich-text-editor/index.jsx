import React, {Component} from 'react';
import {EditorState, ContentState} from 'draft-js';
import {Editor} from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';

import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import './index.less';

class RichTextEditor extends Component {
    state = {
        editorState: EditorState.createEmpty(),
    };

    constructor(props) {
        super(props);

        const {detail} = this.props;
        let editorState;

        if (detail) {
            const blocksFromHtml = htmlToDraft(detail);
            const {contentBlocks, entityMap} = blocksFromHtml;
            const contentState = ContentState.createFromBlockArray(contentBlocks, entityMap);
            editorState = EditorState.createWithContent(contentState);
        } else {
            editorState = EditorState.createEmpty();
        }

        this.state = {
            editorState
        };
    }

    onEditorStateChange = (editorState) => {
        this.setState({
            editorState,
        });
    };

    render() {
        const {editorState} = this.state;
        return (
            <div>
                <Editor
                    editorState={editorState}
                    editorClassName="rich-text-editor"
                    onEditorStateChange={this.onEditorStateChange}
                />
            </div>
        );
    }
}

export default RichTextEditor;