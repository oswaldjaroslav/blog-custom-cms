import * as React from 'react';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState, convertToRaw, RawDraftContentState, ContentState } from 'draft-js';
import { stateToHTML } from 'draft-js-export-html';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';


interface TextEditorProps {
    editorStateChange(value: EditorState): void;
}

interface TextEditorState {
    editorState: EditorState;
}

export const TextEditor = (props: TextEditorProps) => {
    const initialState = EditorState.createEmpty();
    return (
        <Editor 
        initialEditorState={initialState}
        onEditorStateChange={props.editorStateChange} />
    )
}