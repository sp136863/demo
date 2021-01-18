import Mock from 'mockjs'
//跑马灯数据
Mock.mock('/api/swiper','get',{
  'list|4':[{ 
    image: '@dataImage(375x200,swiperImg)'
  }]
})
//推荐数据
Mock.mock('/api/recommend','get',{
  'list|10':[{
    image: '@dataImage(88x88,img)',
    name:'文本内容'
  }]
})
//流行数据
Mock.mock('/api/goods?type=pop&page=1','get',{
  goods:{pop:{list:[{image:'@dataImage(200x320,popImg)',name:'文本区域',id:1},{image:'@dataImage(200x320,popImg)',name:'文本区域',id:2},
  {image:'@dataImage(200x320,popImg)',name:'文本区域',id:3},{image:'@dataImage(200x320,popImg)',name:'文本区域',id:4},
  {image:'@dataImage(200x320,popImg)',name:'文本区域',id:5},{image:'@dataImage(200x320,popImg)',name:'文本区域',id:6}]}}
})
Mock.mock('/api/goods?type=pop&page=2','get',{
  goods:{pop:{'list|6':[{image:'@dataImage(200x320,popImg)',name:'文本区域',id:'@increment(1)'}]}}
})
Mock.mock('/api/goods?type=pop&page=3','get',{
  goods:{pop:{'list|6':[{image:'@dataImage(200x320,popImg)',name:'文本区域',id:'@increment(1)'}]}}
})
Mock.mock('/api/goods?type=pop&page=4','get',{
  goods:{pop:{'list|6':[{image:'@dataImage(200x320,popImg)',name:'文本区域',id:'@increment(1)'}]}}
})
//新款数据
Mock.mock('/api/goods?type=new&page=1','get',{
  goods:{new:{'list|6':[{image:'@dataImage(200x320,newImg)',name:'文本区域',id:'@increment(1)'}]}}
})
Mock.mock('/api/goods?type=new&page=2','get',{
  goods:{new:{'list|6':[{image:'@dataImage(200x320,newImg)',name:'文本区域',id:'@increment(1)'}]}}
})
Mock.mock('/api/goods?type=new&page=3','get',{
  goods:{new:{'list|6':[{image:'@dataImage(200x320,newImg)',name:'文本区域',id:'@increment(1)'}]}}
})
Mock.mock('/api/goods?type=new&page=4','get',{
  goods:{new:{'list|6':[{image:'@dataImage(200x320,newImg)',name:'文本区域',id:'@increment(1)'}]}}
})
//热卖数据
Mock.mock('/api/goods?type=hot&page=1','get',{
  goods:{hot:{'list|6':[{image:'@dataImage(200x320,hotImg)',name:'文本区域',id:'@increment(1)'}]}}
})
Mock.mock('/api/goods?type=hot&page=2','get',{
  goods:{hot:{'list|6':[{image:'@dataImage(200x320,hotImg)',name:'文本区域',id:'@increment(1)'}]}}
})
Mock.mock('/api/goods?type=hot&page=3','get',{
  goods:{hot:{'list|6':[{image:'@dataImage(200x320,hotImg)',name:'文本区域',id:'@increment(1)'}]}}
})
Mock.mock('/api/goods?type=hot&page=4','get',{
  goods:{hot:{'list|6':[{image:'@dataImage(200x320,hotImg)',name:'文本区域',id:'@increment(1)'}]}}
})
//流行详情页1
Mock.mock('/api/detail?id=1','get',{
  info:{swiper:{'list|4':[{image:'@dataImage(375x200,infoImg1)'}]},price1:'88',
collect:{title:'内容挺不错的,现在分享给大家,具有很好的参考价值,需要的朋友一起跟随',
detail:'由于这是Vue识别节点的通用机制，因此Vuekey还具有与无关的其他用途，v-for我们将在本指南的后面部分看到。'},
price:[{title:'每满300减30',detail:'新用户专享'},{title:'满减',detail:'满1599减200'},
{title:'多买优惠',detail:'满2件,总价打九折,包邮(限中国大陆)'},{title:'限购',detail:'购买不超过十件时享受单价198元,还不快抢1111111111'}]
},
detailsData:{'list|6':[{image:'@dataImage(200x320,detailsImg)',name:'文本区域',id:'@increment(1)'}]},
recommended:{'list|6':[{image:'@dataImage(200x320,recommendedImg)',name:'文本区域',id:'@increment(1)'}]}
})
Mock.mock('/api/detail?id=2','get',{
  info:{swiper:{'list|4':[{image:'@dataImage(375x200,infoImg2)'}]},price1:'88',
collect:{title:'内容挺不错的,现在分享给大家,具有很好的参考价值,需要的朋友一起跟随',
detail:'由于这是Vue识别节点的通用机制，因此Vuekey还具有与无关的其他用途，v-for我们将在本指南的后面部分看到。'},
price:[{title:'每满300减30',detail:'新用户专享'},{title:'满减',detail:'满1599减200'},
{title:'多买优惠',detail:'满2件,总价打九折,包邮(限中国大陆)'},{title:'限购',detail:'购买不超过十件时享受单价198元,还不快抢1111111111'}]
},
detailsData:{'list|6':[{image:'@dataImage(200x320,detailsImg)',name:'文本区域',id:'@increment(1)'}]},
recommended:{'list|6':[{image:'@dataImage(200x320,recommendedImg)',name:'文本区域',id:'@increment(1)'}]}
})
Mock.mock('/api/detail?id=3','get',{
  info:{swiper:{'list|4':[{image:'@dataImage(375x200,infoImg3)'}]},price1:'88',
collect:{title:'内容挺不错的,现在分享给大家,具有很好的参考价值,需要的朋友一起跟随',
detail:'由于这是Vue识别节点的通用机制，因此Vuekey还具有与无关的其他用途，v-for我们将在本指南的后面部分看到。'},
price:[{title:'每满300减30',detail:'新用户专享'},{title:'满减',detail:'满1599减200'},
{title:'多买优惠',detail:'满2件,总价打九折,包邮(限中国大陆)'},{title:'限购',detail:'购买不超过十件时享受单价198元,还不快抢1111111111'}]
},
detailsData:{'list|6':[{image:'@dataImage(200x320,detailsImg)',name:'文本区域',id:'@increment(1)'}]},
recommended:{'list|6':[{image:'@dataImage(200x320,recommendedImg)',name:'文本区域',id:'@increment(1)'}]}
})
Mock.mock('/api/detail?id=4','get',{
  info:{swiper:{'list|4':[{image:'@dataImage(375x200,infoImg4)'}]},price1:'88',
collect:{title:'内容挺不错的,现在分享给大家,具有很好的参考价值,需要的朋友一起跟随',
detail:'由于这是Vue识别节点的通用机制，因此Vuekey还具有与无关的其他用途，v-for我们将在本指南的后面部分看到。'},
price:[{title:'每满300减30',detail:'新用户专享'},{title:'满减',detail:'满1599减200'},
{title:'多买优惠',detail:'满2件,总价打九折,包邮(限中国大陆)'},{title:'限购',detail:'购买不超过十件时享受单价198元,还不快抢1111111111'}]
},
detailsData:{'list|6':[{image:'@dataImage(200x320,detailsImg)',name:'文本区域',id:'@increment(1)'}]},
recommended:{'list|6':[{image:'@dataImage(200x320,recommendedImg)',name:'文本区域',id:'@increment(1)'}]}
})
Mock.mock('/api/detail?id=5','get',{
  info:{swiper:{'list|4':[{image:'@dataImage(375x200,infoImg5)'}]},price1:'88',
collect:{title:'内容挺不错的,现在分享给大家,具有很好的参考价值,需要的朋友一起跟随',
detail:'由于这是Vue识别节点的通用机制，因此Vuekey还具有与无关的其他用途，v-for我们将在本指南的后面部分看到。'},
price:[{title:'每满300减30',detail:'新用户专享'},{title:'满减',detail:'满1599减200'},
{title:'多买优惠',detail:'满2件,总价打九折,包邮(限中国大陆)'},{title:'限购',detail:'购买不超过十件时享受单价198元,还不快抢1111111111'}]
},
detailsData:{'list|6':[{image:'@dataImage(200x320,detailsImg)',name:'文本区域',id:'@increment(1)'}]},
recommended:{'list|6':[{image:'@dataImage(200x320,recommendedImg)',name:'文本区域',id:'@increment(1)'}]}
})
Mock.mock('/api/detail?id=6','get',{
  info:{swiper:{'list|4':[{image:'@dataImage(375x200,infoImg6)'}]},price1:'88',
collect:{title:'内容挺不错的,现在分享给大家,具有很好的参考价值,需要的朋友一起跟随',
detail:'由于这是Vue识别节点的通用机制，因此Vuekey还具有与无关的其他用途，v-for我们将在本指南的后面部分看到。'},
price:[{title:'每满300减30',detail:'新用户专享'},{title:'满减',detail:'满1599减200'},
{title:'多买优惠',detail:'满2件,总价打九折,包邮(限中国大陆)'},{title:'限购',detail:'购买不超过十件时享受单价198元,还不快抢1111111111'}]
},
detailsData:{'list|6':[{image:'@dataImage(200x320,detailsImg)',name:'文本区域',id:'@increment(1)'}]},
recommended:{'list|6':[{image:'@dataImage(200x320,recommendedImg)',name:'文本区域',id:'@increment(1)'}]}
})
