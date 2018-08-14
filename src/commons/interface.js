const inter = {}
inter.install = function(Vue) {
	const baseUrl = {
    // url: "http://10.4.0.227:8080/mdm/",//彭江华/
    // url: "http://10.4.0.246:8080/mdm/",//胡
    url: "http://yapi.demo.qunar.com/mock/16344/",//胡
	}
	const ME = {
	  getUserId:baseUrl.url + "/user/info",//获取用户id
      orderStatistics:baseUrl.url + "orderStatistics"
	}

	Vue.prototype.ME = ME;
	Vue.prototype.baseUrl = baseUrl;
}
export default inter
