function setHeight(pageName)
{
	

	var minHeights = new Array();
	
	minHeights['home']=940;
	minHeights['developers']=940;
	minHeights['team']=740;
	
	if(screen.height < minHeights[pageName])
	{
		document.getElementById('content').style.height=''+minHeights[pageName]+'px';
	}
	else
	{
			document.getElementById('content').style.height=screen.height+'px';
	}
	
}