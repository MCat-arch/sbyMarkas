import React, { useState } from 'react'

function AddBuku() {
    const [listBuku, setListBuku] = useState();

    const addBuku = (e) =>{
        e.preventDefault();
        const newBuku = e.target.buku.value;
        setListBuku([...listBuku, newBuku]);
    }
  return (
    <div>
        <form action="addBuku">
            <input type="text" placeholder='buku' id='buku' />
        </form>
    </div>
  )
}

export default AddBuku