import SyntaxHighlighter from 'react-syntax-highlighter';
import { a11yLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const Code = ({children}) => {
    return (
        <div className='text-lg  bg-gradient-to-l from-pink to-blue'>
            <div className='p-1'>
                <div className='p-3 bg-white'>
                    <SyntaxHighlighter language="javascript" style={a11yLight}>{children}</SyntaxHighlighter>
                </div>
            </div>
        </div>
        )
}

export default Code;