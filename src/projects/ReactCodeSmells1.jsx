import { FrameProvider } from './data/frameData'

import {Header2, Header3, Header5, Paragraph, Eyebrow} from '@/components/Typography.jsx'
import Frame from './components/Frame'
import TitleFrame from './components/TitleFrame'
import FinalFrame from './components/FinalFrame'
import Code from './components/Code'

const codeExamples = {
    codesmell1: ``,
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
retryFetch();`,
}

function App() {

  return (
    <FrameProvider>
      <div className='grid grid-cols-1 gap-12 bg-slate-950 p-10'>
        
        <TitleFrame 
          title={<div className=''>Common React Code Smells (pt. 1) </div>} 
          description={
            <>
              <Paragraph>These patterns won’t break your build or throw red errors in the console. In fact, they usually work just fine at first. That’s the problem. They creep in quietly... then slow development, increase cognitive load, and make your code harder to maintain, hand off, or scale.</Paragraph>
              <Paragraph>This isn’t about nitpicking, it’s about maintaining code health and improving delivery speed. Here are some of the most common "code smells" I’ve seen in React projects, why they matter, and how I typically address them.</Paragraph>
            </>
          }
        ></TitleFrame>

          {/* Overloaded Component */}
        <Frame>
          <div className='vg-content flex flex-col gap-4 justify-start pt-10'>
            <Header2 className='text-3xl'>When One Component Tries to Do It All</Header2>
            <Paragraph className="max-w-10/12">It started as a button. Now it handles form validation, makes API calls, shows toast messages, toggles loading states, and renders three modals. What was once a clean, focused component has quietly grown into a tangle of responsibilities.</Paragraph>
            <Paragraph className="max-w-10/12">These components are often easy to spot but deceptively hard to refactor. They tend to grow from the most basic building blocks like form elements. These quietly spread across the codebase, making small changes surprisingly risky.</Paragraph>
            <Header3 className="text-xl text-green pt-6">How to fix</Header3>
            <Paragraph className="max-w-full">Begin by identifying everything the component currently handles. From there, extract the core element into its own basic component. Then wrap that core with more focused, use-case-specific components. While doing this, take a moment to reassess whether each use case still makes sense. Shared logic should be pulled into custom hooks to keep things clean. The aim is to create clarity by separating responsibilities into smaller, testable pieces with clear boundaries.</Paragraph>
            </div>
        </Frame>

          {/* Prop Drilling */}
        <Frame>
          <div className='vg-content flex flex-col gap-4 justify-start pt-10'>
              <Header2 className='text-3xl'>Prop Drilling Through The Floor</Header2>
              <Paragraph className="max-w-10/12">It starts innocently enough: a prop passed from a parent to a child. But a few layers in, and you’re passing data through a component that doesn't even use it so something buried deep in the tree can render properly.</Paragraph>
              <Paragraph className="max-w-10/12">Prop drilling often crops up when global context isn't used early enough or when components get reused in the wrong places. It clutters up otherwise clean APIs and makes refactors painful, because now everything depends on everything else.</Paragraph>
            <Header3 className="text-xl text-green  pt-6">How to fix</Header3>
            <Paragraph className="max-w-10/12">Consider if the data really needs to live that high in the tree. If it's used deeply and broadly, consider lifting it into context. For data that affects the entire application, use Zustand or Jotai. If it's more specific to a component or feature, React's Context API is very capable.</Paragraph>
            </div>
        </Frame>

          {/* Side Effects */}
        <Frame>
          <div className='vg-content flex  flex-col gap-4 justify-start pt-5'>
                    <Header2 className='text-3xl'>Slamming Side-Effects In Components</Header2>
                <Paragraph className="max-w-10/12">When every bit of logic — from fetching data to syncing state to scrolling the page — is buried inside React hooks, your component becomes harder to read, update, and debug. Performance takes a hit... and so does your sanity. Not everything needs to live in a useEffect, you don’t need useMemo for every computed value, and don’t even get me started on useCallback. Over-relying on these hooks usually means state isn’t where it belongs, or that too many concerns are jammed into one place.</Paragraph>
            <Header3 className="text-xl text-green pt-6">How to fix</Header3>
            <Paragraph className="max-w-10/12">Consider whether that logic really belongs in the component. Extract reusable or domain-specific behavior into custom hooks. Keep your useEffect blocks tight: one job, clear dependencies. Save useMemo and useCallback for when they’re truly needed, like expensive calculations or stable references in props or context. Keep things simple, focused, and predictable.</Paragraph>
            </div>
        </Frame>

          {/* Global State */}
        <Frame>
          <div className='vg-content flex  flex-col gap-4 justify-start pt-5'>
                    <Header2 className='text-3xl'>Global State Becomes A Global Headache</Header2>
                <Paragraph className="max-w-10/12">If your global store knows about toast messages, checkbox values, and what modal is open, it's doing too much. Shared state is powerful, but when everything lives at the top level, even local interactions become global concerns. That means more re-renders, more accidental coupling, and way more cognitive overhead than necessary.</Paragraph>
                <Paragraph className="max-w-10/12">This kind of sprawl makes debugging harder and testing more brittle. Global state should support your app’s shared behaviors. It should not become a dumping ground for anything that’s mildly annoying to pass down.</Paragraph>
            <Header3 className="text-xl text-green pt-6">How to fix</Header3>
            <Paragraph className="max-w-10/12">Only put something in global state if multiple parts of your app truly need access to it. Local state should stay local. For shared logic, consider scoped contexts or composing stateful hooks. Keep your global store focused and intentional.</Paragraph>
            </div>
        </Frame>

          {/* Bundle Bloat */}
        <Frame>
          <div className='vg-content flex  flex-col gap-4 justify-start pt-5'>
                    <Header2 className='text-3xl'>Bundle Bloating</Header2>
                <Paragraph className="max-w-10/12">Not all imports are created equal. Pulling in an entire library just to use one utility or bringing in a full UI framework for a single spinner might not crash your app, but it will drag down performance and inflate your bundle.</Paragraph>
                <Paragraph className="max-w-10/12">These choices add up fast. Suddenly, you're shipping megabytes of unused code to every user, and wondering why your Lighthouse score tanked.</Paragraph>
                <Header3 className="text-xl text-green pt-6">How to fix</Header3>
                <Paragraph className="max-w-10/12">Be deliberate with what you import. Prefer named imports when possible. Check whether a utility can be written inline or sourced from a lighter package. And use a bundle analyzer-tools like webpack-bundle-analyzer make it easy to spot the heavy hitters. Small changes here can have outsized impact on load time and user experience.</Paragraph>
            </div>
        </Frame>
        
        <FinalFrame title="That's all, Folks">
            <Paragraph>None of these patterns are deal-breakers on their own. They won’t throw errors or crash your app. But left unchecked, they slow things down and introduce more risk. The best way to stay ahead of them is to catch the smell early. Code reviews are your first line of defense. When something feels off, it probably is.</Paragraph>
            <Paragraph>This was just part one, and there’s more to cover in the next round. If you’ve got a favorite code smell or a subtle pattern worth flagging, drop a comment or share it. Always curious what others are seeing in the wild.</Paragraph>
        </FinalFrame>
      </div>
    </FrameProvider>
  )
}

export default App
