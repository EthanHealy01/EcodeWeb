import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductPage = () => {

    const { refId } = useParams();
    const [product, setProduct] = useState({})
    const [tab, setTab] = useState(1)

    console.log(refId)

    useEffect(()=>{
        fetchData({
            product_name:'Small Squares Ops Knitted Sweatwear',
            red_id:'WKN00114',
            seller:'Thinking Mu',
            co2_emiited:26.17,
            mj_consumed:78.69,
            water_consumed:5.41,
            phosphates_emmitted: 26.17,
            bottles:84,
            days_bulb_on:1309,
            washing_cycles:25,
            km_driven:18
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
                {tab === 1 ? (
                    <FirstTab product={product} />
                ) : (
                tab===2 ? (
                <SecondTab product={product} />
                ):(
                <ThirdTab product={product} />
                )
                )}
                <div style={{flexDirection:'row'}}>
                    <button onClick={() => setTab(1)}>1</button>
                    <button onClick={() => setTab(2)}>2</button>
                    <button onClick={() => setTab(3)}>3</button>
                </div>
                </div> 
        </div>
        </div>
        

    )
}  

const FirstTab = ({ product }) =>{
    return (
        <>
        <div>{product.water_consumed} water consumed</div>
        <div>{product.co2_emiited} co2 emitted</div>
        <div>{product.phosphates_emmitted} g phosphate eq emitted</div>
        <div>{product.mj_consumed} mj consumed</div>
        </>
    )
}
const SecondTab = ({ product }) =>{
    return (
        <>
        <div>{product.bottles} bottles</div>
        <div>{product.days_bulb_on} day(s) a bulb is on</div>
        <div>{product.washing_cycles} washing cycls</div>
        <div>{product.km_driven} driven km</div>
        </>
    )
}
const ThirdTab = ({ product }) =>{
    return (
        // Come back to for maths equations
        <>
        <div>Maths</div>
        </>
    )
}
export default ProductPage;