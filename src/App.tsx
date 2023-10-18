import { useState } from 'react';
import './App.css';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';

const text=`# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
2. Use just 1s if you want!
3. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://popsql.com/static/external-logos/freecodecamp.png)
`;

function App() {
  const [markdownText, setMarkdownText] = useState<string>(text);

  return (
    <> 
    <div className='body'>
      <h1 className='title' style={{ textAlign: "center" }}>Markdown Previewer</h1>
      <div className='boxes-container'></div>
      <div className='editorWrap'>
       <div className='toolbar'>
      <div className='editor'>
        <i className='fab fa-free-code-camp'></i>
        Editor
        <i className='fa fa-arrows-alt'></i>
        </div>
          </div>
        <textarea 
          name='editorWrap' 
          id='editor' 
          value={markdownText} 
          onChange={(e) => setMarkdownText(e.target.value)}></textarea>
        </div>
        <div className='converter'></div>
        <div className='previewWrap'>
          <div id="toolbar" className='toolbar'>
            <div className='previewer'>
            <i id='free' className='fab fa-free-code-camp'></i>
            Previewer
            <i id='arr' className='fa fa-arrows-alt'></i>
        </div>
          </div>
        <div id='preview'>
          <ReactMarkdown>{markdownText}</ReactMarkdown>
        </div>
          </div>
            </div>
    </>
  )
}

export default App
