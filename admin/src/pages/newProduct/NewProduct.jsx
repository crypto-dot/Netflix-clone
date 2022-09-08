import React from 'react';
import './NewProduct.scss';
const NewProduct = () => {
    return (
        <div className='newProduct'>
            <h1 className="newProductTitle">New Product</h1>
            <form action="" className="newProductForm">
                <div className="newProductItem">
                    <label htmlFor="">Image</label>
                    <input type="file" id="file" name="file" />
                </div>
                <div className="newProductItem">
                    <label htmlFor="">Name</label>
                    <input type="text" placeholder='Android' />
                </div>
                <div className="newProductItem">
                    <label htmlFor="">Stock</label>
                    <input type="number" placeholder='130' />
                </div>
                <div className="newProductItem">
                    <label htmlFor="active">Active</label>
                    <select id="active" name="active">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
                <button className='newProductButton'>Create</button>

            </form></div>
    )
}

export default NewProduct