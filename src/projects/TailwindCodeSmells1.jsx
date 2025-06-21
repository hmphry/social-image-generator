import { FrameProvider } from './data/frameData'

import {Header2, Header3, Header5, Paragraph, Eyebrow} from '@/components/Typography.jsx'
import Frame from './components/Frame'
import TitleFrame from './components/TitleFrame'
import FinalFrame from './components/FinalFrame'
import Code from './components/Code'

const codeExamples = {
    codesmell1: `<div class="mt-[13px] text-[#1a1a1a] w-[97%]">`,
    codesmell2: `<span class="px-4 py-2 bg-blue-600 text-white rounded cursor-pointer">
  Submit
</span>`,
}


function App() {

  return (
    <FrameProvider>
      <div className='grid grid-cols-1 gap-12 bg-slate-950 p-10'>
        
        <TitleFrame 
          title={<div className=''>Common Tailwind Code Smells (pt. 1) </div>} 
          description={
            <>
              <Paragraph>Tailwind makes it fast to build... and just as fast to make a mess. When every style decision lives in the markup, bad habits don’t just affect design… they pile up across your components. Most of these issues won’t break a thing. But they will bloat your HTML, confuse your teammates, and turn small changes into risky ones.</Paragraph>
              <Paragraph>In this series, I’m breaking down real-world Tailwind code smells. Subtle patterns that look fine at first but lead to maintenance headaches later. Let’s shine a light on them before they spread.</Paragraph>
            </>
          }
        ></TitleFrame>

          {/* Misusing Arbitrary Values */}
        <Frame>
          <div className='vg-content flex flex-col gap-4 justify-start pt-5'>
            <Header2 className='text-3xl'>Misusing Arbitrary Values</Header2>
            <Paragraph className="max-w-11/12">Arbitrary values might be the best and worst thing Tailwind ever introduced. They're powerful for quick one-offs. The usability leap from Tailwind 2 to 3 made that obvious. However, overusing arbitrary values breaks consistency. It leads to inconsistent branding, increases maintenance costs, and makes future updates slower and riskier.</Paragraph>
            <Code>{codeExamples['codesmell2']}</Code>
            <Paragraph className="max-w-11/12">This example has:</Paragraph>
            <ul className='grid grid-cols-1 pl-4'>
                    <li><Paragraph className="max-w-full font-sm">- a non-responsive, non-standard margin</Paragraph></li>
                    <li><Paragraph className="max-w-full font-sm">- a color that likely isn’t in your palette</Paragraph></li>
                    <li><Paragraph className="max-w-full font-sm">- a width that won’t align to any grid or layout system</Paragraph></li>
                </ul>
            <Paragraph className="max-w-11/12">All these "work", but none of them scale. Before reaching for an arbitrary value, ask yourself if it’s truly necessary. If it is, keep it limited to one-off use cases. When a value starts repeating, extract it into a reusable utility class using @apply.</Paragraph>
            </div>
        </Frame>

          {/* Overloaded Component */}
        <Frame>
          <div className='vg-content flex flex-col gap-4 justify-start pt-5'>
            <Header2 className='text-3xl'>Classes Over Semantics</Header2>
            <Paragraph className="max-w-11/12">Using the wrong HTML element just to apply Tailwind classes is a subtle but costly mistake. It may look fine in the browser, but it breaks accessibility, introduces unexpected behavior, and creates unnecessary tech debt.</Paragraph>
            <Code>{codeExamples['codesmell2']}</Code>
            <Paragraph className="max-w-11/12">This example has:</Paragraph>
            <ul className='grid grid-cols-1 pl-4'>
                <li><Paragraph className="max-w-full font-sm">- a non-interactive element pretending to be a button</Paragraph></li>
                <li><Paragraph className="max-w-full font-sm">- no keyboard accessibility</Paragraph></li>
                <li><Paragraph className="max-w-full font-sm">- no semantic meaning for assistive technologies</Paragraph></li>
            </ul>
            <Paragraph className="max-w-11/12">It works visually, but it doesn't behave like it should. This creates usability gaps, hurts accessibility compliance, and increases QA risk. Before defaulting to a generic tag, ask yourself: what is this element actually doing? If it’s a button, use button. If it’s content, use a semantic container. Tailwind doesn’t replace HTML semantics, it styles them.</Paragraph>
            </div>
        </Frame>

          {/* Overloaded Component */}
        <Frame>
          <div className='vg-content flex flex-col gap-4 justify-start pt-10'>
            <Header2 className='text-3xl'>Duplicate Utility Chains</Header2>
            <Paragraph className="max-w-11/12">When you’re building fast, it’s natural to copy a set of utility classes from one element to another. Over time, those repeated patterns stack up... quietly increasing the effort it takes to make even small changes.</Paragraph>
            <Paragraph className="max-w-11/12">This often shows up as:</Paragraph>
            <ul className='grid grid-cols-1 pl-4'>
                <li><Paragraph className="max-w-full font-sm">- Identical or near-identical utility strings across multiple elements.</Paragraph></li>
                <li><Paragraph className="max-w-full font-sm">- Minor variations that aren’t abstracted or intentional.</Paragraph></li>
                <li><Paragraph className="max-w-full font-sm">- Visual inconsistencies that appear when only some instances are updated.</Paragraph></li>
            </ul>
            <Paragraph className="max-w-11/12">These patterns can chip away at maintainability. If a group of utilities shows up more than once, consider turning it into a utility class with @apply, or extracting a component. Duplication isn’t always bad...   but in Tailwind, it’s a sign worth paying attention to.</Paragraph>
            <Paragraph className="max-w-full"></Paragraph>
            </div>
        </Frame>

          {/* Overloaded Component */}
        <Frame>
          <div className='vg-content flex flex-col gap-4 justify-start pt-10'>
            <Header2 className='text-3xl'>Utility Creep In Logic</Header2>
            <Paragraph className="max-w-11/12">Tailwind encourages utility-first styling, but when conditional logic starts piling up inside your class strings, things can get out of hand. It's especially common in dynamic components where props or state determine layout or appearance.</Paragraph>
            <Paragraph className="max-w-11/12">This often looks like:</Paragraph>
            <ul className='grid grid-cols-1 pl-4'>
                <li><Paragraph className="max-w-full font-sm">- Long ternaries injecting multiple utilities at once.</Paragraph></li>
                <li><Paragraph className="max-w-full font-sm">- Deeply nested conditionals inside className or :class.</Paragraph></li>
                <li><Paragraph className="max-w-full font-sm">- Class strings that are hard to read, debug, or safely modify.</Paragraph></li>
            </ul>
            <Paragraph className="max-w-11/12">It works... but it becomes a cognitive load. The more logic you cram into a class string, the harder it is to understand what the component is actually doing. Instead, consider using helper functions, libraries like clsx, tailwind-merge or classnames, or splitting your logic outside the markup. Keep your class strings readable and your logic intentional.</Paragraph>
            </div>
        </Frame>

          {/* Overloaded Component */}
        <Frame>
          <div className='vg-content flex flex-col gap-4 justify-start pt-10'>
            <Header2 className='text-3xl'>Using Pixels</Header2>
            <Paragraph className="max-w-11/12">Just don’t. Tailwind uses rem units by design. REMs scale with user settings, improve accessibility, and support responsive design. Pixels are rigid. While they respect browser zoom, they don’t respond to changes in the root font size. That makes them less adaptable in responsive layouts and less friendly to users who increase font sizes for readability.</Paragraph>
            <Paragraph className="max-w-11/12">Yes, the math takes a second, but it’s simple:</Paragraph>
            <ul className='grid grid-cols-1 pl-4'>
                <li><Paragraph className="max-w-full font-sm">- 1 = 0.25rem = 4px.</Paragraph></li>
                <li><Paragraph className="max-w-full font-sm">- 4 = 1rem = 16px.</Paragraph></li>
                <li><Paragraph className="max-w-full font-sm">- 8 = 2rem = 32px.</Paragraph></li>
            </ul>
            <Paragraph className="max-w-11/12">Tailwind’s spacing scale is built to solve this for you. If you’re reaching for a pixel value, ask why, and if there’s a better, more scalable way to do it. Spoiler: there probably is.</Paragraph>
            </div>
        </Frame>
        
        <FinalFrame title="That's all, Folks">
            <Paragraph>None of these smells will crash your build or throw red in the console. But they add up, slowly chipping away at consistency, speed, and confidence in your codebase. The key is catching them early. Code reviews, pair programming, and just slowing down enough to ask "does this feel right?" go a long way.</Paragraph>
            <Paragraph>This was just part one, as there are plenty more patterns that can bloat your Tailwind. If you’ve spotted patterns, quirks, or anti-patterns worth surfacing, drop them in the comments. I'm always interested in hearing about them!</Paragraph>
        </FinalFrame>
      </div>
    </FrameProvider>
  )
}

export default App
