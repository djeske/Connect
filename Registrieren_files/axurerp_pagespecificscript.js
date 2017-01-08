for(var i = 0; i < 21; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

});
gv_vAlignTable['u13'] = 'top';gv_vAlignTable['u4'] = 'center';gv_vAlignTable['u8'] = 'center';document.getElementById('u19_img').tabIndex = 0;

u19.style.cursor = 'pointer';
$axure.eventManager.click('u19', function(e) {

if (true) {

	SetPanelVisibility('u16','hidden','fade',500);

}
});
gv_vAlignTable['u10'] = 'center';gv_vAlignTable['u5'] = 'top';document.getElementById('u9_img').tabIndex = 0;
HookHover('u9', false);

u9.style.cursor = 'pointer';
$axure.eventManager.click('u9', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Login.html');

}
});
gv_vAlignTable['u20'] = 'center';gv_vAlignTable['u15'] = 'top';gv_vAlignTable['u2'] = 'center';gv_vAlignTable['u11'] = 'top';gv_vAlignTable['u18'] = 'center';document.getElementById('u7_img').tabIndex = 0;
HookHover('u7', false);

u7.style.cursor = 'pointer';
$axure.eventManager.click('u7', u7Click);
InsertAfterBegin(document.body, "<div class='intcases' id='u7LinksClick'></div>")
var u7LinksClick = document.getElementById('u7LinksClick');
function u7Click(e) 
{
windowEvent = e;


	ToggleLinks(e, 'u7LinksClick');
}

InsertBeforeEnd(u7LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u7Clicku56dbe8aa9d7d4003afc32067f3fe8ded(event)'>Registrierung erfolgreich</div>");
function u7Clicku56dbe8aa9d7d4003afc32067f3fe8ded(e)
{

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Ueberblick.html');

	ToggleLinks(e, 'u7LinksClick');
}

InsertBeforeEnd(u7LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u7Clicku8b708a2cc618498fa7f15ac6e2d0a94d(event)'>Registrierung fehlerhaft</div>");
function u7Clicku8b708a2cc618498fa7f15ac6e2d0a94d(e)
{

	SetPanelVisibility('u16','toggle','none',500);

	ToggleLinks(e, 'u7LinksClick');
}
