import airbnbRequest from "..";

export function getHomeGoodPriceData() {
  return airbnbRequest.get({
    url: "/home/goodprice"
  })
}

export function getHomeHighScoreData() {
  return airbnbRequest.get({
    url: "/home/highscore"
  })
}

export function getHomeDiscountData() {
  return airbnbRequest.get({
    url: "/home/discount"
  })
}