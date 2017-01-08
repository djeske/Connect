for(var i = 0; i < 20; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

if ((GetGlobalVariableValue('OnLoadVariable')) == ('Logout')) {

	SetPanelVisibility('u18','','none',400);

}

});
gv_vAlignTable['u12'] = 'center';gv_vAlignTable['u4'] = 'center';gv_vAlignTable['u19'] = 'top';gv_vAlignTable['u10'] = 'center';gv_vAlignTable['u17'] = 'center';gv_vAlignTable['u5'] = 'top';document.getElementById('u9_img').tabIndex = 0;
HookHover('u9', false);

u9.style.cursor = 'pointer';
$axure.eventManager.click('u9', u9Click);
InsertAfterBegin(document.body, "<div class='intcases' id='u9LinksClick'></div>")
var u9LinksClick = document.getElementById('u9LinksClick');
function u9Click(e) 
{
windowEvent = e;


	ToggleLinks(e, 'u9LinksClick');
}

InsertBeforeEnd(u9LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u9Clickuaeef293fa8444c8eb50dc194052ace5e(event)'>Login erfolgreich</div>");
function u9Clickuaeef293fa8444c8eb50dc194052ace5e(e)
{

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Ueberblick.html');

	ToggleLinks(e, 'u9LinksClick');
}

InsertBeforeEnd(u9LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u9Clicku4110561e2b544ee5a8b02a00580a042c(event)'>Login fehlerhaft</div>");
function u9Clicku4110561e2b544ee5a8b02a00580a042c(e)
{

	SetPanelVisibility('u13','toggle','fade',500);

	ToggleLinks(e, 'u9LinksClick');
}
gv_vAlignTable['u15'] = 'center';document.getElementById('u16_img').tabIndex = 0;

u16.style.cursor = 'pointer';
$axure.eventManager.click('u16', function(e) {

if (true) {

	SetPanelVisibility('u13','hidden','fade',500);

}
});
gv_vAlignTable['u2'] = 'center';document.getElementById('u11_img').tabIndex = 0;
HookHover('u11', false);

u11.style.cursor = 'pointer';
$axure.eventManager.click('u11', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Registrieren.html');

}
});
gv_vAlignTable['u7'] = 'top';