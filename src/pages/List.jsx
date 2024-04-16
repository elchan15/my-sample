import React, { useState, useEffect } from 'react';
import ListAccordion from '../component/List.Accordion';
import {Grid} from '@mui/material'


export default function ListPage() {
    
    const url = 'http://localhost:4000/notes';

    const [showData, setShowData] = useState([]);

    const loadData = () => {
    fetch(url, { method: "GET" })
        .then((res) => res.json())
        .then(
        (result) => {
            if (result) {
            setShowData(result);
            }
        }
        ).catch((err) => {
        console.log(err);
        });
    };

    useEffect(
    () => {
        loadData();
    }, []
    );
  return (
    <div className="container">

      <h5 style={{ textAlign: 'center', color: 'white', height: "100px", justifyContent: "center", display:"flex", lineHeight:"100px",backgroundColor:'yellowgreen' }}>React Accordion</h5>
      <Grid container>

        {showData.map((item, index) => (
          <Grid item xs={6} md={6} key={index}>
            <ListAccordion key={index} {...item} />
          </Grid>
        ))}
      </Grid >

    </div>
  )
}
