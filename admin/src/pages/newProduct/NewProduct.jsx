import React, { useState } from 'react';
import './NewProduct.scss';
const NewProduct = () => {
    const [movie, setMovie] = useState({ isSeries: true });

    const [titleImg, setTitleImg] = useState(null);
    const [thumbnailImg, setThumbnailImg] = useState(null);
    const [video, setVideo] = useState(null);
    const [trailer, setTrailer] = useState(null);

    const handleChange = (e) => {
        console.log(movie);
        setMovie({ ...movie, [e.target.name]: e.target.value })
    }

    const handleChangeBoolean = (e) => {
        setMovie({ ...movie, [e.target.name]: Boolean(e.target.value) })
    }

    return (
        <div className='newProduct'>
            <h1 className="newProductTitle">New Product</h1>
            <form action="" className="newProductForm">
                <div className="newProductItem">
                    <label >Video</label>
                    <input type="file" id="video" name="video" />
                </div>
                <div className="newProductItem">
                    <label >Trailer</label>
                    <input type="file" id="trailer" name="trailer" />
                </div>
                <div className="newProductItem">
                    <label>Title</label>
                    <input type="text" placeholder='Title' name='title' onChange={handleChange} required />
                </div>
                <div className="newProductItem">
                    <label>Genre</label>
                    <input type="text" placeholder='Genre (Comedy, Action, etc.)' name='genre' onChange={handleChange} />
                </div>
                <div className="newProductItem">
                    <label>Year</label>
                    <input type="number" placeholder='1999' name='year' onChange={handleChange} />
                </div>
                <div className="newProductItem">
                    <label>Age limit</label>
                    <input type="number" placeholder='18' name=
                        'limit' onChange={handleChange} />
                </div>
                <div className="newProductItem">
                    <label>Title Image</label>
                    <input type="file" name='titleImg' />
                </div>
                <div className="newProductItem">
                    <label>Thumbnail Image</label>
                    <input type="file" name='thumbImg' />
                </div>
                <div className="newProductItem">
                    <label>Synoposis</label>
                    <textarea name='description' onChange={handleChange}></textarea>
                </div>
                <div className="newProductItem">
                    <label htmlFor="active">Series?</label>
                    <select id="active" name="isSeries" onChange={handleChangeBoolean}>
                        <option value="true">Yes</option>
                        <option value="">No</option>
                    </select>
                </div>
                <button className='newProductButton'>Create</button>

            </form></div>
    )
}

export default NewProduct