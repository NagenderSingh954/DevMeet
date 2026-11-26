import React from 'react'


import {
  MDXEditor,

  // Toolbar
  toolbarPlugin,
  UndoRedo,
  BlockTypeSelect,
  BoldItalicUnderlineToggles,
  StrikeThroughSupSubToggles,
  CodeToggle,
  CreateLink,
  ListsToggle,
  InsertCodeBlock,
  ChangeCodeMirrorLanguage,
  InsertImage,
  InsertTable,
  InsertThematicBreak,
  DiffSourceToggleWrapper,
  ConditionalContents,
  Separator,

  // Editor plugins
  headingsPlugin,
  listsPlugin,
  quotePlugin,
  thematicBreakPlugin,
  markdownShortcutPlugin,
  codeBlockPlugin,
  codeMirrorPlugin,
  linkPlugin,
  linkDialogPlugin,
  imagePlugin,
  tablePlugin,
  diffSourcePlugin,
  ButtonWithTooltip,
  Button

} from "@mdxeditor/editor";



import '@mdxeditor/editor/style.css'
import EtitorWrapper from './EtitorWrapper';
import DownloadLogo, { EditorLogo } from './component/logos';

function NotePad() {
  return (
    <div>
      <EtitorWrapper>
        <MDXEditor
          className='dark-theme flex-1  bg-[#252526]'
          markdown="hello"
          placeholder="All the Perticipant can write Here "
          plugins={[
            // Basic formatting
            headingsPlugin(),
            listsPlugin(),
            quotePlugin(),
            thematicBreakPlugin(),
            markdownShortcutPlugin(),

            // Code editor
            codeBlockPlugin(),
            codeMirrorPlugin({
              codeBlockLanguages: {
                js: "JavaScript",
                jsx: "React JSX",
                ts: "TypeScript",
                tsx: "React TSX",
                py: "Python",
                cpp: "C++",
                java: "Java",
                html: "HTML",
                css: "CSS",
                json: "JSON",
                bash: "Bash",
              },
            }),

            // Links
            linkPlugin(),
            linkDialogPlugin(),

            // Images and tables
            imagePlugin(),
            tablePlugin(),

            // Source mode
            diffSourcePlugin(),

            // Toolbar
            toolbarPlugin({
              toolbarClassName: "responsive-toolbar",
              toolbarContents: () => (
                <DiffSourceToggleWrapper>
                 <ButtonWithTooltip title='Import Node'>
                  <EditorLogo/>
                  </ButtonWithTooltip>
                  <ButtonWithTooltip title='Save Node'>
                    <DownloadLogo/>
                  </ButtonWithTooltip>
                  
                   <Separator />
                  <UndoRedo />
                  <Separator />

                  <BoldItalicUnderlineToggles />
                  <StrikeThroughSupSubToggles />
                  <CodeToggle />

                  <Separator />

                  <ListsToggle />

                  <Separator />

                  <BlockTypeSelect />
                  <Separator />
                  <CreateLink />
                  <InsertImage />

                  <Separator />

                  <InsertTable />
                  <InsertCodeBlock />
                  <InsertThematicBreak />


                  <Separator />

                  <ConditionalContents
                    options={[
                      {
                        when: (editor) =>
                          editor?.editorType === "codeblock",
                        contents: () => <ChangeCodeMirrorLanguage />,
                      },
                      {
                        fallback: () => <></>,
                      },
                    ]}
                  />
                </DiffSourceToggleWrapper>
              ),
            }),
          ]}
        />
      </EtitorWrapper>

    </div>

  )
}

export default NotePad