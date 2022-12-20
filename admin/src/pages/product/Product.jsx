import React, { useState, useContext } from 'react';
import Chart from '../../components/chart/Chart';
import './Product.scss';
import { Publish } from '@material-ui/icons';
import { Link, useLocation } from 'react-router-dom';
import { storage } from '../../firebase';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { updateMovie } from '../../context/movieContext/apiCalls';
import { MovieContext } from '../../context/movieContext/movieContext';

const Product = () => {
    const location = useLocation();
    const [movie, setMovie] = useState(location.state.movie);
    const [newMovie, setNewMovie] = useState(movie);

    const { dispatch, isFetching, error } = useContext(MovieContext);

    const [image, setImage] = useState(null);
    const [titleImg, setTitleImg] = useState(null);
    const [thumbnailImg, setThumbnailImg] = useState(null);
    const [video, setVideo] = useState(null);
    const [trailer, setTrailer] = useState(null);
    const [uploaded, setUploaded] = useState(0);


    const handleChange = (e) => {
        setNewMovie(prev => { return { ...prev, [e.target.name]: e.target.value } })
    }

    const handleUpload = (e) => {
        e.preventDefault();
        if (!image || !titleImg || !video || !trailer || !thumbnailImg) {
            return;
        }
        upload(
            [
                { file: image, label: 'image' },
                { file: titleImg, label: 'imageTitle' },
                { file: video, label: 'video' },
                { file: trailer, label: 'trailer' },
                { file: thumbnailImg, label: 'imageSm' }
            ]
        );
    }
    const upload = (items) => {
        items.forEach(item => {
            const fileName = new Date().getTime() + item.label + item.file.name;
            const storageRef = ref(storage, `items/${fileName}`);
            const uploadTask = uploadBytesResumable(storageRef, item.file);
            uploadTask.on('state_changed',
                (snapshot) => {
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log(`${fileName}: is ${progress}% done.`);
                }, (err) => {
                    console.log(err);
                }, () => {
                    getDownloadURL(uploadTask.snapshot.ref).then(
                        (downloadURL) => {
                            setNewMovie(prev => { return { ...prev, [item.label]: downloadURL } });
                            setUploaded(prev => prev + 1);
                        }
                    );
                });
        });
    }
    const handleUpdate = (e) => {
        e.preventDefault();
        updateMovie(newMovie, dispatch);
        if (!error) {
            setMovie(prev => { return { ...prev, ...newMovie } });

        }
    }
    return (
        <div className='product'>
            <div className="productTitleContainer">
                <h1 className="productTitle">{movie.title}</h1>
                <Link to="/newMovie">
                    <button className='productCreateButton'>Create</button>
                </Link>
            </div>
            <div className="productTop">
                <div className="productTopRight">
                    <div className="productInfoContainer">
                        <div className="productInfoTop"><img src={movie.imageSm} alt="" className="ProductInfoImg" /><span className="productInfoTitle">{movie.title}</span></div>
                        <div className="productInfoBottom">
                            <div className="productInfoItem">
                                <span className="productInfoKey productId">Id:</span>
                                <span className="productInfoValue">{movie._id}</span>
                            </div>
                            <div className="productInfoItem">
                                <span className="productInfoKey">Age limit:</span>
                                <span className="productInfoValue">{movie.limit}</span>
                            </div>
                            <div className="productInfoItem">
                                <span className="productInfoKey">Is Series</span>
                                <span className="productInfoValue">{movie.isSeries ? 'yes' : 'no'}</span>
                            </div>
                            <div className="productInfoItem">
                                <span className="productInfoKey"> Genre</span>
                                <span className="productInfoValue">{movie.genre}</span>
                            </div>
                            <div className="productInfoItem">
                                <span className="productInfoKey"> Year</span>
                                <span className="productInfoValue">{movie.year}</span>
                            </div>
                            <div className="productSynposis">
                                <span className="productSynopsisTitle">Synopsis </span>
                                <p className="productSynposisParagraph">{movie.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="productBottom">

                <form action="" className="productForm">
                    <div className="productFormLeft">
                        <div className="productFormInputItem">
                            <label>Title</label>
                            <input type="text" name='title' placeholder={movie.title} onChange={handleChange} />
                        </div>
                        <div className="productFormInputItem">
                            <label>Genre</label>
                            <input type="text" name='genre' placeholder={movie.genre} onChange={handleChange} />
                        </div>
                        <div className="productFormInputItem">
                            <label>Year</label>
                            <input type="number" name='year' placeholder={movie.year} onChange={handleChange} />
                        </div>
                        <div className="productFormInputItem">
                            <label>Age limit</label>
                            <input type="number" name='limit' placeholder={movie.limit} onChange={handleChange} />
                        </div>
                        <div className="productFormInputItem">
                            <label>Trailer</label>
                            <input type="file" name='trailer' onChange={(e) => setTrailer(e.target.files[0])} />
                        </div>
                        <div className="productFormInputItem">
                            <label>Video</label>
                            <input type="file" name='video' onChange={(e) => setVideo(e.target.files[0])} />
                        </div>
                        <div className="productFormInputItem">
                            <label>Image</label>
                            <input type="file" name='image' onChange={(e) => setImage(e.target.files[0])} />
                        </div>
                        <div className="productFormInputItem">
                            <label>Title Image</label>
                            <input type="file" name='imageTitle' onChange={(e) => setTitleImg(e.target.files[0])} />
                        </div>
                        <div className="productFormInputItem">
                            <label>Thumbnail Image</label>
                            <input type="file" name='imageSm' onChange={(e) => setThumbnailImg(e.target.files[0])} />
                        </div>
                        <div className="productFormInputItem">
                            <label>Synopsis</label>
                            <textarea placeholder={movie.description}></textarea>
                        </div>

                    </div>
                    <div className="productFormRight">
                        <div className="productUpload">
                            <img src={movie.imageSm} className='productFormImg' />
                            <label htmlFor='file'><Publish /></label>
                            <input type="file" id="file" style={{ display: "none" }} />
                        </div>

                        {uploaded === 5 ? <button disabled={isFetching} onClick={handleUpdate} className='productButton'>Update</button> : <button onClick={handleUpload} className='productButton'>Upload Files</button>}
                    </div>
                </form>

            </div>
        </div >
    )
}

export default Product