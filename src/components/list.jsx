import React, { useState } from 'react'

function list() {
    const [produk, setProduk] = useState();
    let judul = "judul";
    let produk2 =[

    ];

    const onSubmit =(e) =>{
        e.preventDefault();
        const newProduk = {
            nama : e.target.nama.value,
            jumlah: e.target.jumlah.value,
            harga: e.target.harga.value,

        }
        setProduk((prev)=>[...prev, newProduk])
    }
  return (
    <div>
        <form action="onSubmit()">
            <input type="text" id='nama' placeholder='nama produk' />
            <input type="text" id='jumlah' placeholder='jumlah' />
            <input type="text" id='harga' placeholder='harga' />
            <button type="submit">Submit</button>
        </form>


    </div>
  )
}

export default list

/*
map is looping array to give parameter value(prop) for component
listData.map((data, index) =>{
    {index + 1};
    <ListNama 
    nama={data.nama},
    hp={data.hp},
    umur={data.umur}


    })

    //use propType(mengetahui tipe data yang kita gunakan(to help the dev))
    ListNama.PropType = {
    nama: PropType.string.isRequired;
    }
*/