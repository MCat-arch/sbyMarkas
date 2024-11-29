import React, { useState } from 'react';

function Form() {
    const [nama, setNama] = useState('');
    const [alamat, setAlamat] = useState('');
    const [email, setEmail] = useState('');

    const handleNamaChange = (e) => {
        setNama(e.target.value);
    };

    const handleAlamatChange = (e) => {
        setAlamat(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const displayForm = (e) => {
        e.preventDefault();
        console.log('Nama:', nama);
        console.log('Alamat:', alamat);
        console.log('Email:', email);
    };

    return (
        <div>
            <form onSubmit={displayForm}>
                <label>Nama :</label>
                <input type="text" id='nama' placeholder='nama' value={nama} onChange={handleNamaChange} />
                <label>Alamat :</label>
                <input type="text" id='alamat' placeholder='alamat' value={alamat} onChange={handleAlamatChange} />
                <label>Email :</label>
                <input type="text" id='Email' placeholder='email' value={email} onChange={handleEmailChange} />
                <button type="submit">Display</button>
            </form>
            <div>
                <h1>Biodata</h1>
                <h3>Nama: {nama}</h3>
                <h4>Alamat: {alamat}</h4>
                <h5>Email: {email}</h5>
            </div>
        </div>
    );
}

export default Form;
