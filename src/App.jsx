import { useState } from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { a11yLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import './App.css'

import { FrameProvider } from './data/frameData'

import {Paragraph} from '@/components/Typography.jsx'
import Frame from './components/Frame'
import TitleFrame from './components/TitleFrame'
import Code from './components/Code'

function App() {
  return (
    <FrameProvider>
      <div className='grid grid-cols-1 gap-4 bg-slate-950'>
        <TitleFrame 
          title="Array.reduce: the JavaScript Swiss Army Knife" 
          description={
            <>
              <Paragraph>The reduce method in JavaScript is a powerful tool for working with arrays. It allows you to process a list of values and return a single result, whether that's a sum, a new object, or even a completely transformed data structure.</Paragraph>
              <Paragraph>We’ll walk through the basics of how reduce() works, explore practical examples, and highlight common mistakes to avoid. If you've ever struggled to understand when or why to use reduce(), this will give you a clear starting point.</Paragraph>
            </>
          }
        ></TitleFrame>
        <Frame>
          <div>
              <Paragraph className='text-lg'>The reduce method takes a callback function and an optional initial value. The callback function is called for each element in the array, and it receives two arguments: the accumulator (which accumulates the result) and the current value being processed.</Paragraph>
              <Code>
                {`array.reduce((accumulator, currentValue) => {
  return updatedAccumulator 
}, initialValue)`}
              </Code>
              </div>
        </Frame>
        <Frame></Frame>
      </div>
    </FrameProvider>
  )
}

export default App
