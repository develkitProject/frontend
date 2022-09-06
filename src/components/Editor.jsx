import React, { Component } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const toolbarOptions =[
          [{ 'header': [1, 2, false] }],
          ['bold','underline','strike', 'blockquote'],
          [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
          ['link', 'image'],
          [{ 'align': [] }, { 'color': [] }, { 'background': [] }],
          ['clean'],
        ]

export const formats = [
        'header',
        'bold', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent',
        'link', 'image',
        'align', 'color', 'background',        
      ];

const modules = {
    toolbar:{
        container: toolbarOptions,
    }
};

const Editor = ({placeholder, value, ...rest})=>{
        return(
        <div>

            <div>
                <p>제목</p><input/>

            </div>
            <div>
                <ReactQuill style={{height: "400px", width: "900px"}}
                    {...rest}
                    placeholder = 'Develop your teamwork through D.Velkit!'
                    value={value || ''} 
                    theme="snow"
                    modules={modules}
                    formats={formats} />
            </div>
            <button style={{marginTop: "100px"}}onClick={console.log(value)}>글 작성</button>
        </div>
        )
    }

export default Editor