import airbnbRequest from "..";

export function getHomeGoodPriceData() {
  return airbnbRequest.get({
    url: "/home/goodprice"
  })
}