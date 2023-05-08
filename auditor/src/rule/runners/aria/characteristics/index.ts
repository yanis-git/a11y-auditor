import { AriaRoles } from "./type";
import { linkRole, linkRoleDefinition } from "./link.characteristics";
import { buttonRole, buttonRoleDefinition } from "./button.characteristics";
import { alertRole, alertRoleDefinition } from "./alert.characteristics";
import {
  alertdialogRole,
  alertdialogRoleDefinition,
} from "./alertdialog.characteristics";
import { articleRole, articleRoleDefinition } from "./article.characteristics";
import { bannerRole, bannerRoleDefinition } from "./banner.characteristics";
import {
  checkboxRole,
  checkboxRoleDefinition,
} from "./checkbox.characteristics";
import {
  complementaryRole,
  complementaryRoleDefinition,
} from "./complementary.characteristics";
import { headingRole, headingRoleDefinition } from "./heading.characteristics";
import {
  applicationRole,
  applicationRoleDefinition,
} from "./application.characteristics";
import { cellRole, cellRoleDefinition } from "./cell.characteristics";
import {
  columnheaderRole,
  columnheaderRoleDefinition,
} from "./columnheader.characteristics";
import {
  comboboxRole,
  comboboxRoleDefinition,
} from "./combobox.characteristics";
import { commandRole, commandRoleDefinition } from "./command.characteristics";
import {
  compositeRole,
  compositeRoleDefinition,
} from "./composite.characteristics";
import {
  contentinfoRole,
  contentinfoRoleDefinition,
} from "./contentinfo.characteristics";
import {
  definitionRole,
  definitionRoleDefinition,
} from "./definition.characteristics";
import { dialogRole, dialogRoleDefinition } from "./dialog.characteristics";
import {
  directoryRole,
  directoryRoleDefinition,
} from "./directory.characteristics";
import {
  documentRole,
  documentRoleDefinition,
} from "./document.characteristics";
import { feedRole, feedRoleDefinition } from "./feed.characteristics";
import { figureRole, figureRoleDefinition } from "./figure.characteristics";
import { formRole, formRoleDefinition } from "./form.characteristics";
import { gridRole, gridRoleDefinition } from "./grid.characteristics";
import {
  gridcellRole,
  gridcellRoleDefinition,
} from "./gridcell.characteristics";
import { groupRole, groupRoleDefinition } from "./group.characteristics";
import { imgRole, imgRoleDefinition } from "./img.characteristics";
import { inputRole, inputRoleDefinition } from "./input.characteristics";
import {
  landmarkRole,
  landmarkRoleDefinition,
} from "./landmark.characteristics";
import { listRole, listRoleDefinition } from "./list.characteristics";
import { listboxRole, listboxRoleDefinition } from "./listbox.characteristics";
import {
  listitemRole,
  listitemRoleDefinition,
} from "./listitem.characteristics";
import { logRole, logRoleDefinition } from "./log.characteristics";
import { mainRole, mainRoleDefinition } from "./main.characteristics";
import { marqueeRole, marqueeRoleDefinition } from "./marquee.characteristics";
import { mathRole, mathRoleDefinition } from "./math.characteristics";
import { menuRole, menuRoleDefinition } from "./menu.characteristics";
import { menubarRole, menubarRoleDefinition } from "./menubar.characteristics";
import {
  menuitemRole,
  menuitemRoleDefinition,
} from "./menuitem.characteristics";
import {
  menuitemcheckboxRole,
  menuitemcheckboxRoleDefinition,
} from "./menuitemcheckbox.characteristics";
import {
  menuitemradioRole,
  menuitemradioRoleDefinition,
} from "./menuitemradio.characteristics";
import {
  navigationRole,
  navigationRoleDefinition,
} from "./navigation.characteristics";
import { noteRole, noteRoleDefinition } from "./note.characteristics";
import { optionRole, optionRoleDefinition } from "./option.characteristics";
import {
  presentationRole,
  presentationRoleDefinition,
} from "./presentation.characteristics";
import {
  progressbarRole,
  progressbarRoleDefinition,
} from "./progressbar.characteristics";
import { radioRole, radioRoleDefinition } from "./radio.characteristics";
import {
  radiogroupRole,
  radiogroupRoleDefinition,
} from "./radiogroup.characteristics";
import { rangeRole, rangeRoleDefinition } from "./range.characteristics";
import { regionRole, regionRoleDefinition } from "./region.characteristics";
import {
  roletypeRole,
  roletypeRoleDefinition,
} from "./roletype.characteristics";
import { rowRole, rowRoleDefinition } from "./row.characteristics";
import {
  rowgroupRole,
  rowgroupRoleDefinition,
} from "./rowgroup.characteristics";
import {
  rowheaderRole,
  rowheaderRoleDefinition,
} from "./rowheader.characteristics";
import {
  scrollbarRole,
  scrollbarRoleDefinition,
} from "./scrollbar.characteristics";
import { searchRole, searchRoleDefinition } from "./search.characteristics";
import {
  searchboxRole,
  searchboxRoleDefinition,
} from "./searchbox.characteristics";
import { sectionRole, sectionRoleDefinition } from "./section.characteristics";
import {
  sectionheadRole,
  sectionheadRoleDefinition,
} from "./sectionhead.characteristics";
import { selectRole, selectRoleDefinition } from "./select.characteristics";
import {
  separatorRole,
  separatorRoleDefinition,
} from "./separator.characteristics";
import { sliderRole, sliderRoleDefinition } from "./slider.characteristics";
import {
  spinbuttonRole,
  spinbuttonRoleDefinition,
} from "./spinbutton.characteristics";
import { statusRole, statusRoleDefinition } from "./status.characteristics";
import {
  structureRole,
  structureRoleDefinition,
} from "./structure.characteristics";
import { switchRole, switchRoleDefinition } from "./switch.characteristics";
import { tabRole, tabRoleDefinition } from "./tab.characteristics";
import { tableRole, tableRoleDefinition } from "./table.characteristics";
import { tablistRole, tablistRoleDefinition } from "./tablist.characteristics";
import {
  tabpanelRole,
  tabpanelRoleDefinition,
} from "./tabpanel.characteristics";
import { termRole, termRoleDefinition } from "./term.characteristics";
import { textboxRole, textboxRoleDefinition } from "./textbox.characteristics";
import { timerRole, timerRoleDefinition } from "./timer.characteristics";
import { toolbarRole, toolbarRoleDefinition } from "./toolbar.characteristics";
import { tooltipRole, tooltipRoleDefinition } from "./tooltip.characteristics";
import { treeRole, treeRoleDefinition } from "./tree.characteristics";
import {
  treegridRole,
  treegridRoleDefinition,
} from "./treegrid.characteristics";
import {
  treeitemRole,
  treeitemRoleDefinition,
} from "./treeitem.characteristics";
import { widgetRole, widgetRoleDefinition } from "./widget.characteristics";
import { windowRole, windowRoleDefinition } from "./window.characteristics";

