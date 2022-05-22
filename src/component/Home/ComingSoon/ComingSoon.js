import React from 'react';
import bestProduct from "../../../bestProduct.jpg";

const ComingSoon = () => {
    return (
        <div className='container'>
            <h3 className='text-center text-primary fw-light my-2'>Best Selling Product of The Month</h3>
            <section className='row'>
                <div className='col-md-6 col-lg-6 col-sm-12'>
                    <img src={bestProduct} alt="" className='w-100' />
                </div>
                <div className='col-md-6 col-lg-6 col-sm-12 d-grid align-items-center justify-content-center'>
                    <h3 className='text-center'>Best Product from <span >Amazon</span></h3>
                </div>
            </section>
        </div>
    );
};

export default ComingSoon;