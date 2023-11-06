import {useContext,createContext,ReactNode,useState} from "react";
import {ShoppingCart} from "../components/ShoppingCart";
import { useLocalStorage } from "../hooks/useLocalStorage";
type ShoppingCartContextProviderProps={
    children:ReactNode
}
type CartItem={
    id:number,
    quantity:number
}
type ShoppingCartContext={
    openCart:()=>void,
    closeCart:()=>void,
    cartQuantity:number,
    cartItems:CartItem[],

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
    const [cartItems,setCartItems]=useLocalStorage<CartItem[]>("shopping-Cart",[]);
    const[isOpen,setIsOpen]=useState(false);
  
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

    function openCart(){setIsOpen(true)}
    function closeCart(){setIsOpen(false)}
    const cartQuantity=cartItems.reduce((quatity,item)=>quatity+item.quantity,0)
    return (<ShoppingCartContext.Provider value={{cartItems,openCart,closeCart,cartQuantity,getItemQuantity,increaseCartQuantity,decreaseCartQuantity,removeCart}}>{children}<ShoppingCart isOpen={isOpen}/></ShoppingCartContext.Provider>

    )
    
}