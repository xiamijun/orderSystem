const inter = {}
inter.install = function(Vue) {
	const baseUrl = {
    // url: "http://10.4.0.227:8080/mdm/",//彭江华/
    // url: "http://10.4.0.246:8080/mdm/",//胡
    url: "http://yapi.demo.qunar.com/mock/16344/",//胡
	}
	const ME = {
	  getUserId:baseUrl.url + "/user/info",//获取用户id
    orderStatistics:baseUrl.url + "orderStatistics",
    moneyByMonth:baseUrl.url + "moneyByMonth",
    moneyByDay:baseUrl.url + "moneyByDay",
    moneyByHour:baseUrl.url + "moneyByHour",
    allMoneyByMonth:baseUrl.url + "allMoneyByMonth",
    allMoneyByDay:baseUrl.url + "allMoneyByDay",
    allMoneyByHour:baseUrl.url + "allMoneyByHour",
    orderListTwenty:baseUrl.url + "orderListTwenty",
    orderListFifty:baseUrl.url + "orderListFifty",
    orderListHundred:baseUrl.url + "orderListHundred",
	}

	Vue.prototype.ME = ME;
	Vue.prototype.baseUrl = baseUrl;
}
export default inter
