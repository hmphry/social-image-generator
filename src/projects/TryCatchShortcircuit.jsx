import { FrameProvider } from './data/frameData'

import {Header2, Header3, Header5, Paragraph, Eyebrow} from '@/components/Typography.jsx'
import Frame from './components/Frame'
import TitleFrame from './components/TitleFrame'
import FinalFrame from './components/FinalFrame'
import Code from './components/Code'

const codeExamples = {
  strawman: `if (!req?.body) {
  logger.error("Missing request body")
  return res.status(400).send("Missing input")
}
if (!getUser(req)) {
  logger.error("User does not exist")
  return res.status(404).send("Unauthorized")
}
// ... more checks
res.send(result)`,
  tryCatch: `try {
  riskyBusinessLogic()
  res.status(200).send("Success")
} catch (error) {
  console.warn("Error occurred:", error)
  res.status(500).send("Internal Server Error")
}`,
shortCircuit: `if (!user) return res.status(401).send("Unauthorized")`,
service: `try {
  if (!user) throw { status: 401, message: "Unauthorized" }
  if (!input) throw { status: 400, message: "Missing input" }
  if (!allowed) throw { status: 403, message: "Forbidden" }
} catch (error) {
  logger.error("Error in service:", error)
  res.status(error.status || 500)
  .send(error.message || "Internal Server Error")
}`
}

