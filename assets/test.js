function TestLiquid()
{
    var navWrap = document.getElementById("menuLsitContainer");
    var liAry = navWrap.getElementsByTagName("li");
    
    for (var i = 0, len = liAry.length; i < len; i++) {
        liAry[i].style.listStyleImage = "url({{ site.assets_path }}expand-list.png)";
    }
}