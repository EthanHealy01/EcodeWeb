import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import '../productPage.css';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

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
                    <div style={{marginBottom:50}}></div>
                    {tab === 1 ? (
                    <FirstTab product={product} />
                    ) : (
                    tab===2 ? (
                    <SecondTab product={product} />
                    ):(
                    <ThirdTab product={product} />
                    )
                    )}
                </div> 
                <div style={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
                    <button style={{backgroundColor:'white', border:0, color: tab==1 ? 'grey' : '', marginRight:30}} onClick={() => setTab((prevTab) => (prevTab)>1 ? prevTab-1 : prevTab)}><KeyboardArrowLeftIcon /></button>
                    {tab===1 ? <CurrentTabCircle /> : <NotCurrentTabCircle />}
                    {tab===2 ? <CurrentTabCircle /> : <NotCurrentTabCircle />}
                    {tab===3 ? <CurrentTabCircle /> : <NotCurrentTabCircle />}
                    <button style={{backgroundColor:'white', border:0, color: tab==3 ? 'grey' : '', marginLeft:30}} onClick={() => setTab((prevTab) => (prevTab)<3 ? prevTab+1 : prevTab)}><KeyboardArrowRightIcon /></button>
                </div>
                <div style={{display:'flex', justifyContent:'center', color:'grey', fontSize:'small'}}>
                    {tab===1 ? 'Unitary impact' : 
                    (tab===2) ? 'Impact equivalences' :
                    'Unitary benchmark'}
                </div>
            </div>
        </div>
    )
}  

const FirstTab = ({ product }) =>{
    return (
        <div>
            <div className='row_item'>
                <div style={{padding:2}}><div style={{color:'black', display:'inline-block'}}>{product.water_consumed}</div> m<sup>3</sup> water eq consumed</div>
                <div style={{color:'#494853', padding:2}}>Water scarcity impact</div>
            </div>
            <div className='row_item'>
                <div style={{padding:2}}><div style={{color:'black', display:'inline-block'}}>{product.co2_emiited}</div> kg CO<sub>2</sub> eq emitted</div>
                <div style={{color:'#494853', padding:2}}>Global warming impact</div>
            </div>
            <div className='row_item'>
                <div style={{padding:2}}><div style={{color:'black', display:'inline-block'}}>{product.phosphates_emmitted}</div> g phosphate eq emitted</div>
                <div style={{color:'#494853', padding:2}}>Eutrophication impact</div>
            </div>
            <div className='row_item'>
                <div style={{padding:2}}><div style={{color:'black', display:'inline-block'}}>{product.mj_consumed}</div> MJ consumed</div>
                <div style={{color:'#494853', padding:2}}>Abiotic depletion impact</div>
            </div>
        </div>
    )
}
const SecondTab = ({ product }) =>{
    return (
        <div>
            <div className='row_item'>
                <div style={{padding:2}}><div style={{color:'black', display:'inline-block'}}>{product.bottles}</div> bottle(s)</div>
                <div style={{color:'#494853', padding:2}}>Water scarcity impact</div>
            </div>
            <div className='row_item'>
                <div style={{padding:2}}><div style={{color:'black', display:'inline-block'}}>{product.days_bulb_on}</div> day(s) a bulb is on</div>
                <div style={{color:'#494853', padding:2}}>Global warming impact</div>
            </div>
            <div className='row_item'>
                <div style={{padding:2}}><div style={{color:'black', display:'inline-block'}}>{product.washing_cycles}</div> washing cycle(s)</div>
                <div style={{color:'#494853', padding:2}}>Eutrophication impact</div>
            </div>
            <div className='row_item'>
                <div style={{padding:2}}><div style={{color:'black', display:'inline-block'}}>{product.km_driven}</div> driven km</div>
                <div style={{color:'#494853', padding:2}}>Abiotic depletion impact</div>
            </div>
        </div>
    )
}
const ThirdTab = ({ product }) =>{
    return (
        // Come back to for maths equations
        <>
        <div>Eq.</div>
        <div>Eq.</div>
        <div>Eq.</div>
        <div>Eq.</div>
        </>
    )
}


const CurrentTabCircle = () =>{
    return (
        <div style={{
            height:8,
            width:8,
            borderRadius:200,
            backgroundColor:'black',
            marginBottom:4,
            marginLeft:8,
            marginRight:8
        }}>
        </div>
    )
}

const NotCurrentTabCircle = () =>{
    return (
        <div style={{
            height:8,
            width:8,
            borderRadius:200,
            backgroundColor:'grey',
            marginBottom:4,
            marginLeft:8,
            marginRight:8
        }}>
        </div>
    )
}
export default ProductPage;