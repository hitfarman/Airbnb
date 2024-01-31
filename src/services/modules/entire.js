import airbnbRequest from "..";

export function getEntireRoomList(offset = 0, size = 20) {
  return airbnbRequest.get({
    url: "/entire/list",
    params: {
      offset,
      size
    }
  })
}