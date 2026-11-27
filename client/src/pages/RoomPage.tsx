"use client"
import React from 'react'


import {
  Group,
  Panel,
  Separator,
} from "react-resizable-panels";
import { Navbar } from '../components/roompage/Navbar.tsx';
import Notepad from '../components/notepad/Notepad.tsx';
import MonacoEditor from '../components/editor';
import Preview from '../components/preview/index.tsx';
import HtmlProvider from '../context/Providet.tsx';
import Terminal from '../components/Terminal.tsx';

function RoomPage() {
  return (
    <>
      <Navbar></Navbar>
      <div className="h-screen w-full bg-gray-950  text-white">

        <Group orientation="horizontal">

          <Panel defaultSize="20%" minSize="12%">
            <div className="h-full rounded-lg bg-gray-900">
              <div className="h-full w-full">
                <Notepad />
             
              </div>
            </div>
          </Panel>

          <Separator className="w-[1px] cursor-col-resize hover:bg-blue-500" />

          <Panel defaultSize="80%" minSize="30%">
            <Group orientation="vertical">
          <HtmlProvider>
              <Panel defaultSize="75%" minSize="17%">
                <Group orientation="horizontal">
                  <Panel defaultSize="50%" minSize="15%">
                    <div className="h-full rounded-lg bg-gray-900">
                      <MonacoEditor />
                    </div>
                  </Panel>
                  <Separator className="w-0.5 cursor-col-resize hover:bg-blue-500" />
                  <Panel defaultSize="50%" minSize="15%">
                    <div className="h-full rounded-lg bg-gray-900 ">
                     <Preview/>
                    </div>
                  </Panel>

                </Group>
              </Panel>

              <Separator className="h-0.5 cursor-col-resize hover:bg-blue-500" />

              <Panel defaultSize="25%" minSize="17%">
                <div className="h-full rounded-lg bg-gray-800">
                 <Terminal/>
                </div>
              </Panel>
          </HtmlProvider>
            </Group>
          </Panel>
          <Separator className="w-0.5 cursor-col-resize hover:bg-blue-500" />
          <Panel defaultSize="20%" minSize="12%">
            <div className="h-full rounded-lg bg-gray-900 p-4">
              Participants
            </div>
          </Panel>

        </Group>
      </div>
    </>
  )
}

export { RoomPage }