import React from 'react';
import Chart from '../../components/chart/Chart';
import './Product.scss';
import { ProductData } from '../../dummyData';
import { Publish } from '@material-ui/icons';
import { Link } from 'react-router-dom';
const Product = () => {
    return (
        <div className='product'>

            <div className="productTitleContainer">
                <h1 className="productTitle">Movie</h1>
                <Link to="/newProduct">
                    <button className='productCreateButton'>Create</button>
                </Link>
            </div>
            <div className="productTop">
                <div className="productTopLeft">
                    <Chart data={ProductData} dataKey="sales" title="Sales Performance" />
                </div>
                <div className="productTopRight">
                    <div className="productInfoContainer">
                        <div className="productInfoTop"><img src="https://www.android.com/static/2016/img/devices/phones/samsung-galaxy-s8/front-black_2x.png" alt="" className="ProductInfoImg" /><span className="productInfoTitle">Android</span></div>
                        <div className="productInfoBottom">
                            <div className="productInfoItem">
                                <span className="productInfoKey">Id:</span>
                                <span className="productInfoValue">1</span>
                            </div>
                            <div className="productInfoItem">
                                <span className="productInfoKey">Sales:</span>
                                <span className="productInfoValue">123</span>
                            </div>
                            <div className="productInfoItem">
                                <span className="productInfoKey">Active:</span>
                                <span className="productInfoValue">yes</span>
                            </div>
                            <div className="productInfoItem">
                                <span className="productInfoKey">In Stock:</span>
                                <span className="productInfoValue">no</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="productBottom">

                <form action="" className="productForm">
                    <div className="productFormLeft">
                        <div className="productFormInputItem">
                            <label>Product Name</label>
                            <input type="text" placeholder='Android' />
                        </div>
                        <div className="productFormInputItem">
                            <label htmlFor='instock'>In Stock</label>
                            <select name="instock" id="instock">
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                            </select>
                        </div>
                        <div className="productFormInputItem">
                            <label htmlFor='active'>Active</label>
                            <select name="active" id="active">
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                            </select>
                        </div>
                    </div>
                    <div className="productFormRight">
                        <div className="productUpload">
                            <img src="https://www.android.com/static/2016/img/devices/phones/samsung-galaxy-s8/front-black_2x.png" className='productFormImg' />
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