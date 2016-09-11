# ximeiniang
喜媚娘的厨房，你的私人贴身厨房

# overview
静态网页。
目前使用fullpage.js，每道菜都是一个section，如果一道菜有多幅图片，则每个section下有多个slide。
网页在每次请求时，都在浏览器端动态生成。这样便于扩展和维护，并且不用直接写HTML。
所有的菜的信息都在json文件中，网页加载时，使用json文件中的数据来生成HTML，然后渲染。
json文件存放在```/db```中，当前是```dishes.json```。
图片文件存放在```/images/dishes```中。

# usage
1. 只需把作品的图片放在```/images/dishes```中，可以根据情况建立子目录。
2. 然后把作品的信息填写到json文件中，注意作品图片路径请填写步骤1中对应的路径

需要填写以下内容：

```
// 此顺序决定了最终渲染结果中作品的顺序
{
  "multislide": false, // 是否由多个图片组成， 如果不是，使用下面的结构
  "slide": {
    "dish_name": "黑椒猪柳", // 作品名称
    "dish_description": "肉老了，像在吃纸", // 作品介绍，建议不要太长
    "dish_picture": "./images/dishes/heijiaozhuliu.jpeg", // 作品图片路径
    "dish_cook": "阿荡" // 作者
  }
},
{
  "multislide": true, // 如果由多个图片组成，请使用以下结构
  "slides": [ // 注意，是复数，这里的顺序决定了渲染之后的顺序
    {
      "dish_name": "麻辣香锅",
      "dish_description": "为什么...",
      "dish_picture": "./images/dishes/malaxiangguo/malaxiangguo1.jpeg",
      "dish_cook": "阿荡"
    },
    {
      "dish_name": "现成的调味料包",
      "dish_description": "是很方便的",
      "dish_picture": "./images/dishes/malaxiangguo/malaxiangguo2.jpeg",
      "dish_cook": "阿荡"
    }
  ]
}
```

## what's more
1. 图片建议大小为 400*400px
2. 因为是静态网页，在本地修改后，可以打开```index.html``` 看一下效果再提交
3. 为了便于本地调试，图片路径```dish_picture```的值最好是相对路径，也就是前面最好带```.```


# credit

使用了以下插件：
- fullpage: https://github.com/alvarotrigo/fullPage.js
- adpative-background: https://github.com/briangonzalez/jquery.adaptive-backgrounds.js
- jsrender: https://github.com/BorisMoore/jsrender/


# warning
**CNAME** 文件用于做DNS解析，请务必不要修改和删除
