import SyntaxHighlighter from 'react-syntax-highlighter';
import { a11yLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const Code = ({children}) => {
    return (
            <div className='p-1 bg-green'>
                <div className='p-1 bg-white pb-5 pl-4'>
                    <SyntaxHighlighter language="javascript" style={a11yLight}>{children}</SyntaxHighlighter>
                </div>
            </div>
        )
}

export default Code;