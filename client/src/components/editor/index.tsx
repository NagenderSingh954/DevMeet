import React, { useContext, useRef, useState } from 'react'

import Editor, { DiffEditor, useMonaco, loader } from '@monaco-editor/react';
import HtmlCode from '../../context/code';


function MonacoEditor() {
  const editorRef = useRef(null);
  const [defaultCode, setDefaultCode] = useState(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>

</body>
</html>`)
    const {setCode}=useContext(HtmlCode)

  function handleEditorDidMount(editor, monaco) {
    editorRef.current = editor;
  }
  function handleEditorChange(value,event){
    setCode(value)
  }

  // function showValue() {
  //   alert(editorRef.current.getValue());   //i will implement inn teh future to sent teh requesyt to the backend on this basis 
  // }    
  return (
    <>
    {/* <button onClick={showValue}>Show value</button> */}
      <Editor
        height="90vh"
        defaultLanguage='html'
        defaultValue={defaultCode}
        onMount={handleEditorDidMount}
        onChange={handleEditorChange}
        theme='vs-dark'
        options={{
          suggestOnTriggerCharacters: true,
          quickSuggestions: true,
          tabCompletion: "on",
          wordBasedSuggestions: "allDocuments",
          minimap: { enabled: false },
          autoClosingBrackets: "always",
          autoClosingQuotes: "always",
          autoClosingOvertype: "always",
          formatOnPaste: true,
          formatOnType: true,


          automaticLayout: true,
          wordWrap: "on",
        }}
      />

    </>
  )
}

export default MonacoEditor