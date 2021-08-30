import React, { Component, useEffect, useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const  TextEditor = () => {
    
    return (
        <CKEditor
            editor={ ClassicEditor }
            data=""
            onReady={ (editor: any) => {
                console.log( 'Editor is ready to use!', editor );
            } }
            onChange={ ( event: any, editor: any ) => {
                const data = editor.getData();
                console.log( { event, editor, data } );
            } }
            onBlur={ ( event: any, editor: any ) => {
                console.log( 'Blur.', editor );
            } }
            onFocus={ ( event: any, editor: any ) => {
                console.log( 'Focus.', editor );
            } }
            config={{
                ckfinder: {
                    uploadUrl: ""
                }
            }}
        />
    )
}

export default TextEditor;