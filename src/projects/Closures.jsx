import { FrameProvider } from './data/frameData'

import {Header2, Header3, Header5, Paragraph, Eyebrow} from '@/components/Typography.jsx'
import Frame from './components/Frame'
import TitleFrame from './components/TitleFrame'
import FinalFrame from './components/FinalFrame'
import Code from './components/Code'

const codeExamples = {
    closure1: `function outer() {
  let count = 0;
  return function inner() {
    count++;
    return count;
  };
}`,
    closure2: `function makeCounter() {
  let count = 0;
  return function () {
    return ++count;
  };
}

const counter = makeCounter();
counter(); // 1
counter(); // 2`,
closure3: `function formatWith(style) {
  return function (value) {
    return new Intl.NumberFormat('en-US', { style }).format(value);
  };
}
const formatCurrency = formatWith('currency');
formatCurrency(1234);`,
closure4: `function makeLogger(prefix) {
  return function(message) {
    console.log(\`[\${prefix}] \${message}\`);
  };
}
const info = makeLogger("INFO");
const error = makeLogger("ERROR");
info("System started");
// [INFO] System started
error("Something went wrong");
// [ERROR] Something went wrong`,
closure5: `function createSecret(value) {
  let secret = value;
  return {
    getSecret() { return secret },
    setSecret(newValue) { secret = newValue}
  };
}
const secretBox = createSecret("1234");
secretBox.getSecret(); // "1234"
secretBox.secret; // undefined (no direct access)`,
closure6: `function fetchWithRetry(url, retries) {
  return function attempt() {
    fetch(url).then(res => res.ok ? res : Promise.reject(res))
      .catch(() => {
        if (retries > 0) {
          console.log(\`Retrying... (\${retries} left)\`);
          retries--;
          attempt(); // still has access to \`retries\` and \`url\`
        }
      });
  };
}
const retryFetch = fetchWithRetry('/data', 3);
retryFetch();`
}

