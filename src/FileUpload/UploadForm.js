import React,{useRef} from 'react'
import {upload} from './api'

export default function UploadForm() {
    const inputEl = useRef(null);
 console.log(inputEl)

    const onUpload=(event)=>{
       event.preventDefault()
       console.log('el:',inputEl.current.files[0])
       
       upload(inputEl.current.files[0],_onSuccess,_onFailure)
    }
    const _onSuccess=()=>{
        console.log('OK')
    }
    const _onFailure=()=>{
        console.log('OK')
    }
    return (
        <form onSubmit={onUpload}>
            <input ref={inputEl} type='file'/>
            <button type='submit' >Upload</button>
        </form>
    )
}

