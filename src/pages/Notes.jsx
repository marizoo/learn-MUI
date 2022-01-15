import React, { useEffect, useState } from 'react'
import Container from '@mui/material/Container';
import NoteCard from '../components/NoteCard';
import Masonry from 'react-masonry-css'



const Notes = () => {
    const [items, setItems] = useState([])

    useEffect(() => {
        fetch('http://localhost:8000/notes')
            .then(response => response.json())
            .then(data => setItems(data))
            .catch(err => console.log(err.message))
    },[]);

    const handleDelete = async (id) => {
        await fetch('http://localhost:8000/notes' + id, {
            method: 'DELETE'
        });

        const newNotes = items.filter(item => item.id != id)

        setItems(newNotes);
    }

    const breakpoints = {
        default: 3,
        1100: 2,
        700: 1
    }

    return (
        <Container>
            <Masonry
                 breakpointCols={breakpoints}
                 className="my-masonry-grid"
                 columnClassName="my-masonry-grid_column"
            >
           {items.map(item => (
               <div item key={item.id}>
                   <NoteCard item={item} onHandleDelete={handleDelete}/>
               </div>
           ))}
          </Masonry>
        </Container>
    )
}

export default Notes

// buttons
//  https://www.youtube.com/watch?v=1at8XzyeEVA&list=PL4cUxeGkcC9gjxLvV4VEkZ6H6H4yWuS58&index=3
