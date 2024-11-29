import React from "react";
import { prototypejs } from "globals";
import PropType from 'prop-type';

function ItemCard({judul, jumlah, harga, gambar}){
    return(
      <>
      <div style={{paddingLeft: '10px'}}>  
         <img src="https://images.tokopedia.net/img/cache/100-square/VqbcmM/2022/5/29/cfee9027-f23b-4ab1-a896-e32fe195365c.jpg.webp?ect=4g" alt="" />
              </div>
              <div style={{paddingLeft: '10px'}}>
                <h4>Produk: {judul}</h4>
                <p>Jumlah: {jumlah}</p>
                <p>Harga: {harga}</p>
    
      </div>
        
      </>
    )
  }
   ItemCard.PropType = {
     judul : PropType.string.isRequaired,
     jumlah: PropType.number.isRequaired,
     harga: PropType.number.isRequaired,

   }
  export default ItemCard;