function App() {

  return (
    <FrameProvider>
      <div className='grid grid-cols-1 gap-12 bg-slate-950 p-10'>
        
        <TitleFrame 
          title={<div className=''>Closures and <div>Lexical Scope</div></div>} 
          description={
            <>
              <Paragraph>Closures and lexical scope are fundamental to how JavaScript works and are behaviors you’ve probably relied on without realizing it. If you’ve ever returned a function, kept a bit of state tucked away, or chained logic with configuration, closures were doing the heavy lifting.</Paragraph>
              <Paragraph>A closure is what allows a function to retain access to variables from its original scope, even after that scope has finished executing. This behavior is consistent and predictable. It’s what enables patterns like function factories, state encapsulation, and async callbacks to work seamlessly in plain JavaScript.</Paragraph>
            </>
          }
        ></TitleFrame>

          {/* short circuiting */}
        <Frame>
          <div className='vg-content flex flex-col gap-4 justify-start pt-10'>
              <Header2 className='text-3xl'>What Is Lexical Scope?</Header2>
              <Paragraph>Lexical scope refers to how JavaScript determines which variables are accessible in any given part of your code. It’s called lexical because it’s based on the physical structure of your code as it's written. Functions can access variables defined in the same scope, or in any parent scope that encloses them, regardless of where or when they’re actually called.</Paragraph>
              <Header2 className='text-3xl pt-10'>What Is a Closure?</Header2>
              
                    <Paragraph>A closure is what happens when a function returns a new function. The returned function retains access to variables from its lexical scope, even after that outer scope has finished executing. Instead of losing those references when the surrounding function ends, the returned function keeps its original environment, regardless of where it's called.</Paragraph>
                    <Paragraph>This behavior allows functions to preserve state, build private data, and respond later with the same context they were created in. </Paragraph>
            </div>
        </Frame>

        <Frame>
          <div className='vg-content flex  flex-col gap-4 justify-start pt-5'>
                    <Header2 className='text-3xl'>A Closure</Header2>
                <Paragraph>A practical example of a closure is a basic counter.</Paragraph>
                <Code>
                {codeExamples['closure2']}
              </Code>
                <Paragraph>Each time counter() is called, it increments the count variable, but count isn’t global or exposed. It lives inside the function returned by makeCounter(), accessible only through that inner function. The closure keeps it alive, maintaining its value between calls while keeping it safely out of reach. This is a clean way to preserve state without exposing internal data.</Paragraph>
            </div>
        </Frame>

        {/* try/catch */}
        <Frame>
          <div className='vg-content flex flex-col gap-4 justify-start pt-5'>
                <div>
                    <Eyebrow>Using Closures</Eyebrow>
                    <Header2 className='text-3xl'>Currying</Header2>
                </div>
              <Paragraph className='pb-4'>Currying is a pattern that uses closures to transform a function taking multiple arguments into a sequence of functions, each handling one argument at a time. It’s especially useful for creating reusable, preconfigured utilities.</Paragraph>
              <Code>
                {codeExamples['closure3']}
              </Code>
              <Paragraph className='pb-4'>In this example, the style parameter is captured by the closure, allowing us to generate formatting functions tailored to specific styles. This approach is particularly useful when working with localization or user-specific settings.</Paragraph>
            </div>
        </Frame>

        {/* Examples */}
        <Frame>
          <div className='vg-content flex flex-col gap-4 justify-start pt-5'>
                <div>
                    <Eyebrow>Using Closures</Eyebrow>
                    <Header2 className='text-3xl'>Function Factories</Header2>
                </div>
              <Paragraph>A function factory is a function that generates and returns another function, often customized with some internal value or setup.</Paragraph>
              <Code>
                {codeExamples['closure4']}
              </Code>
              <Paragraph>In this case, each logger function holds onto its own prefix, allowing consistent, contextual output without relying on shared state or repetitive logic. It’s a straightforward way to produce reusable, self-contained behaviors.</Paragraph>
            </div>
        </Frame>

        {/* Pitfalls */}
        <Frame>
            <div className='vg-content flex flex-col justify-start gap-4 pt-5'>
                <div>
                    <Eyebrow>Using Closures</Eyebrow>
                    <Header2 className='text-3xl'>Encapsulation</Header2>
                </div>
                <Paragraph>Closures offer a way to encapsulate internal state by keeping variables private and exposing only what’s needed. While commonly associated with object-oriented design, this pattern works just as effectively with functions.</Paragraph>
                <Code>
                {codeExamples['closure5']}
              </Code>
              <Paragraph>In this example, secret exists within the closure created by createSecret and is completely inaccessible from the outside. This is controlled interface without relying on classes or private field syntax.</Paragraph>
            </div>
        </Frame>
        <Frame>
            <div className='vg-content flex flex-col justify-start gap-4 pt-5'>
                <div>
                    <Eyebrow>Using Closures</Eyebrow>
                    <Header2 className='text-3xl'>Async Handlers</Header2>
                </div>
                <Paragraph>Closures are especially useful in asynchronous code, where a function needs to retain context after a delay. In cases like retries or delayed execution, closures let the function access variables from when it was created, even when it runs later.</Paragraph>
                <Code>
                {codeExamples['closure6']}
              </Code>
            </div>
        </Frame>

        <Frame>
            <div className='vg-content flex flex-col justify-start gap-4 pt-10'>
                <div>
                    <Eyebrow>Things to avoid</Eyebrow>
                    <Header2 className='text-3xl'>Pitfalls</Header2>
                </div>
                <Paragraph>Closures are powerful, but they’re not without risks. Used carelessly, they can introduce subtle bugs or performance issues that are hard to spot. Here are some things you need to look out for:</Paragraph>
                <ul className='grid grid-cols-1 gap-4'>
                    <li><Paragraph className="max-w-full"><span className='font-bold'>- Memory leaks</span>: Closures can unintentionally keep variables alive, especially if they capture large objects or DOM elements that are no longer needed. This can lead to increased memory usage over time.</Paragraph></li>
                    <li><Paragraph className="max-w-full"><span className='font-bold'>- Loop confusion</span>: A classic mistake is closing over loop variables, especially when using the var keyword, leading to unexpected values in callbacks or event handlers. The let keyword helps, but the pattern still requires attention.</Paragraph></li>
                    <li><Paragraph className="max-w-full"><span className='font-bold'>- Debugging challenges</span>: In deeply nested or chained functions, it’s not always clear which variables are being held onto or why. This can make debugging harder, especially when the retained values are stale or no longer relevant.</Paragraph></li>
                </ul>
                <Paragraph>Used thoughtfully, closures are elegant and efficient.</Paragraph>
            </div>
        </Frame>
        
        <FinalFrame title="That's all, Folks">
            <Paragraph>Thanks for walking through closures with me. I hope I’ve shown why closures are useful... and maybe made them a bit less mysterious. You won’t need them everywhere, but when the situation calls for it, they’re often the cleanest tool for the job. Got a favorite use case or a clever pattern? Drop a comment, share your thoughts, or just say hey.</Paragraph>
        </FinalFrame>
      </div>
    </FrameProvider>
  )
}

export default App
