import {request} from '../axios'

export function swiperList(){
  return request({
    url:'swiper'
  })
}
export function recommendList(){
  return request({
    url:'recommend',
  })
}
export function goodsListInfo(type,page){
  return  request({
    url:'goods',
    params:{
      type,
      page
    }
  })
}