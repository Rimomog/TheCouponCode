function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
    let todayDate = new Date(currentDate)
    let expiryDate = new Date(expirationDate)
    return expiryDate < todayDate || enteredCode !== correctCode ? false : true;
  }