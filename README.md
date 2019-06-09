# Vue实战小项目 免费的开源英语电子书阅读

> 作者：Jackshijijn

## 演示地址

[项目地址](http://ebook.zerocode.top/book/#/store/shelf)

## 基本架构和功能

>书城
>>浏览书籍
>>搜索功能
>>推荐功能

>详情页
>>目录结构（树状结构数据转化为一维和二维数组）
>>基本信息（作者、出版社、isdn）
>>加入书架功能

>听书页面
>>语音合成（有bug）
>>播放界面(尚未实现)
>>内容预览

>书架页
>>私密阅读
>>离线阅读（IndexDB 离线缓存）
>>分组
>>移除书架

>阅读器
>>字号字体设置
>>主题设置（四种）
>>阅读进度显示（IE 浏览器不支持）
>>目录（粗糙的分页算法）
>>全文搜索（搜索的关键字）
>>增加和删除书签功能

### 部分功能因为服务器和请求的问题，略有延迟卡顿

## 用到的技术栈和库

* vue.js: vuex  vuerouter  vue-cli3.0构建  vue国际化插件 I18n 
* H5： range控件阅读进度显示  audio 播放（听书页面） localStorage缓存字体字号和主题的设置  IndexDB缓存书籍
* 前端部分： es6简化开发流程  axios 实现API 请求
* 阅读器部分： epub.js开源库  实现了粗糙的推荐算法  还有一个类似抽奖的推荐图书动画
* 发布项目： git上传代码，版本管理  nginx代理   ECS服务器上线项目   采用MySQL数据库

## 说明

    使用epub.js实现了在线加载阅读图书，因为服务器和请求原因。部分功能体验不流畅，偶尔有卡顿
    
    没有实现懒加载功能，每次请求都重新加载首页的图片（此坑待补）
    
    nginx 代理设置跨域问题实现不一，有时还不一定生效
    
    localStorage 本地储存只有5M,适合储存某些字段，h5 IndexedDB 适合本地储存大量的数据
    
    大量使用mixins 和 vue组件化，加快开发流程，减少组件之间的耦合
    
## 心得教训
        这个项目从三月初开始到现在六月份，整整三个月才搞完，费时费力，中途踩坑无数；
        
        但是经过这么一个项目，对vue的理解和前端项目的开发流程有了更深的认识；真的不是练练手看看就能做好的； 
        
        开发中要有解耦和优雅降级的思维，也要有渐进增强的实力；
        
        多实践多动手，多问Google 多问 Stackoverflow ，实在不行再问大佬；
        
        用框架和库的好处就是快速上手开发，调用API实现功能，但是不经过自己二次封装或者不了解原理，
        
        一旦依赖的库更新某个API或者实现方法，自己又没有做兼容，会引来很大的麻烦，debug含着泪；
        
        途中还参加了大厂的暑假实习笔试试水，算法一知半解，菜的扣脚，得补起来，深入进去；
        
        学不动可以回家养猪，但是千万别说前端入门简单，坑深似海，学就完事了；

