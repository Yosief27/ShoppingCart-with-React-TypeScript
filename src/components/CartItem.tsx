import {Button, Stack} from 'react-bootstrap'
import storeItems from "../data/items.json"
import { formatCurrency } from '../utilities/formatCurrency'
import {useShoppingCart} from "../context/ShoppingCartContext";
type cartItemProps={
    id:number,
    quantity:number
}
export const CartItem = ({id,quantity}:cartItemProps) => {
    const item=storeItems.find(item=>item.id==id) 
    
    const {removeCart}=useShoppingCart();
    if(item==null) {return null}
    return (
    <Stack direction="horizontal" gap={2}  >
        <img 
            src={item.imgUrl}
            style={{width:"123px",height:"75px" ,objectFit:"cover"}}
        />
        <div className='me-auto'>
            <div>{item.name} {" "}
            {quantity>1 && 
                <span>{"x"}{quantity}
                </span>}

            </div>
                <div className='text-muted' style={{fontSize:".6rem"}}>
                    {formatCurrency(item.price)}
                </div>
        </div>
        <div className='ml-1 text-muted d-flex align-items-center '   style={{fontSize:".7rem"}}>
            {formatCurrency(item.price*quantity)}

         <Button variant='danger' size='sm' style={{marginLeft:"5px"}} onClick={()=>removeCart(item.id)}>&times;</Button>
        </div>
</Stack>
  )
}
