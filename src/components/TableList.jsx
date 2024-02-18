import React, { useState } from 'react'
import OnClick from './OnClick'
import Navbar from '../navbar/Navbar'

const TableList = () => {
    let [input, setInput] = useState(String())
    let [isFav,setIsFav] = useState(false)
    let [list, setList] = useState([])
    let [edit, setEdit] = useState(true)
    
    let [indexL , setIndexL] = useState() 
    
    let addData = () => {

        let data = {
            input: input,
            isFav : isFav
        }
        let newList = [...list, data]
        setList(newList)
        resetVar()
    }

    let resetVar = () => {
        setInput(String())
        setIsFav()
    }

    let deleteAt = (index) => {
        console.log(index)
        list.splice(index, 1)
        let newList = [...list]
        setList(newList) 
   }

    let editAt = (index) => {
        let data = {
            input: input,
            isFav: isFav
        }
        setIndexL(index)
        console.log(edit)
        if (edit) {
            setEdit(false)
            setInput(list[index].input)
            setIsFav(list[index].isFav)
        }
        else {
            list[index] = data
            let newList = [...list]
            setList(newList)
            setEdit(true)
            resetVar()
        }
        
        
    }
    return (
        <>
            <Navbar/>
            <div className='flex flex-col items-center h-screen '>
             
            <div className=' mt-4  p-2  bg-white shadow rounded ' >
                <h1 className=' text-5xl'>Table Content</h1>
            </div>

            <div className=' mt-7 w-98 p-2  bg-white  rounded ' >
                <div className='flex flex-col gap-4 items-center'>
                    <h1 className=' text-4xl text-gray-500 shadow'>Add Details</h1>
                    <div className='flex text-xl  gap-2 px-2 shadow-lg border border-gray-200 rounded'>
                        <h3>Enter text</h3>
                        <input
                                placeholder='Enter Text'
                                type="text "
                                className=' outline-none'
                                value={input}
                                onChange={(e) => { setInput(e.target.value)}}
                        />
                    </div>
                    <div className='flex bg-red-200  gap-10 px-2 text-xl shadow-lg border border-gray-200 rounded'>
                        <h3>Fav</h3>
                            <input className='ml-auto ' type="checkbox" checked = {isFav} onChange={(e) => { setIsFav(!isFav)}} />
                    </div>
                        <button className=' self-center w-11/12 h-10 bg-blue-400  rounded-md shadow'
                            onClick={() => { edit ? addData()  : editAt(indexL)}} >{}
                            {edit ? (<p>Add to table</p>) : (<p>Save</p>)}</button>
                </div>
            </div>

            <table className="text-white table-auto w-3/4 mt-7 ">
                <thead>
                    <tr>
                        <th className="border border-slate-600 ...">Content</th>
                            <th className="border border-slate-600 ...">favorite</th>
                            <th className="border border-slate-600 ...">Delete</th>
                            <th className="border border-slate-600 ...">Edit</th>
                    </tr>
                </thead>
                    <tbody>
                        {
                            list.map( (data,index) =>(
                                <tr key={index} value= {data}>
                                    <td className=" text-center border border-slate-700 ...">{data.input}</td>
                                    <td className="text-center border border-slate-700 ...">
                                        {data.isFav ? 'Yes' : 'No'}
                                    </td>
                                    <td className="text-center border border-slate-700 ...">
                                        <button
                                            onClick={() => deleteAt(index)}
                                            className=' bg-red-400 bg-opacity-40 hover:bg-red-400 h-10 w-2/4 my-3 rounded-lg  '>Delete</button>
                                    </td>
                                    <td className="text-center border border-slate-700 ...">
                                        <button
                                            onClick={() => editAt(index)}
                                            className=' h-10 w-2/4 my-3 bg-opacity-50  hover:bg-blue-400 bg-blue-950 rounded-full'>
                                            Edit</button>
                                    </td>
                                </tr>
                            ))
                        }
                    
                </tbody>
            </table>

            </div>
        </>
    )
}

export default TableList