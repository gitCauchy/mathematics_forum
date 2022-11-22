<script type="text/javascript">
    var bConnect=0;
    function load(){
    //如果是IE10及以下浏览器，则跳过不处理，
    if(navigator.userAgent.indexOf("MSIE")>0 && !navigator.userAgent.indexOf("opera") > -1) {
    //该例子只支持HTM5的浏览器
    return;
}
    try
{
    var s_pnp=new SoftKey3W();//创建UK类
    s_pnp.Socket_UK.onopen = function()
{
    bConnect=1;//代表已经连接，用于判断是否安装了客户端服务
}

    s_pnp.Socket_UK.onmessage =function got_packet(Msg)
{
    var PnpData = JSON.parse(Msg.data);
    if(PnpData.type=="PnpEvent")//如果是插拨事件处理消息
{
    if(PnpData.IsIn)
{
    alert("UKEY已被插入，被插入的锁的路径是："+PnpData.DevicePath);
}
    else
{
    alert("UKEY已被拨出，被拨出的锁的路径是："+PnpData.DevicePath);
}
}
}

    s_pnp.Socket_UK.onclose = function()
{

}


}
    catch(e)
{
    alert(e.name + ": " + e.message);
    return false;
}

}

</script>