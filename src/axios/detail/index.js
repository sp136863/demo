import {request} from '../axios'

export function detailInfo(id){
  return request({
    url:'detail',
    params:{
      id
    }
  })
}
export class content{
constructor(title,detail){
  this.title=title,
  this.detail=detail
}
}