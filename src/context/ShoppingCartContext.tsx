import {useContext,createContext,ReactNode,useState} from "react";

type ShoppingCartContextProviderProps={
    children:ReactNode
}
type CartItem={
    id:number,
    quantity:number
}
type ShoppingCartContext={
    getItemQuantity:(id:number)=>number,
    increaseCartQuantity:(id:number)=>void,
    decreaseCartQuantity:(id:number)=>void,
    removeCart:(id:number)=>void,
}
const ShoppingCartContext=createContext<ShoppingCartContext>({} as ShoppingCartContext)


export function useShoppingCart(){
    return useContext(ShoppingCartContext);
}
export function ShoppingCartContextProvider({children}:ShoppingCartContextProviderProps){
    const [cartItems,setCartItems]=useState<CartItem[]>([]);
    function getItemQuantity (id:number){
        return cartItems.find(item=>item.id===id)?.quantity||0
    }
    function decreaseCartQuantity(id:number){
        setCartItems(currItems=>{
            if(currItems.find(item=>item.id===id)?.quantity===1){
                return currItems.filter(item=>item.id!==id) 
            }else{
                return currItems.map(item=>{
                    return{...item,quantity:item.quantity-1}
                })
            }
        })

    }   

    function removeCart(id:number){
        setCartItems(currItems=>{
            return currItems.filter(item=>item.id!==id)
        })
    }
    function increaseCartQuantity(id:number){
        setCartItems(currItems=>{
            if(currItems.find(item=>item.id===id)==null){
                return [...currItems,{id,quantity:1}]
            }else{
                return currItems.map(item=>{
                    if(item.id===id){
                      return{...item,quantity:item.quantity+1}
                    }
                    else{
                        return item
                    }

                })
            }
        })

    }

    return (<ShoppingCartContext.Provider value={{getItemQuantity,increaseCartQuantity,decreaseCartQuantity,removeCart}}>{children}</ShoppingCartContext.Provider>

    )
    
}