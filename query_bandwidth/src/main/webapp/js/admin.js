function setChange()
{
	var region = document.queryForm.region.value;
	var query_method = document.queryForm.method.value;
	
	if (query_method == "user")
	{
		document.getElementById("ip_text").innerHTML = "输入user_id：";
	}
	else if (query_method == "eip" && region == "RegionOne")
	{
		document.getElementById("ip_text").innerHTML = "输入产品id：";
	} 
	else if (query_method == "eip" && region == "SHRegionOne")
	{
		document.getElementById("ip_text").innerHTML = "输入eip：";
	}
}

function checkInputText()
{	
	var ssn = document.getElementById('eiplist').value;
	var count = ssn.split("\n").length;
	if(ssn.length==0)
	{
		document.getElementById("usrErr").innerHTML="<font color='red'>查询信息不能为空</font>";
		return false;
	}
	document.getElementById("usrErr").innerHTML="";
	return true;
}