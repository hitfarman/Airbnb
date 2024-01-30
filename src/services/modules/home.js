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

export function getHomeHotRecommendData() {
  return airbnbRequest.get({
    url: "/home/hotrecommenddest"
  })
}

export function getHomeLongForData() {
  return airbnbRequest.get({
    url: "/home/longfor"
  })
}

export function getHomePlusData() {
  return airbnbRequest.get({
    url: "/home/plus"
  })
}