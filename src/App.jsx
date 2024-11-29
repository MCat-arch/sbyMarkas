// import React from 'react';
// import {useState} from 'react';
// import ItemCard from './components/ItemCard';

// export function App(props) {
//   const [jumlah, setJumlah] = useState();
//   const [angka1, setAngka1] = useState();
//   const [angka2, setAngka2] = useState();
//   const calculate = () =>{
//     const r = parseInt(angka1) + parseInt(angka2);
//     setJumlah(r);
//   }
//   let judul = "Lagi trending, nih";
//   let produk = [
//     "PS4",
//     "RTZ 0121039",
//     "Mac OS",
//     "Iphone 16"
//   ];

//   //array of object
//   let produk2 = [
//     {
//       judul:"Lecy",
//       jumlah: 10,
//       harga: 20000
//     },
//     {
//       judul:"Lolipop",
//       jumlah: 101,
//       harga: 20000,
//     },
//      {
//       judul:"Lapupu",
//       jumlah: 1,
//       harga: 28000,
//       gambar: "https://www.google.com/imgres?q=produk%20image&imgurl=https%3A%2F%2Fwww.bearbrand.co.id%2Fthemes%2Fcustom%2Fpurity%2Fimages%2Fprodukutama.webp&imgrefurl=https%3A%2F%2Fwww.bearbrand.co.id%2Fproduct&docid=Bzs9_E5hRysyjM&tbnid=2cgy_BJA8-QLkM&vet=12ahUKEwj-x5Lpsd6JAxUMxzgGHfX7D2EQM3oECFoQAA..i&w=806&h=1000&hcb=2&ved=2ahUKEwj-x5Lpsd6JAxUMxzgGHfX7D2EQM3oECFoQAA"
//     },
//     {
//       judul:"Laba-laba",
//       jumlah: 3,
//       harga: 29000,
//     },
//   ]

//   return (
//     <>
//     <input type="int" placeholder='masukkan angka1' value={angka1} onChange={e => setAngka1(e.currentTarget.value)} />
//     <input type="int" placeholder='masukkan angka1' value={angka2} onChange={e => setAngka2(e.currentTarget.value)} />
//     <button onClick={calculate}>Calc</button>
//     <p>{jumlah}</p>
//     <input type="search" placeholder='masukkan nama produk' />
//     <button type='button'>Search</button>
//     <div className='App'>
//       <div>
//         <div>
//           <h2>{judul}</h2>
//         </div>
//         <div>
//           <div style={{display: 'flex'}}>
//             <div>
//               {produk2.map((p) =>{
//               return <ItemCard judul={p.judul} jumlah={p.jumlah} harga={p.harga} image={p.gambar}/>
//               })}
      
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//     </>
//   );
// }


// // Log to console
// console.log('Hello console')
// export default App

// //use ref = untuk yang dirender tidak harus instan
// //use state = untuk hasil yang dirender instan

import React from 'react';
import GetApiData from './components/GetApiData'; 
import LinkTree from './components/linkTree';
import "./index.css";

function App() {
  return (
    
      <LinkTree />
  )
}

export default App