#jQuery实现自定义滚动条

		jQuery事件对象
jQuery事件对象对原生事件的差异进行封装和修正，统一了事件对象的属性和方法。
jQuery.Event.originalEvent:指向原生事件

		jQuery事件对象属性
event.pageX()
 鼠标相对于文档左侧边缘的距离

event.pageY()
 鼠标相对于文档顶部边缘的距离

 		元素属性
div.scrollTop
	"元素中的内容(文档内容)"超出"元素上边界"的那部分高度(像素数)

div.scrollLeft
	"元素中的内容(文档内容)"超出"元素左边界"的那部分宽度(像素数)

div.scrollHeight
	获取元素的完整高度，以像素为单位

div.scrollWidth
	获取元素的完整高度，以像素为单位


		jQuery提供的位置方法
scrollTop
	获取匹配的元素集合中第一个元素的当前垂直滚动条的位置，
	也就是"该元素中的内容"超出"该元素上边界"的那部分像素数

scrollTop(value)
	设置每个匹配元素的垂直滚动条位置，
	滚动条垂直位置和"元素中的内容"超出"元素上边界"的那部分像素数是相同的

Position()
	获取匹配元素中第一个元素的当前坐标，
	相对于离该元素最近且被定位过的父元素
	(relative,absolute,fixed)
Position(coordinates)
	设置匹配的元素集合中每一个元素的坐标，坐标相对于文档
	如:{x:10,y:20}


		滚动比率
滑块移动距离/滑块可移动距离 = 内容滚动高度/内容可滚动高度 →
滑块移动距离*内容可滚动高度 = 滑块可移动距离*内容滚动高度 →
内容可滚动高度/滑块可移动距离 = 内容滚动高度/滑块移动距离 = dragContBarRate


鼠标移动距离 →(=) 滑块移动距离 → 滑块可移动距离 → 内容可滚动高度 → 
内容滚动高度(这一步通过比率获得) → 设置滑块位置



内容可滚动高度 = 整篇内容完整的高度-内容可视区的高度
滑块可移动的高度(距离) = 滚动条的高度-滑块的高度


		鼠标滚轮事件浏览器的差异
Firefox中滚轮事件DOMMouseScroll，其他浏览器滚轮事件是mousewheel
$(element).on("mouseWheel","DOMMouseScroll",mouseWheelHandler)

		鼠标滚轮事件属性浏览器的差异
Firefox中使用detail属性，其他浏览器中使用wheeldelta属性
Firefox中属性取值±3(倍数)，其他浏览器中属性取值±120(倍数) 
Firefox负数表示向上，其他浏览器中正数表示向上
