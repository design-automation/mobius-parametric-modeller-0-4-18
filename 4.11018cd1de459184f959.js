(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./src/app/views/view-gallery/view-gallery.module.ngfactory.js":
/*!*********************************************************************!*\
  !*** ./src/app/views/view-gallery/view-gallery.module.ngfactory.js ***!
  \*********************************************************************/
/*! exports provided: ViewGalleryModuleNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewGalleryModuleNgFactory", function() { return ViewGalleryModuleNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _view_gallery_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view-gallery.module */ "./src/app/views/view-gallery/view-gallery.module.ts");
/* harmony import */ var _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/@angular/router/router.ngfactory */ "./node_modules/@angular/router/router.ngfactory.js");
/* harmony import */ var _view_gallery_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view-gallery.component.ngfactory */ "./src/app/views/view-gallery/view-gallery.component.ngfactory.js");
/* harmony import */ var _node_modules_angular_material_tooltip_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../node_modules/@angular/material/tooltip/typings/index.ngfactory */ "./node_modules/@angular/material/tooltip/typings/index.ngfactory.js");
/* harmony import */ var _node_modules_ngx_color_picker_dist_ngx_color_picker_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../node_modules/ngx-color-picker/dist/ngx-color-picker.ngfactory */ "./node_modules/ngx-color-picker/dist/ngx-color-picker.ngfactory.js");
/* harmony import */ var _model_viewers_all_viewers_console_viewer_console_viewer_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../model-viewers/all-viewers/console-viewer/console-viewer.component.ngfactory */ "./src/app/model-viewers/all-viewers/console-viewer/console-viewer.component.ngfactory.js");
/* harmony import */ var _model_viewers_all_viewers_help_viewer_help_viewer_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../model-viewers/all-viewers/help-viewer/help-viewer.component.ngfactory */ "./src/app/model-viewers/all-viewers/help-viewer/help-viewer.component.ngfactory.js");
/* harmony import */ var _model_viewers_all_viewers_gi_viewer_gi_viewer_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../model-viewers/all-viewers/gi-viewer/gi-viewer.component.ngfactory */ "./src/app/model-viewers/all-viewers/gi-viewer/gi-viewer.component.ngfactory.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm5/core.es5.js");
/* harmony import */ var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/cdk/observers */ "./node_modules/@angular/cdk/esm5/observers.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/esm5/overlay.es5.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/esm5/bidi.es5.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm5/tooltip.es5.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm5/sort.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm5/paginator.es5.js");
/* harmony import */ var ngx_color_picker__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ngx-color-picker */ "./node_modules/ngx-color-picker/dist/ngx-color-picker.es5.js");
/* harmony import */ var _model_viewers_all_viewers_gi_viewer_html_modal_window_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../model-viewers/all-viewers/gi-viewer/html/modal-window.service */ "./src/app/model-viewers/all-viewers/gi-viewer/html/modal-window.service.ts");
/* harmony import */ var _model_viewers_all_viewers_gi_viewer_threejs_threejs_viewer_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../model-viewers/all-viewers/gi-viewer/threejs/threejs-viewer.service */ "./src/app/model-viewers/all-viewers/gi-viewer/threejs/threejs-viewer.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _view_gallery_routing_module__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./view-gallery-routing.module */ "./src/app/views/view-gallery/view-gallery-routing.module.ts");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/esm5/slider.es5.js");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/esm5/platform.es5.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm5/checkbox.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var angular_split__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! angular-split */ "./node_modules/angular-split/fesm5/angular-split.js");
/* harmony import */ var _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/cdk/accordion */ "./node_modules/@angular/cdk/esm5/accordion.es5.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/esm5/portal.es5.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm5/expansion.es5.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm5/a11y.es5.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm5/scrolling.es5.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _model_viewers_all_viewers_gi_viewer_attribute_attribute_module__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ../../model-viewers/all-viewers/gi-viewer/attribute/attribute.module */ "./src/app/model-viewers/all-viewers/gi-viewer/attribute/attribute.module.ts");
/* harmony import */ var _model_viewers_all_viewers_gi_viewer_gi_viewer_module__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ../../model-viewers/all-viewers/gi-viewer/gi-viewer.module */ "./src/app/model-viewers/all-viewers/gi-viewer/gi-viewer.module.ts");
/* harmony import */ var _model_viewers_model_viewers_container_module__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ../../model-viewers/model-viewers-container.module */ "./src/app/model-viewers/model-viewers-container.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _view_gallery_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./view-gallery.component */ "./src/app/views/view-gallery/view-gallery.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */













































