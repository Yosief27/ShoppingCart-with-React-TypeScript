import React from 'react'
import {Card} from  "react-bootstrap";
import { formatCurrency} from "../utilities/formatCurrency"
import{Button} from "react-bootstrap";

type StoreItemProp={
    id:number,
    name:string,
    price:number,
    imgUrl:string
}
const quantity:number=2;

export const StoreItem = ({id,name,price,imgUrl}:StoreItemProp) => {
    return (<Card className='h-100'>
        <Card.Img 
            src={imgUrl}
            variant='top'
            height="200px"
            style={{objectFit:"fill"}}
            />
        <Card.Body
            className='d-flex flex-column'
            >
            <Card.Title 
                className='d-flex justify-content-between     mb-4'
                >
               <span className='fs-0.8'>{name}</span> 
               
               <span className='ms-2 text-muted'>{formatCurrency(price)}</span> 

            </Card.Title>
            <div className='mb-2 '>
                {quantity==0?<Button className='w-100'>
                    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M13.5 18c-.828 0-1.5.672-1.5 1.5 0 .829.672 1.5 1.5 1.5s1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm-3.5 1.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5zm14-16.5l-.743 2h-1.929l-3.473 12h-13.239l-4.616-11h2.169l3.776 9h10.428l3.432-12h4.195zm-12 4h3v2h-3v3h-2v-3h-3v-2h3v-3h2v3z"/></svg> Add To Cart
                    
                     </Button>:
                    <> 
                     <div className='d-flex align-items-center justify-content-center'>
            <Button>
            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M13.5 18c-.828 0-1.5.672-1.5 1.5 0 .829.672 1.5 1.5 1.5s1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm-3.5 1.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5zm14-16.5l-.743 2h-1.929l-3.473 12h-13.239l-4.616-11h2.169l3.776 9h10.428l3.432-12h4.195zm-17 4h8v2h-8v-2z"/></svg>
            </Button>
            <span className='m-2'>{quantity} in Cart </span>
            <Button>
                <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M13.5 18c-.828 0-1.5.672-1.5 1.5 0 .829.672 1.5 1.5 1.5s1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm-3.5 1.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5zm14-16.5l-.743 2h-1.929l-3.473 12h-13.239l-4.616-11h2.169l3.776 9h10.428l3.432-12h4.195zm-12 4h3v2h-3v3h-2v-3h-3v-2h3v-3h2v3z"/></svg>
            </Button>
           </div>
           <div className='d-flex align-items-center justify-content-center'>
            <Button variant="danger"  size="sm" >Remove </Button>
           </div>
                  </>   }

            
       </div> 
        </Card.Body>
    </Card>                                                                     
  )
}
