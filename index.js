// Code your solution in this file!

const ScuberH = 42
function distanceFromHqInBlocks(location) {
    if (ScuberH> location)
    return ScuberH-location
    else
    return location-ScuberH
  }

  function distanceFromHqInFeet(location) {
    return distanceFromHqInBlocks(location)*264
  }

  function distanceTravelledInFeet(firstp , secp) {
      if(firstp > secp)
    return (firstp-secp)*264
    else 
    return (secp-firstp)*264
  } 


function calculatesFarePrice(start, destination){
    let price = 0
    const feet = distanceTravelledInFeet(start, destination)
    if (feet<400)
    return 0
    else if(feet> 400 && feet<=2000) {
    price = (feet-400)*0.02
    return price}
    else if (feet>2000 && feet<2500)
    return 25
    else if(feet > 2500)
    return "cannot travel that far"
}
