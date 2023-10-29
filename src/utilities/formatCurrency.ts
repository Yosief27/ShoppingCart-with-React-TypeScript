const Currency_formatter=new Intl.NumberFormat(undefined,{currency:"KRN",style:"currency"});
export function formatCurrency(number:number ){
    return Currency_formatter.format(number);
}