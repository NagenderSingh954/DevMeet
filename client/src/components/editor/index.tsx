import React,{useRef} from 'react'

import Editor, { DiffEditor, useMonaco, loader } from '@monaco-editor/react';


function MonacoEditor() {
    const editorRef = useRef(null);

  function handleEditorDidMount(editor, monaco) {
    editorRef.current = editor;
  }

  function showValue() {
    alert(editorRef.current.getValue());
  }
  return (
    <>
        <Editor 
        height="90vh" 
        defaultLanguage="javascript" 
        defaultValue="// some comment"  
        onMount={handleEditorDidMount}
        theme='vs-dark'
        />
    </>
  )
}

export default MonacoEditor