export const cartCount = (cart=[]) => {
  let countCart=[];
  let newCart=cart;
  let i =0;
  newCart.forEach(item=>{
    i+=1
    let existing = countCart.filter(data=>data.itemId==item.itemId)[0];
    if (!existing) {
      countCart.push({...item,qty:1});
    } else {
      existing.qty +=1;
    }

  })
  let total=newCart.reduce((acc,item)=>{
    return acc+Number(item.price)
  },0)
  return {countCart,total}
}
