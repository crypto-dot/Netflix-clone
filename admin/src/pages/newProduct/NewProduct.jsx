import React, { useState, useContext } from 'react';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { storage } from '../../firebase';
import './NewProduct.scss';
import { MovieContext } from '../../context/movieContext/movieContext';
import { createMovie } from '../../context/movieContext/apiCalls';
const NewProduct = () => {
    const [movie, setMovie] = useState({ isSeries: true });

    const [image, setImage] = useState(null);
    const [titleImg, setTitleImg] = useState(null);
    const [thumbnailImg, setThumbnailImg] = useState(null);
    const [video, setVideo] = useState(null);
    const [trailer, setTrailer] = useState(null);
    const [uploaded, setUploaded] = useState(0);

    const { dispatch, isFetching } = useContext(MovieContext);

    const handleChange = (e) => {
        setMovie({ ...movie, [e.target.name]: e.target.value });
    }

    const handleChangeBoolean = (e) => {
        setMovie({ ...movie, [e.target.name]: Boolean(e.target.value) });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (movie.title === '') {
            alert('Movies must at least have a title');
            return;
        }
        createMovie(movie, dispatch);
    }
    const upload = (items) => {
        items.forEach(item => {
            const fileName = new Date().getTime() + item.label + item.file.name;
            const storageRef = ref(storage, `/items/${fileName}`);
            const uploadTask = uploadBytesResumable(storageRef, item.file);
            uploadTask.on('state_changed',
                (snapshot) => {
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log(`Progress is ${progress}% done`);
                }, (err) => {
                    console.log(err);
                },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                        setMovie(prev => { return { ...prev, [item.label]: downloadURL } });
                    });
                    setUploaded(prev => prev + 1);
                }
            )
        });
    }
    const handleUpload = (e) => {
        e.preventDefault();
        if (!image || !titleImg || !trailer || !thumbnailImg || !video) {
            return;
        }
        upload([
            { file: image, label: "image" },
            { file: titleImg, label: "imageTitle" },
            { file: thumbnailImg, label: "imageSm" },
            { file: trailer, label: "trailer" },
            { file: video, label: "video" }
        ]);
    }
    return (
        <div className='newProduct'>
            <h1 className="newProductTitle">New Movie</h1>
            <form action="" className="newProductForm">
                <div className="newProductItem">
                    <label >Video</label>
                    <input type="file" id="video" required name="video" onChange={(e) => setVideo(e.target.files[0])} />
                </div>
                <div className="newProductItem">
                    <label >Trailer</label>
                    <input required type="file" id="trailer" name="trailer" onChange={(e) => setTrailer(e.target.files[0])} />
                </div>
                <div className="newProductItem">
                    <label>Title</label>
                    <input type="text" placeholder='Title' name='title' minLength={1} onChange={handleChange} required />
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
                    <input type="file" name='imageTitle' required onChange={(e) => setTitleImg(e.target.files[0])} />
                </div>
                <div className="newProductItem">
                    <label>Thumbnail Image</label>
                    <input type="file" name='imageSm' required onChange={(e) => setThumbnailImg(e.target.files[0])} />
                </div>
                <div className="newProductItem">
                    <label>Image</label>
                    <input type="file" name='image' required onChange={(e) => setImage(e.target.files[0])} />
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
                <div className="newProductButtonContainer">{
                    uploaded === 5 ?
                        <button className='newProductButton' onClick={handleSubmit} >Create</button> : <button className='newProductButton' onClick={handleUpload} disabled={isFetching}>Upload</button>}
                </div>


            </form></div>
    )
}

export default NewProduct