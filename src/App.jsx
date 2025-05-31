import { FrameProvider } from './data/frameData'

import {Header2, Header3, Header5, Paragraph, Eyebrow} from '@/components/Typography.jsx'
import Frame from './components/Frame'
import TitleFrame from './components/TitleFrame'
import FinalFrame from './components/FinalFrame'
import Code from './components/Code'

function App() {

  return (
    <FrameProvider>
      <div className='grid grid-cols-1 gap-12 bg-slate-950 p-10'>
        
        <TitleFrame 
          title="Reduce: the JavaScript Swiss Army Knife" 
          description={
            <>
              <Paragraph>The reduce array method in JavaScript is a powerful tool for working with arrays. It allows you to process a list of values and return a single result, whether that's a sum, a new object, or even a completely new data structure.</Paragraph>
              <Paragraph>We’ll walk through the basics of how array.reduce works, explore practical examples, and highlight common mistakes to avoid. If you've ever struggled to understand when or why to use a reducer, this will give you a clear starting point.</Paragraph>
            </>
          }
        ></TitleFrame>


        <Frame>
          <div className='vg-content flex flex-col justify-center gap-4'>
              <Header2 className='text-3xl'>The Basics</Header2>
              <Paragraph className='pb-4'>Array.reduce takes a callback function and an optional initial value. The callback function is called for each item in the array, and it receives two arguments: the accumulator and the current value being processed.</Paragraph>
              <Code>
                {`array.reduce((accumulator, currentValue) => {
    return updatedAccumulator 
}, initialValue)

// or

array.reduce(reducerFunction, initialValue)
`}
              </Code>
                <div className="grid grid-cols-2 gap-8 pt-4">
                    <div>
                        <Header5 className="max-w-full pb-4">Array.reduce Parameters</Header5>
                        <ul className='grid grid-cols-1 gap-1'>
                            <li><Paragraph className="max-w-full"><span className="font-semibold">reducer</span>: a callback that runs for each array item.</Paragraph></li>
                            <li><Paragraph className="max-w-full"><span className="font-semibold">initialValue</span>: starting value for the accumulator</Paragraph></li>
                        </ul>
                    </div>
                    <div>
                        <Header5 className="max-w-full pb-4">Reducer Function  Parameters</Header5>
                        <ul className='grid grid-cols-1 gap-1'>
                            <li><Paragraph className="max-w-full"><span className='font-semibold'>accumulator</span>: carried value across iterations.</Paragraph></li>
                            <li><Paragraph className="max-w-full"><span className='font-semibold'>currentValue</span>: the current array item.</Paragraph></li>
                        </ul>
                    </div>
                </div>
            </div>
        </Frame>

        {/* Examples */}
        <Frame>
          <div className='vg-content flex flex-col justify-center gap-4'>
                    <div>
                <Eyebrow>Example 1</Eyebrow>
                <Header2 className='text-3xl'>A Sum Of Numbers</Header2>
                </div>
                    <div className='grid grid-cols-1 gap-4 pb-6'>
                        <Paragraph>This example shows how a reducer processes an array to calculate a total. It begins with an initial value of 0, then adds each number to the accumulator as it iterates through the array. With each step, the running total is updated. After the final item is processed, reduce() returns the full sum.</Paragraph>
                        <Paragraph>This pattern is one of the most common uses of reduce() and a great starting point for understanding how it works.</Paragraph>
                    </div>
                <Code>
                {`const numbers = [1, 2, 3, 4]
const sum = numbers.reduce((acc, num) => acc + num, 0)
console.log(sum)  // Output: 10`}
              </Code>
              <Paragraph className='pt-6'><span className='font-bold'>Tip</span>: Do not forget to set the initial value. Without it, the first array element becomes the initial value.</Paragraph>
            </div>
        </Frame>
        <Frame>
          <div className='vg-content flex flex-col justify-center gap-4'>
              <div>
                    <Eyebrow>Example 2</Eyebrow>
                  <Header2 className='text-3xl'>Count</Header2>
              </div>
              <div className='pb-6'>
                    <Paragraph>Here we’re using a reducer to count how many times each value appears in the array. For each item, we check if it already exists as a key in the accumulator object. If it does, we add 1 to its count. If not, we start it at 1. Over time, the accumulator builds a tally of all the unique values and how often they occur.</Paragraph>
                </div>
              <Code>
                {`const votes = ['yes', 'no', 'yes', 'yes']
const tally = votes.reduce((acc, vote) => {
    acc[vote] = (acc[vote] || 0) + 1
    return acc
}, {})
console.log(tally)  // Output: { yes: 3, no: 1 }`}
              </Code>
              <div className='pt-6'>
                <Paragraph>This is a great pattern for analyzing survey results, votes, or any data where frequency matters.</Paragraph>
              </div>
            </div>
        </Frame>
        <Frame>
          <div className='vg-content flex flex-col justify-center gap-4'>
              <div>
                    <Eyebrow>Example 3</Eyebrow>
                  <Header2 className='text-3xl'>Complex Object</Header2>
              </div>
              <Paragraph className='pb-6'>This example groups items by a shared property. We start with an empty object, check if each group exists, create it if needed, and push the item into the right category.</Paragraph>
              <Code>
                {`const transactions = [
    { id: 1, type: 'income', amount: 500 },
    { id: 2, type: 'expense', amount: 200 },
    ...
]
const grouped = transactions.reduce((acc, tx) => {
    if (!acc[tx.type]) acc[tx.type] = []
    acc[tx.type].push(tx)
    return acc
}, {})
console.log(grouped)  // Output: { income: [...], expense: [...] }`}
              </Code>
            </div>
        </Frame>

        {/* Pitfalls */}
        <Frame>
            <div className='vg-content flex flex-col justify-center gap-4'>
                <Header2 className='text-3xl'>Pitfalls</Header2>
                <Paragraph className='pb-6'>Array.reduce is powerful, but easy to misuse. Here are some common mistakes to watch for:</Paragraph>
                <ul className='grid grid-cols-1 gap-4'>
                    <li><Paragraph className="max-w-full"><span className='font-bold'>Parameter Positioning</span>: While the initialValue is the second argument passed to array.reduce, the accumulator is the first parameter inside the reducer function.</Paragraph></li>
                    <li><Paragraph className="max-w-full"><span className='font-bold'>Overcomplicating logic</span>: Trying to do too much in one line makes your reducer hard to read. Break complex logic into smaller steps or helper functions.</Paragraph></li>
                    <li><Paragraph className="max-w-full"><span className='font-bold'>Mutating the accumulator carelessly</span>: If you're building objects or arrays inside the reducer, avoid modifying them directly. Use spread syntax or Object.assign for safer updates.</Paragraph></li>
                    <li><Paragraph className="max-w-full"><span className='font-bold'>Using a reducer when other methods fit better</span>: If you're just filtering or mapping data, use array.filter or array.map. array.reduce shines when you're accumulating, transforming, or replacing multiple loops with a single pass.</Paragraph></li>
                </ul>
            </div>
        </Frame>
        
        <FinalFrame title="That's all, Folks">
            <Paragraph>Thanks for sticking with me and exploring array.reduce. I hope this helped make the concept a little clearer and more practical. Do you have a favorite use case or question about array.reduce? Leave a comment, share the post, or just say hi. I would love to hear from you.</Paragraph>
        </FinalFrame>
      </div>
    </FrameProvider>
  )
}

export default App
