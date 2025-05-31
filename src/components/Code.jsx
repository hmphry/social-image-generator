import SyntaxHighlighter from 'react-syntax-highlighter';
import { a11yLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const Code = ({children}) => {
    return (
            <div className='p-1 code-bg'>
                <div className='p-1 bg-white'>
                    <SyntaxHighlighter language="javascript" style={a11yLight}>{children}</SyntaxHighlighter>
                </div>
            </div>
        )
}

export default Code;