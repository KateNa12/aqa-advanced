
function checkOrder(available, ordered){

  if (ordered === 0){
    console.log('Your order is empty');
  } else if (available < ordered){
    console.log('Your order is too large, we don’t have enough goods');
  } else {
    console.log('Your order is accepted');
  }
}

checkOrder(10,0);
checkOrder(10,20);
checkOrder(10,5);