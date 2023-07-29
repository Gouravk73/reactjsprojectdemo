import React, { useContext, useState } from 'react'
import CartContext from '../store/CartContext';
import{FaLeaf, FaShoppingCart} from 'react-icons/fa'
const AddMedicine = () => {
    const[name,setName]=useState('');
    const[description,setDescription]=useState('');
    const[quantity,setQuantity]=useState(0);
    const[price,setPrice]=useState(0);
    const[item,setItem]=useState([]);

    const [isOpen, setIsOpen] = useState(false);
    const [transitionExit, setTransitionExit] = useState(false);
    let totalItem=0;
    

    const Drawer = ({ transitionExit, handleExit }) => (
        <div 
          className={`drawer ${transitionExit ? "exit" : ""}`}
        >
            {
            cartcontext.items.map((item)=>{
                return <div  style={{display:'flex',justifyContent:'space-between' ,padding:"2rem"}} key={item.id}>
                    <p>{item.name}</p>
                    <p>{item.description}</p>
                    <p>{item.price}</p>
                    <p>{item.quantity}</p>
                    <button onClick={()=>{cartcontext.removeItem(item)}}disabled={item.quantity === 0}> {item.quantity===0?'Out Of STock':'Add to bill'} </button>
                </div>
            })
        }
        </div>
      );


    const cartcontext = useContext(CartContext);
    const addItem = (e) =>{
        e.preventDefault();
        const tempData={
            id:name,
            name,
            description,
            quantity:quantity,
            price:price,
        }
        setItem([...item,tempData])
        cartcontext.addItem(tempData);

    }




    cartcontext.items.forEach((item)=>{
        totalItem= totalItem+Number(item.quantity);
    })
    console.log(totalItem);




  return (<>
    <div style={{display:'flex',justifyContent:'space-between',padding:'1rem'}}>
        <form action="" onSubmit={addItem}>
        <div>
            MedicineName
            <input type="text" onChange={(e)=>setName(e.target.value)} />
        </div>
        {/* {console.log(name)} */}
        <div>
            Description
            <input type="text" onChange={(e)=>setDescription(e.target.value)}/>
        </div>
        
        <div>
            price
            <input type="number" onChange={(e)=>setPrice(e.target.value)} />
        </div>
        
        <div>
            Quantity
            <input type="number"  onChange={(e)=>setQuantity(e.target.value)}/>
        </div>
        <button>Add product</button>
        </form> 
    
    </div>
    <div>
    <div className="wrapper">
        <div className="sidebar_container">
            <FaShoppingCart size={'2rem'} onClick={() => setIsOpen(!isOpen)}/>
         </div>
        {isOpen && (
          <div className={`drawer_container ${transitionExit ? "exit" : ""}`}>
            <Drawer    />
          </div>
        )}
      </div>
    <span style={{ margin: '-0.2rem 0' }}>{totalItem}</span>
    </div></>
  )
}

export default AddMedicine