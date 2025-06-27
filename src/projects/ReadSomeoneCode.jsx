import { FrameProvider } from './data/frameData'

import {Header2, Header5, Paragraph, Eyebrow} from '@/components/Typography.jsx'
import Frame from './components/Frame'
import TitleFrame from './components/TitleFrame'
import FinalFrame from './components/FinalFrame'


function App() {

  return (
    <FrameProvider>
      <div className='grid grid-cols-1 gap-12 bg-slate-950 p-10'>
        <TitleFrame 
          title="How to Read Code You Didn’t Write"
          description={
            <>
              <Paragraph>Reading unfamiliar code is a familiar role for a developer. Whether it's reviewing a pull request, inheriting legacy code, or debugging your teammate's vibe-code. It can feel slow, frustrating, and overwhelming. But, there are several tricks that make it easier.</Paragraph>
              <Paragraph>If you want to a better developer and a stronger contributor, master this skill.</Paragraph>
            </>
          }
        ></TitleFrame>

          {/* Big Picture */}
        <Frame>
            <div className='vg-content flex flex-col gap-4 justify-start pt-5'>
                <div>
                    <Eyebrow className='text-md'>Tip #1</Eyebrow>
                    <Header2 className='text-3xl'>Start with the Big Picture</Header2>
                </div>
                <Paragraph className="max-w-11/12 pt-6">Before diving into a single line of code, ask these following questions:</Paragraph>
                <div>
                    <Header5 className="max-w-full">What does this project do?</Header5>
                    <Paragraph className="max-w-11/">You might not know every detail of the application. But, understanding the purpose helps you make sense of the code. What is its goal? Who are the users? What problem does it solve?</Paragraph>
                </div>
                <div>
                    <Header5 className="max-w-full">What is the architecture?</Header5>
                    <Paragraph className="max-w-11/">Is it monolithic? Does it use micro-services? Is it client-rendered, server-rendered or both? What frameworks, libraries, or external services does it rely on? Answering these questions will prevent a lot of headaches.</Paragraph>
                </div>
                <div>
                    <Header5 className="max-w-full">What are the key components and flows?</Header5>
                    <Paragraph className="max-w-11/">Identify the entry points, core components, and user flows. This will allow you to focus on the big moving parts, instead of getting stuck in the minutia.</Paragraph>
                </div>
            </div>
        </Frame>

          {/* Use Case */}
        <Frame>
            <div className='vg-content flex flex-col gap-4 justify-start pt-10'>
                <div className='pt-6'>
                    <Eyebrow className='text-md'>Tip #2</Eyebrow>
                    <Header2 className='text-3xl'>Start by skimming</Header2>
                </div>
                <Paragraph className="max-w-11/12">Don’t start by reading every line of code. Instead, skim the code to get a feel for the structure. Look at folder names, file sizes, and function names. Which files seem central to the project? Which are utilities or helpers? This will help you focus on what’s worth your attention. And once you’ve mapped the terrain, zoom in on key areas. Start wide, then drill down.</Paragraph>
                <div>
                    <Eyebrow className='text-md'>Tip #3</Eyebrow>
                    <Header2 className='text-3xl'>Trace a Use Case</Header2>
                </div>
                <Paragraph className="max-w-11/">One of the fastest ways to understand a codebase is to follow a real feature. Start with a feature like submitting a form or viewing a profile. Begin at the UI, then trace the logic through handlers, services, and API calls to the database. This reveals how data flows and where key logic lives. Along the way, you’ll spot patterns, side effects, and design decisions. Follow the trail until things start to make sense.</Paragraph>
            </div>
        </Frame>

          {/* Notes */}
        <Frame>
            <div className='vg-content flex flex-col gap-4 justify-start pt-10'>
                <div>
                    <Eyebrow className='text-md'>Tip #4</Eyebrow>
                    <Header2 className='text-3xl'>Take notes</Header2>
                </div>
                <Paragraph className="max-w-11/12">The last developer might not have left documentation... but that doesn’t mean you shouldn’t. Write down what you’re learning as you explore. What does each module do? Where does the data live and how does it flow? Any odd patterns you notice? These notes will save you hours later when you revisit the same code.</Paragraph>
                <Paragraph className="max-w-11/12">Writing things down also forces you to engage. It shifts you from passive reading to active learning. Diagrams, flowcharts, or even simple bullet points can help cement your understanding.</Paragraph>
                <div className='pt-6'>
                    <Eyebrow className='text-md'>Tip #5</Eyebrow>
                    <Header2 className='text-3xl'>Use Git as a Guide</Header2>
                </div>
                <Paragraph className="max-w-11/12">The Git history is a powerful tool for understanding code in context. It shows you when a change was made, what was added or removed, who made it, and if you're lucky... why. Use commands like git log, git blame, or check pull requests to trace the evolution of a file or feature. This can reveal hidden intent, past bugs, or design decisions.</Paragraph>
            </div>
        </Frame>
        
        <FinalFrame title="That's all, Folks">
            <Paragraph className="pt-2">Reading code you didn’t write is a skill that gets easier with practice and the right approach. By Mastering this skill, you can go from feeling lost to navigating any territory. The goal isn’t to understand everything. But, to understand enough to move forward, contribute, and improve what’s there.</Paragraph>
            <Paragraph>Do you have your own strategies for reading unfamiliar code? Drop them in the comments. I’d love to learn from how others approach it. If this was helpful, consider sharing it with someone who inherited a legacy repo.</Paragraph>
        </FinalFrame>
      </div>
    </FrameProvider>
  )
}

export default App
