import React,{useRef,useState} from 'react'
import {upload} from './api'
import LinkList from './LinkList'

export default function UploadForm() {
    const inputEl = useRef(null);
    const [datas,setData]=useState([])

    console.log(inputEl)
    console.log('datas',datas)

    const onUpload=(event)=>{
       event.preventDefault()
       console.log('el:',inputEl.current.files[0])
       
       upload(inputEl.current.files[0],_onSuccess,_onFailure)
    }
    const _onSuccess=(data)=>{
        console.log('OK',data)
        setData(datas.concat(data))
        console.log(datas)
        
    }
    const _onFailure=()=>{
        console.log('Fail')
    }
    return (
        <form onSubmit={onUpload}>
            <input ref={inputEl} type='file'/>
            <button type='submit' >Upload</button>
             <LinkList links={datas}/> 
        </form>
    )
}

