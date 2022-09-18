import React from 'react';
import Chart from '../../components/chart/Chart';
import './Product.scss';
import { ProductData } from '../../dummyData';
import { Publish } from '@material-ui/icons';
import { Link, useLocation } from 'react-router-dom';
const Product = () => {
    const location = useLocation();
    const movie = location.state.movie;
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
                        <div className="productInfoTop"><img src={movie.image} alt="" className="ProductInfoImg" /><span className="productInfoTitle">{movie.title}</span></div>
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
                            <input type="text" defaultValue={movie.title} />
                        </div>
                        <div className="productFormInputItem">
                            <label>Genre</label>
                            <input type="text" defaultValue={movie.genre} />
                        </div>
                        <div className="productFormInputItem">
                            <label>Year</label>
                            <input type="number" defaultValue={movie.year} />
                        </div>
                        <div className="productFormInputItem">
                            <label>Age limit</label>
                            <input type="number" defaultValue={movie.limit} />
                        </div>
                        <div className="productFormInputItem">
                            <label>Trailer</label>
                            <input type="file" />
                        </div>
                        <div className="productFormInputItem">
                            <label>Video</label>
                            <input type="file" />
                        </div>
                        <div className="productFormInputItem">
                            <label>Synoposis</label>
                            <textarea defaultValue={movie.description}></textarea>
                        </div>

                    </div>
                    <div className="productFormRight">
                        <div className="productUpload">
                            <img src={movie.image} className='productFormImg' />
                            <label htmlFor='file'><Publish /></label>
                            <input type="file" id="file" style={{ display: "none" }} />
                        </div>
                        <button className='productButton'>Update</button>
                    </div>
                </form>

            </div>
        </div >
    )
}

export default Product