var ViewGalleryModuleNgFactory = /*@__PURE__*/ /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_view_gallery_module__WEBPACK_IMPORTED_MODULE_1__["ViewGalleryModule"], [], function (_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ɵEmptyOutletComponentNgFactory"], _view_gallery_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["ViewGalleryComponentNgFactory"], _node_modules_angular_material_tooltip_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["TooltipComponentNgFactory"], _node_modules_ngx_color_picker_dist_ngx_color_picker_ngfactory__WEBPACK_IMPORTED_MODULE_5__["ColorPickerComponentNgFactory"], _model_viewers_all_viewers_console_viewer_console_viewer_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["ConsoleViewerComponentNgFactory"], _model_viewers_all_viewers_help_viewer_help_viewer_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["HelpViewerComponentNgFactory"], _model_viewers_all_viewers_gi_viewer_gi_viewer_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["GIViewerComponentNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_common_common_a"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["HAMMER_GESTURE_CONFIG"], _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["GestureConfig"], [[2, _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MAT_HAMMER_OPTIONS"]], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatCommonModule"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_12__["MutationObserverFactory"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_12__["MutationObserverFactory"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_forms_forms_j"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_forms_forms_j"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ngx_pagination__WEBPACK_IMPORTED_MODULE_14__["PaginationService"], ngx_pagination__WEBPACK_IMPORTED_MODULE_14__["PaginationService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_15__["Overlay"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_15__["Overlay"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_15__["ScrollStrategyOptions"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_15__["OverlayContainer"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_15__["OverlayPositionBuilder"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_15__["OverlayKeyboardDispatcher"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["DOCUMENT"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_16__["Directionality"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_9__["Location"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_15__["ɵc"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_15__["ɵd"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_15__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__["MAT_TOOLTIP_SCROLL_STRATEGY"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__["MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_15__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_material_sort__WEBPACK_IMPORTED_MODULE_18__["MatSortHeaderIntl"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_18__["MAT_SORT_HEADER_INTL_PROVIDER_FACTORY"], [[3, _angular_material_sort__WEBPACK_IMPORTED_MODULE_18__["MatSortHeaderIntl"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_material_select__WEBPACK_IMPORTED_MODULE_19__["MAT_SELECT_SCROLL_STRATEGY"], _angular_material_select__WEBPACK_IMPORTED_MODULE_19__["MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_15__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_20__["MatPaginatorIntl"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_20__["MAT_PAGINATOR_INTL_PROVIDER_FACTORY"], [[3, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_20__["MatPaginatorIntl"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ngx_color_picker__WEBPACK_IMPORTED_MODULE_21__["ColorPickerService"], ngx_color_picker__WEBPACK_IMPORTED_MODULE_21__["ColorPickerService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _model_viewers_all_viewers_gi_viewer_html_modal_window_service__WEBPACK_IMPORTED_MODULE_22__["ModalService"], _model_viewers_all_viewers_gi_viewer_html_modal_window_service__WEBPACK_IMPORTED_MODULE_22__["ModalService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _model_viewers_all_viewers_gi_viewer_threejs_threejs_viewer_service__WEBPACK_IMPORTED_MODULE_23__["ThreeJSViewerService"], _model_viewers_all_viewers_gi_viewer_threejs_threejs_viewer_service__WEBPACK_IMPORTED_MODULE_23__["ThreeJSViewerService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_9__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_24__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_24__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_24__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_24__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _view_gallery_routing_module__WEBPACK_IMPORTED_MODULE_25__["ViewGalleryRoutingModule"], _view_gallery_routing_module__WEBPACK_IMPORTED_MODULE_25__["ViewGalleryRoutingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_16__["BidiModule"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_16__["BidiModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatCommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatCommonModule"], [[2, _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MATERIAL_SANITY_CHECKS"]], [2, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["HAMMER_LOADER"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_slider__WEBPACK_IMPORTED_MODULE_26__["MatSliderModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_26__["MatSliderModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_27__["PlatformModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_27__["PlatformModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatRippleModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatRippleModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_12__["ObserversModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_12__["ObserversModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_28__["MatCheckboxModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_28__["MatCheckboxModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_forms_forms_bc"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_forms_forms_bc"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_icon__WEBPACK_IMPORTED_MODULE_29__["MatIconModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_29__["MatIconModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, angular_split__WEBPACK_IMPORTED_MODULE_30__["AngularSplitModule"], angular_split__WEBPACK_IMPORTED_MODULE_30__["AngularSplitModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ngx_pagination__WEBPACK_IMPORTED_MODULE_14__["NgxPaginationModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_14__["NgxPaginationModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_31__["CdkAccordionModule"], _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_31__["CdkAccordionModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_32__["PortalModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_32__["PortalModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_33__["MatExpansionModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_33__["MatExpansionModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_34__["A11yModule"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_34__["A11yModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_35__["ScrollingModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_35__["ScrollingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_15__["OverlayModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_15__["OverlayModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__["MatTooltipModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__["MatTooltipModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_36__["CdkTableModule"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_36__["CdkTableModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_table__WEBPACK_IMPORTED_MODULE_37__["MatTableModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_37__["MatTableModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_sort__WEBPACK_IMPORTED_MODULE_18__["MatSortModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_18__["MatSortModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_button__WEBPACK_IMPORTED_MODULE_38__["MatButtonModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_38__["MatButtonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatPseudoCheckboxModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatPseudoCheckboxModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatOptionModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatOptionModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_39__["MatFormFieldModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_39__["MatFormFieldModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_select__WEBPACK_IMPORTED_MODULE_19__["MatSelectModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_19__["MatSelectModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_20__["MatPaginatorModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_20__["MatPaginatorModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _model_viewers_all_viewers_gi_viewer_attribute_attribute_module__WEBPACK_IMPORTED_MODULE_40__["AttributeModule"], _model_viewers_all_viewers_gi_viewer_attribute_attribute_module__WEBPACK_IMPORTED_MODULE_40__["AttributeModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ngx_color_picker__WEBPACK_IMPORTED_MODULE_21__["ColorPickerModule"], ngx_color_picker__WEBPACK_IMPORTED_MODULE_21__["ColorPickerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _model_viewers_all_viewers_gi_viewer_gi_viewer_module__WEBPACK_IMPORTED_MODULE_41__["GIViewerModule"], _model_viewers_all_viewers_gi_viewer_gi_viewer_module__WEBPACK_IMPORTED_MODULE_41__["GIViewerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _model_viewers_model_viewers_container_module__WEBPACK_IMPORTED_MODULE_42__["DataViewersContainer"], _model_viewers_model_viewers_container_module__WEBPACK_IMPORTED_MODULE_42__["DataViewersContainer"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _shared_shared_module__WEBPACK_IMPORTED_MODULE_43__["SharedModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_43__["SharedModule"], [[3, _shared_shared_module__WEBPACK_IMPORTED_MODULE_43__["SharedModule"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _view_gallery_module__WEBPACK_IMPORTED_MODULE_1__["ViewGalleryModule"], _view_gallery_module__WEBPACK_IMPORTED_MODULE_1__["ViewGalleryModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_24__["ROUTES"], function () { return [[{ path: "", component: _view_gallery_component__WEBPACK_IMPORTED_MODULE_44__["ViewGalleryComponent"], children: [] }]]; }, [])]); });



/***/ })

}]);