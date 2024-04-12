import React, {useEffect,useState} from 'react'
import NoteForm from '../component/Note'
import { Box, Grid } from '@mui/material'
import NoteCard from '../component/Note.Card'


export default function NotePage() {
    const [notes,setNotes]=useState([])

    const { handleShowData,render, flag, isUpdate} = NoteForm()
    const url = "http://192.168.1.50:4000/notes";

    useEffect(() => {
        fetch(url)
        .then(res=>res.json())
        .then(data=>setNotes(data))
        .catch(e=>console.log(e))
    },[flag])

    const handleDelete = (id) => {
        if(!isUpdate && id){
                fetch(url+'/'+id,{
                    method:"DELETE"
                }).catch((err)=>console.log("Delete Error :: ",err))

                const newNotes = notes.filter(note=> note.id != id)
                setNotes(newNotes)
        }
    }

  return (
    <>
        <Grid container spacing={2}>
            <Grid item sx={{ padding:1,  /*bgcolor:"#fdcb6e"*/ }} md={9}>
                {/**<NoteForm editID={editID} changeFlag={changeFlag} />*/
                    render
                }
            </Grid>
            <Grid item sx={{ alignItems:"center", maxHeight:(theme) => `calc(100vh - 12vh - ${theme.mixins.toolbar.minHeight}px)`, overflow:'auto' /*bgcolor:"#74b9ff"*/ }} xs={12} md={3} >
                <Box component="div">
                    {
                        notes.map((note)=>(
                            <NoteCard handleDelete={handleDelete} handlePassData={handleShowData} key={note.id} note={note} />
                            )
                        )
                    }
                </Box>
            </Grid>
            
        </Grid>
    </>
    
  )
}
