(this["webpackJsonpmxgraph-react-hybrid"]=this["webpackJsonpmxgraph-react-hybrid"]||[]).push([[0],{10:function(m,e,a){},12:function(m,e,a){"use strict";a.r(e);var r=a(0),o=a.n(r),x=a(4),s=a.n(x),h=(a(9),a(10),a(2));function l(m){var e=Object(r.useState)(m?"loading":"idle"),a=Object(h.a)(e,2),o=a[0],x=a[1];return Object(r.useEffect)((function(){if(m){var e=document.querySelector('script[src="'.concat(m,'"]'));if(e)x(e.getAttribute("data-status"));else{(e=document.createElement("script")).src=m,e.async=!1,e.setAttribute("data-status","loading"),document.body.appendChild(e);var a=function(m){e.setAttribute("data-status","load"===m.type?"ready":"error")};e.addEventListener("load",a),e.addEventListener("error",a)}var r=function(m){x("load"===m.type?"ready":"error")};return e.addEventListener("load",r),e.addEventListener("error",r),function(){e&&(e.removeEventListener("load",r),e.removeEventListener("error",r))}}x("idle")}),[m]),o}var p=function(){var m=Object(r.useState)(!1),e=Object(h.a)(m,2),a=e[0],o=e[1];l("demo_flow_mxgraph/mxgraphEditor/editorInit.js"),l("demo_flow_mxgraph/mxgraph/js/mxClient.js"),l("demo_flow_mxgraph/mxgraph/js/util/mxLog.js"),l("demo_flow_mxgraph/mxgraph/js/util/mxObjectIdentity.js"),l("demo_flow_mxgraph/mxgraph/js/util/mxDictionary.js"),l("demo_flow_mxgraph/mxgraph/js/util/mxResources.js"),l("demo_flow_mxgraph/mxgraph/js/util/mxPoint.js"),l("demo_flow_mxgraph/mxgraph/js/util/mxRectangle.js"),l("demo_flow_mxgraph/mxgraph/js/util/mxEffects.js"),l("demo_flow_mxgraph/mxgraph/js/util/mxUtils.js"),l("demo_flow_mxgraph/mxgraph/js/util/mxConstants.js"),l("demo_flow_mxgraph/mxgraph/js/util/mxEventObject.js"),l("demo_flow_mxgraph/mxgraph/js/util/mxMouseEvent.js"),l("demo_flow_mxgraph/mxgraph/js/util/mxEventSource.js"),l("demo_flow_mxgraph/mxgraph/js/util/mxEvent.js"),l("demo_flow_mxgraph/mxgraph/js/util/mxXmlRequest.js"),l("demo_flow_mxgraph/mxgraph/js/util/mxClipboard.js"),l("demo_flow_mxgraph/mxgraph/js/util/mxWindow.js"),l("demo_flow_mxgraph/mxgraph/js/util/mxForm.js"),l("demo_flow_mxgraph/mxgraph/js/util/mxImage.js"),l("demo_flow_mxgraph/mxgraph/js/util/mxDivResizer.js"),l("demo_flow_mxgraph/mxgraph/js/util/mxDragSource.js"),l("demo_flow_mxgraph/mxgraph/js/util/mxToolbar.js"),l("demo_flow_mxgraph/mxgraph/js/util/mxUndoableEdit.js"),l("demo_flow_mxgraph/mxgraph/js/util/mxUndoManager.js"),l("demo_flow_mxgraph/mxgraph/js/util/mxUrlConverter.js"),l("demo_flow_mxgraph/mxgraph/js/util/mxPanningManager.js"),l("demo_flow_mxgraph/mxgraph/js/util/mxPopupMenu.js"),l("demo_flow_mxgraph/mxgraph/js/util/mxAutoSaveManager.js"),l("demo_flow_mxgraph/mxgraph/js/util/mxAnimation.js"),l("demo_flow_mxgraph/mxgraph/js/util/mxMorphing.js"),l("demo_flow_mxgraph/mxgraph/js/util/mxImageBundle.js"),l("demo_flow_mxgraph/mxgraph/js/util/mxImageExport.js"),l("demo_flow_mxgraph/mxgraph/js/util/mxAbstractCanvas2D.js"),l("demo_flow_mxgraph/mxgraph/js/util/mxXmlCanvas2D.js"),l("demo_flow_mxgraph/mxgraph/js/util/mxSvgCanvas2D.js"),l("demo_flow_mxgraph/mxgraph/js/util/mxVmlCanvas2D.js"),l("demo_flow_mxgraph/mxgraph/js/util/mxGuide.js"),l("demo_flow_mxgraph/mxgraph/js/shape/mxShape.js"),l("demo_flow_mxgraph/mxgraph/js/shape/mxStencil.js"),l("demo_flow_mxgraph/mxgraph/js/shape/mxStencilRegistry.js"),l("demo_flow_mxgraph/mxgraph/js/shape/mxMarker.js"),l("demo_flow_mxgraph/mxgraph/js/shape/mxActor.js"),l("demo_flow_mxgraph/mxgraph/js/shape/mxCloud.js"),l("demo_flow_mxgraph/mxgraph/js/shape/mxRectangleShape.js"),l("demo_flow_mxgraph/mxgraph/js/shape/mxEllipse.js"),l("demo_flow_mxgraph/mxgraph/js/shape/mxDoubleEllipse.js"),l("demo_flow_mxgraph/mxgraph/js/shape/mxRhombus.js"),l("demo_flow_mxgraph/mxgraph/js/shape/mxPolyline.js"),l("demo_flow_mxgraph/mxgraph/js/shape/mxArrow.js"),l("demo_flow_mxgraph/mxgraph/js/shape/mxArrowConnector.js"),l("demo_flow_mxgraph/mxgraph/js/shape/mxText.js"),l("demo_flow_mxgraph/mxgraph/js/shape/mxTriangle.js"),l("demo_flow_mxgraph/mxgraph/js/shape/mxHexagon.js"),l("demo_flow_mxgraph/mxgraph/js/shape/mxLine.js"),l("demo_flow_mxgraph/mxgraph/js/shape/mxImageShape.js"),l("demo_flow_mxgraph/mxgraph/js/shape/mxLabel.js"),l("demo_flow_mxgraph/mxgraph/js/shape/mxCylinder.js"),l("demo_flow_mxgraph/mxgraph/js/shape/mxConnector.js"),l("demo_flow_mxgraph/mxgraph/js/shape/mxSwimlane.js"),l("demo_flow_mxgraph/mxgraph/js/layout/mxGraphLayout.js"),l("demo_flow_mxgraph/mxgraph/js/layout/mxStackLayout.js"),l("demo_flow_mxgraph/mxgraph/js/layout/mxPartitionLayout.js"),l("demo_flow_mxgraph/mxgraph/js/layout/mxCompactTreeLayout.js"),l("demo_flow_mxgraph/mxgraph/js/layout/mxRadialTreeLayout.js"),l("demo_flow_mxgraph/mxgraph/js/layout/mxFastOrganicLayout.js"),l("demo_flow_mxgraph/mxgraph/js/layout/mxCircleLayout.js"),l("demo_flow_mxgraph/mxgraph/js/layout/mxParallelEdgeLayout.js"),l("demo_flow_mxgraph/mxgraph/js/layout/mxCompositeLayout.js"),l("demo_flow_mxgraph/mxgraph/js/layout/mxEdgeLabelLayout.js"),l("demo_flow_mxgraph/mxgraph/js/layout/hierarchical/model/mxGraphAbstractHierarchyCell.js"),l("demo_flow_mxgraph/mxgraph/js/layout/hierarchical/model/mxGraphHierarchyNode.js"),l("demo_flow_mxgraph/mxgraph/js/layout/hierarchical/model/mxGraphHierarchyEdge.js"),l("demo_flow_mxgraph/mxgraph/js/layout/hierarchical/model/mxGraphHierarchyModel.js"),l("demo_flow_mxgraph/mxgraph/js/layout/hierarchical/model/mxSwimlaneModel.js"),l("demo_flow_mxgraph/mxgraph/js/layout/hierarchical/stage/mxHierarchicalLayoutStage.js"),l("demo_flow_mxgraph/mxgraph/js/layout/hierarchical/stage/mxMedianHybridCrossingReduction.js"),l("demo_flow_mxgraph/mxgraph/js/layout/hierarchical/stage/mxMinimumCycleRemover.js"),l("demo_flow_mxgraph/mxgraph/js/layout/hierarchical/stage/mxCoordinateAssignment.js"),l("demo_flow_mxgraph/mxgraph/js/layout/hierarchical/stage/mxSwimlaneOrdering.js"),l("demo_flow_mxgraph/mxgraph/js/layout/hierarchical/mxHierarchicalLayout.js"),l("demo_flow_mxgraph/mxgraph/js/layout/hierarchical/mxSwimlaneLayout.js"),l("demo_flow_mxgraph/mxgraph/js/model/mxGraphModel.js"),l("demo_flow_mxgraph/mxgraph/js/model/mxCell.js"),l("demo_flow_mxgraph/mxgraph/js/model/mxGeometry.js"),l("demo_flow_mxgraph/mxgraph/js/model/mxCellPath.js"),l("demo_flow_mxgraph/mxgraph/js/view/mxPerimeter.js"),l("demo_flow_mxgraph/mxgraph/js/view/mxPrintPreview.js"),l("demo_flow_mxgraph/mxgraph/js/view/mxStylesheet.js"),l("demo_flow_mxgraph/mxgraph/js/view/mxCellState.js"),l("demo_flow_mxgraph/mxgraph/js/view/mxGraphSelectionModel.js"),l("demo_flow_mxgraph/mxgraph/js/view/mxCellEditor.js"),l("demo_flow_mxgraph/mxgraph/js/view/mxCellRenderer.js"),l("demo_flow_mxgraph/mxgraph/js/view/mxEdgeStyle.js"),l("demo_flow_mxgraph/mxgraph/js/view/mxStyleRegistry.js"),l("demo_flow_mxgraph/mxgraph/js/view/mxGraphView.js"),l("demo_flow_mxgraph/mxgraph/js/view/mxGraph.js"),l("demo_flow_mxgraph/mxgraph/js/view/mxCellOverlay.js"),l("demo_flow_mxgraph/mxgraph/js/view/mxOutline.js"),l("demo_flow_mxgraph/mxgraph/js/view/mxMultiplicity.js"),l("demo_flow_mxgraph/mxgraph/js/view/mxLayoutManager.js"),l("demo_flow_mxgraph/mxgraph/js/view/mxSwimlaneManager.js"),l("demo_flow_mxgraph/mxgraph/js/view/mxTemporaryCellStates.js"),l("demo_flow_mxgraph/mxgraph/js/view/mxCellStatePreview.js"),l("demo_flow_mxgraph/mxgraph/js/view/mxConnectionConstraint.js"),l("demo_flow_mxgraph/mxgraph/js/handler/mxGraphHandler.js"),l("demo_flow_mxgraph/mxgraph/js/handler/mxPanningHandler.js"),l("demo_flow_mxgraph/mxgraph/js/handler/mxPopupMenuHandler.js"),l("demo_flow_mxgraph/mxgraph/js/handler/mxCellMarker.js"),l("demo_flow_mxgraph/mxgraph/js/handler/mxSelectionCellsHandler.js"),l("demo_flow_mxgraph/mxgraph/js/handler/mxConnectionHandler.js"),l("demo_flow_mxgraph/mxgraph/js/handler/mxConstraintHandler.js"),l("demo_flow_mxgraph/mxgraph/js/handler/mxRubberband.js"),l("demo_flow_mxgraph/mxgraph/js/handler/mxHandle.js"),l("demo_flow_mxgraph/mxgraph/js/handler/mxVertexHandler.js"),l("demo_flow_mxgraph/mxgraph/js/handler/mxEdgeHandler.js"),l("demo_flow_mxgraph/mxgraph/js/handler/mxElbowEdgeHandler.js"),l("demo_flow_mxgraph/mxgraph/js/handler/mxEdgeSegmentHandler.js"),l("demo_flow_mxgraph/mxgraph/js/handler/mxKeyHandler.js"),l("demo_flow_mxgraph/mxgraph/js/handler/mxTooltipHandler.js"),l("demo_flow_mxgraph/mxgraph/js/handler/mxCellTracker.js"),l("demo_flow_mxgraph/mxgraph/js/handler/mxCellHighlight.js"),l("demo_flow_mxgraph/mxgraph/js/editor/mxDefaultKeyHandler.js"),l("demo_flow_mxgraph/mxgraph/js/editor/mxDefaultPopupMenu.js"),l("demo_flow_mxgraph/mxgraph/js/editor/mxDefaultToolbar.js"),l("demo_flow_mxgraph/mxgraph/js/editor/mxEditor.js"),l("demo_flow_mxgraph/mxgraph/js/io/mxCodecRegistry.js"),l("demo_flow_mxgraph/mxgraph/js/io/mxCodec.js"),l("demo_flow_mxgraph/mxgraph/js/io/mxObjectCodec.js"),l("demo_flow_mxgraph/mxgraph/js/io/mxCellCodec.js"),l("demo_flow_mxgraph/mxgraph/js/io/mxModelCodec.js"),l("demo_flow_mxgraph/mxgraph/js/io/mxRootChangeCodec.js"),l("demo_flow_mxgraph/mxgraph/js/io/mxChildChangeCodec.js"),l("demo_flow_mxgraph/mxgraph/js/io/mxTerminalChangeCodec.js"),l("demo_flow_mxgraph/mxgraph/js/io/mxGenericChangeCodec.js"),l("demo_flow_mxgraph/mxgraph/js/io/mxGraphCodec.js"),l("demo_flow_mxgraph/mxgraph/js/io/mxGraphViewCodec.js"),l("demo_flow_mxgraph/mxgraph/js/io/mxStylesheetCodec.js"),l("demo_flow_mxgraph/mxgraph/js/io/mxDefaultKeyHandlerCodec.js"),l("demo_flow_mxgraph/mxgraph/js/io/mxDefaultToolbarCodec.js"),l("demo_flow_mxgraph/mxgraph/js/io/mxDefaultPopupMenuCodec.js"),l("demo_flow_mxgraph/mxgraph/js/io/mxEditorCodec.js"),l("demo_flow_mxgraph/mxgraphEditor/js/Init.js"),l("demo_flow_mxgraph/mxgraphEditor/deflate/pako.min.js"),l("demo_flow_mxgraph/mxgraphEditor/deflate/base64.js"),l("demo_flow_mxgraph/mxgraphEditor/jscolor/jscolor.js"),l("demo_flow_mxgraph/mxgraphEditor/sanitizer/sanitizer.min.js"),l("demo_flow_mxgraph/mxgraphEditor/js/EditorUi.js"),l("demo_flow_mxgraph/mxgraphEditor/js/Editor.js"),l("demo_flow_mxgraph/mxgraphEditor/js/Sidebar.js"),l("demo_flow_mxgraph/mxgraphEditor/js/Graph.js"),l("demo_flow_mxgraph/mxgraphEditor/js/Format.js"),l("demo_flow_mxgraph/mxgraphEditor/js/Shapes.js"),l("demo_flow_mxgraph/mxgraphEditor/js/Actions.js"),l("demo_flow_mxgraph/mxgraphEditor/js/Menus.js"),l("demo_flow_mxgraph/mxgraphEditor/js/Toolbar.js");var x=l("demo_flow_mxgraph/mxgraphEditor/js/Dialogs.js");return Object(r.useEffect)((function(){"ready"===x&&o(!0)}),[x]),a},g=a(1);var t=function(){var m=Object(r.useRef)(),e=Object(r.useRef)(),a=p();return Object(r.useLayoutEffect)((function(){if(a){var r=EditorUi.prototype.init;EditorUi.prototype.init=function(){r.apply(this,arguments),this.actions.get("export").setEnabled(!1),Editor.useLocalStorage||mxUtils.post(OPEN_URL,"",mxUtils.bind(this,(function(m){var e=404!==m.getStatus();this.actions.get("open").setEnabled(e||Graph.fileSupport),this.actions.get("import").setEnabled(e||Graph.fileSupport),this.actions.get("save").setEnabled(e),this.actions.get("saveAs").setEnabled(e),this.actions.get("export").setEnabled(e)})))},mxResources.loadDefaultBundle=!1;var o=mxResources.getDefaultBundle(RESOURCE_BASE,mxLanguage)||mxResources.getSpecialBundle(RESOURCE_BASE,mxLanguage);return mxUtils.getAll([o,STYLE_PATH+"/default.xml"],(function(a){mxResources.parse(a[0].getText());var r={};r[Graph.prototype.defaultThemeName]=a[1].getDocumentElement(),e.current=new EditorUi(new Editor("0"===urlParams.chrome,r),m.current),e.current.editor.graph.addListener(mxEvent.CLICK,(function(m,e){var a,r;a=m,r=e,console.log(a,r)})),console.log(e,e.current.editor)}),(function(){document.body.innerHTML='<center style="margin-top:10%;">Error loading resource files. Please check browser console.</center>'})),console.log(m,mxEvent),function(){e.current.destory()}}}),[a]),Object(g.jsx)(g.Fragment,{children:Object(g.jsx)("div",{ref:m})})},d=function(m){m&&m instanceof Function&&a.e(3).then(a.bind(null,13)).then((function(e){var a=e.getCLS,r=e.getFID,o=e.getFCP,x=e.getLCP,s=e.getTTFB;a(m),r(m),o(m),x(m),s(m)}))};s.a.render(Object(g.jsx)(o.a.StrictMode,{children:Object(g.jsx)(t,{})}),document.getElementById("root")),d()},9:function(m,e,a){}},[[12,1,2]]]);
//# sourceMappingURL=main.a63b6f9d.chunk.js.map