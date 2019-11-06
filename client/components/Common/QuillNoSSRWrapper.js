import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';
import '../../styles/quill.less';
const QuillNoSSRWrapper = dynamic(
  import('react-quill'),
  {
    ssr: false,
  }
);

class Editor extends React.Component {
  constructor (props) {
    super(props)
    this.state = { editorHtml: ''}
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (html) {
    this.setState({ editorHtml: html });
    this.props.handleChangeInputArea(html);
  }

  render () {
    return (
      <div style={{minHeight: '300px'}}>
        <QuillNoSSRWrapper
          theme='snow'
          onChange={this.handleChange}
          value={this.state.editorHtml}
          modules={Editor.modules}
          formats={Editor.formats}
          placeholder={this.props.placeholder}
         />
       </div>
     )
  }
}


Editor.modules = {
  toolbar: [
    [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
    [{size: []}],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{'list': 'ordered'}, {'list': 'bullet'},
     {'indent': '-1'}, {'indent': '+1'}],
    ['link', 'image', 'video'],
    ['clean']
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  }
}
/*
 * Quill editor formats
 * See https://quilljs.com/docs/formats/
 */
Editor.formats = [
  'header', 'font', 'size',
  'bold', 'italic', 'underline', 'strike', 'blockquote',
  'list', 'bullet', 'indent',
  'link', 'image', 'video'
]


export default Editor;
