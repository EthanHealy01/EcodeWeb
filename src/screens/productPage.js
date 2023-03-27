import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductPage = () => {

    const { refId } = useParams();
    const [product, setProduct] = useState({})

    console.log(refId)

    useEffect(()=>{
        fetchData({
            product_name:'Small Squares Ops Knitted Sweatwear',
            red_id:'WKN00114',
            seller:'Thinking Mu',
            co2_emiited:26.17,
            mj_consumed:78.69,
            water_consumed:5.41,
            phosphates_emmitted: 26.17
        })
    }, [])

    const fetchData = (data) => {
        setProduct(data)
    }
    return(
        <div style={{display: 'flex', justifyContent:'space-around'}}>
        <div style={{width: '100%', height: '600px', borderRadius: '10px', backgroundColor: 'white', margin: '20px'}}>
            <div style={{
                width: '100%',
                height: '60px', 
                backgroundColor: 'lightGrey',
                color: 'black',
                alignContent: 'center', 
                borderTopLeftRadius:'10px', 
                borderTopRightRadius:'10px',
                flexDirection:'row',
                alignItems: 'center',
                display: 'flex', 
            }}>
                <div style={{marginLeft:'20px'}}>
                Product Page  
            </div>
            </div>     
                <div style={{flexDirection:'column'}}>       
                <div>{product.red_id}</div>
                <div>{product.product_name}</div>
                <div>{product.seller}</div>
                <div>{product.co2_emiited}</div>
                <div>{product.mj_consumed}</div>
                <div>{product.water_consumed}</div>
                <div>{product.phosphates_emmitted}</div>
                </div> 
        </div>
        </div>
        

    )
}  
export default ProductPage;