function App() {

  return (
    <FrameProvider>
      <div className='grid grid-cols-1 gap-12 bg-slate-950 p-10'>
        
        <TitleFrame 
          title="Shortcircuting REST Endpoints with Try/Catch" 
          description={
            <>
              <Paragraph>Writing REST endpoints can get messy fast. You start with a simple goal, but suddenly you’re deep in nested conditionals, catching edge cases, and the once-clean function now looks like a spaghetti bowl of scattered res.status calls.</Paragraph>
              <Paragraph>That’s why I love try/catch blocks. They're so much more than an error safety net. They can be a tool for clean, expressive flow control. By throwing purposefully inside your service layer, you can short-circuit logic, handle permissions, and respond with accurate status codes.</Paragraph>
            </>
          }
        ></TitleFrame>

          {/* short circuiting */}
        <Frame>
          <div className='vg-content flex flex-col gap-4 justify-start pt-10'>
              <Header2 className='text-3xl'>What is "Short-Circuiting"?</Header2>
              
                    <Paragraph>Short-circuiting is the idea of exiting early when something isn’t right. You don’t wait for the rest of the logic to run. You stop as soon as a condition fails.</Paragraph>
                    <Paragraph>Most of us already do this in our endpoints with lines like:</Paragraph>
              <Code>{codeExamples['shortCircuit']}</Code>
                <Paragraph>It works, but as your logic grows, so does the mess. More checks, more returns, more logging, more repeated status codes. When every possible failure a service might encounter is appropriately handled, the service becomes harder to read, harder to maintain, and harder to scale cleanly.</Paragraph>
            </div>
        </Frame>

                  {/* strawman */}
        <Frame>
          <div className='vg-content flex  flex-col gap-4 justify-start pt-10'>
                <Header2 className='text-3xl'>The Typical Endpoint</Header2>
                <Paragraph>This is what most API routes look like. And to be fair, it works. Every check is there, every response is accounted for.</Paragraph>
                <Code>
                {codeExamples['strawman']}
              </Code>
                <Paragraph>However, it’s noisy, repetitive and cluttered, even with short-circuiting.</Paragraph>
            </div>
        </Frame>

        {/* try/catch */}
        <Frame>
          <div className='vg-content flex flex-col gap-4 justify-start pt-10'>
              <Header2 className='text-3xl'>Why Try/Catch</Header2>
              <Paragraph className='pb-4'>The try/catch block is used to safely run code that might fail. If an error is thrown in the try, control jumps to the catch. This keeps your app from crashing and lets you respond cleanly.</Paragraph>
              <Code>
                {codeExamples['tryCatch']}
              </Code>
              <Paragraph className='pb-4'>It’s a safety net for your code. When used with intention, it stops being just a backup plan and starts becoming a smart way to guide your logic.</Paragraph>
            </div>
        </Frame>

        {/* Examples */}
        <Frame>
          <div className='vg-content flex flex-col gap-4 justify-start pt-10'>
                  <Header2 className='text-3xl'>Try/Catch Short-Circuit</Header2>
              <Paragraph>Short-circuiting still makes sense. We should exit early when something’s wrong. However, instead of cluttering every route with checks, we push the decisions into services and let them throw.</Paragraph>
<Paragraph>Then the route stays clean, and the error handling is centralized.</Paragraph>
              <Code>
                {codeExamples['service']}
              </Code>
              <Paragraph><span className='font-bold'>Tip:</span> More logic can be handled using a switch statement in the catch, if needed.</Paragraph>
            </div>
        </Frame>

        {/* Pitfalls */}
        <Frame>
            <div className='vg-content flex flex-col justify-start gap-4 pt-10'>
                <div>
                    <Eyebrow>Things to avoid</Eyebrow>
                    <Header2 className='text-3xl'>Don't nest Try/catch blocks</Header2>
                </div>
                <Paragraph>Overnesting try/catch blocks can make it harder to trace where things go wrong. When everything is wrapped in error handling, it blurs the line between expected and unexpected failures.</Paragraph>
                <Paragraph>To keep things clear:</Paragraph>
                <ul className='grid grid-cols-1 gap-4'>
                    <li><Paragraph className="max-w-full">- <span className='font-bold'>Handle errors in a single layer.</span> Avoid scattering try/catch blocks across your routes, services, and controllers. Centralize your error handling, ideally at the route or middleware level, so you always know where errors are caught and how they're handled.</Paragraph></li>
                    <li><Paragraph className="max-w-full">- <span className='font-bold'>Create a custom class for intentional errors.</span> Don’t throw generic Error objects for expected failures. Instead, define a lightweight error class that only includes what’s necessary, like status and message.</Paragraph></li>
                    <li><Paragraph className="max-w-full">- <span className='font-bold'>Use the native Error constructor for unexpected issues.</span> JavaScript’s built-in Error includes stack traces and other debugging tools. Keeping these separate from your expected errors makes them easier to log, trace, and fix.</Paragraph></li>
                </ul>
            </div>
        </Frame>
        <Frame>
            <div className='vg-content flex flex-col justify-start gap-4 pt-10'>
                <div>
                    <Eyebrow>Things to avoid</Eyebrow>
                    <Header2 className='text-3xl'>Other pitfalls</Header2>
                </div>
                <Paragraph>While this is a cleaner pattern, there are still some things you need to look out for:</Paragraph>
                <ul className='grid grid-cols-1 gap-4'>
                    <li><Paragraph className="max-w-full"><span className='font-bold'>- Unclear Logic Flow</span>: Because thrown errors skip over the normal flow, it can be harder to trace what’s happening. Without clear structure, it might feel like the code “jumps” around unpredictably.</Paragraph></li>
                    <li><Paragraph className="max-w-full"><span className='font-bold'>- Over Logging</span>: Just because you're catching everything in one place doesn't mean you should log everything the same way. Make sure to distinguish between expected errors and actual system failures.</Paragraph></li>
                    <li><Paragraph className="max-w-full"><span className='font-bold'>- Performance Tradeoffs</span>: Using try/catch for control flow can be slower than basic short-circuiting. Personal benchmarks show a ~20–30% difference in some cases. It’s usually negligible, but worth factoring in when performance really matters.</Paragraph></li>
                </ul>
            </div>
        </Frame>
        
        <FinalFrame title="That's all, Folks">
            <Paragraph>Thanks for following along with this exploration of short-circuiting REST endpoints using try/catch. I hope it gave you a new way to think about structure, flow, and how clean your API logic can actually be. Have you used this pattern yourself, or wrestled with the tradeoffs? Drop a comment, share your thoughts, or just say hey. I’d love to hear how you’re handling errors in your services.</Paragraph>
        </FinalFrame>
      </div>
    </FrameProvider>
  )
}

export default App