/**
 * @source https://www.w3.org/TR/wai-aria-1.1/#namefromcontent
 */
export const Aria: AriaRoles = {
  [linkRole]: linkRoleDefinition,
  [buttonRole]: buttonRoleDefinition,
  [alertRole]: alertRoleDefinition,
  [alertdialogRole]: alertdialogRoleDefinition,
  [articleRole]: articleRoleDefinition,
  [bannerRole]: bannerRoleDefinition,
  [checkboxRole]: checkboxRoleDefinition,
  [complementaryRole]: complementaryRoleDefinition,
  [headingRole]: headingRoleDefinition,
  [applicationRole]: applicationRoleDefinition,
  [cellRole]: cellRoleDefinition,
  [columnheaderRole]: columnheaderRoleDefinition,
  [comboboxRole]: comboboxRoleDefinition,
  [commandRole]: commandRoleDefinition,
  [compositeRole]: compositeRoleDefinition,
  [contentinfoRole]: contentinfoRoleDefinition,
  [definitionRole]: definitionRoleDefinition,
  [dialogRole]: dialogRoleDefinition,
  [directoryRole]: directoryRoleDefinition,
  [documentRole]: documentRoleDefinition,
  [feedRole]: feedRoleDefinition,
  [figureRole]: figureRoleDefinition,
  [formRole]: formRoleDefinition,
  [gridRole]: gridRoleDefinition,
  [gridcellRole]: gridcellRoleDefinition,
  [groupRole]: groupRoleDefinition,
  [imgRole]: imgRoleDefinition,
  [inputRole]: inputRoleDefinition,
  [landmarkRole]: landmarkRoleDefinition,
  [listRole]: listRoleDefinition,
  [listboxRole]: listboxRoleDefinition,
  [listitemRole]: listitemRoleDefinition,
  [logRole]: logRoleDefinition,
  [mainRole]: mainRoleDefinition,
  [marqueeRole]: marqueeRoleDefinition,
  [mathRole]: mathRoleDefinition,
  [menuRole]: menuRoleDefinition,
  [menubarRole]: menubarRoleDefinition,
  [menuitemRole]: menuitemRoleDefinition,
  [menuitemcheckboxRole]: menuitemcheckboxRoleDefinition,
  [menuitemradioRole]: menuitemradioRoleDefinition,
  [navigationRole]: navigationRoleDefinition,
  [noteRole]: noteRoleDefinition,
  [optionRole]: optionRoleDefinition,
  [presentationRole]: presentationRoleDefinition,
  [progressbarRole]: progressbarRoleDefinition,
  [radioRole]: radioRoleDefinition,
  [radiogroupRole]: radiogroupRoleDefinition,
  [rangeRole]: rangeRoleDefinition,
  [regionRole]: regionRoleDefinition,
  [roletypeRole]: roletypeRoleDefinition,
  [rowRole]: rowRoleDefinition,
  [rowgroupRole]: rowgroupRoleDefinition,
  [rowheaderRole]: rowheaderRoleDefinition,
  [scrollbarRole]: scrollbarRoleDefinition,
  [searchRole]: searchRoleDefinition,
  [searchboxRole]: searchboxRoleDefinition,
  [sectionRole]: sectionRoleDefinition,
  [sectionheadRole]: sectionheadRoleDefinition,
  [selectRole]: selectRoleDefinition,
  [separatorRole]: separatorRoleDefinition,
  [sliderRole]: sliderRoleDefinition,
  [spinbuttonRole]: spinbuttonRoleDefinition,
  [statusRole]: statusRoleDefinition,
  [structureRole]: structureRoleDefinition,
  [switchRole]: switchRoleDefinition,
  [tabRole]: tabRoleDefinition,
  [tableRole]: tableRoleDefinition,
  [tablistRole]: tablistRoleDefinition,
  [tabpanelRole]: tabpanelRoleDefinition,
  [termRole]: termRoleDefinition,
  [textboxRole]: textboxRoleDefinition,
  [timerRole]: timerRoleDefinition,
  [toolbarRole]: toolbarRoleDefinition,
  [tooltipRole]: tooltipRoleDefinition,
  [treeRole]: treeRoleDefinition,
  [treegridRole]: treegridRoleDefinition,
  [treeitemRole]: treeitemRoleDefinition,
  [widgetRole]: widgetRoleDefinition,
  [windowRole]: windowRoleDefinition,
};
