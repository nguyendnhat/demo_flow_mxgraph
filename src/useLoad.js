import { useEffect, useState } from "react";
import useScript from "./useScript";

function useLoad() {
	const [isMxScriptReady, setMxScriptReady] = useState(false);

	useScript("demo_flow_mxgraph/mxgraphEditor/editorInit.js");
	useScript("demo_flow_mxgraph/mxgraph/js/mxClient.js");
	useScript("demo_flow_mxgraph/mxgraph/js/util/mxLog.js");
	useScript("demo_flow_mxgraph/mxgraph/js/util/mxObjectIdentity.js");
	useScript("demo_flow_mxgraph/mxgraph/js/util/mxDictionary.js");
	useScript("demo_flow_mxgraph/mxgraph/js/util/mxResources.js");
	useScript("demo_flow_mxgraph/mxgraph/js/util/mxPoint.js");
	useScript("demo_flow_mxgraph/mxgraph/js/util/mxRectangle.js");
	useScript("demo_flow_mxgraph/mxgraph/js/util/mxEffects.js");
	useScript("demo_flow_mxgraph/mxgraph/js/util/mxUtils.js");
	useScript("demo_flow_mxgraph/mxgraph/js/util/mxConstants.js");
	useScript("demo_flow_mxgraph/mxgraph/js/util/mxEventObject.js");
	useScript("demo_flow_mxgraph/mxgraph/js/util/mxMouseEvent.js");
	useScript("demo_flow_mxgraph/mxgraph/js/util/mxEventSource.js");
	useScript("demo_flow_mxgraph/mxgraph/js/util/mxEvent.js");
	useScript("demo_flow_mxgraph/mxgraph/js/util/mxXmlRequest.js");
	useScript("demo_flow_mxgraph/mxgraph/js/util/mxClipboard.js");
	useScript("demo_flow_mxgraph/mxgraph/js/util/mxWindow.js");
	useScript("demo_flow_mxgraph/mxgraph/js/util/mxForm.js");
	useScript("demo_flow_mxgraph/mxgraph/js/util/mxImage.js");
	useScript("demo_flow_mxgraph/mxgraph/js/util/mxDivResizer.js");
	useScript("demo_flow_mxgraph/mxgraph/js/util/mxDragSource.js");
	useScript("demo_flow_mxgraph/mxgraph/js/util/mxToolbar.js");
	useScript("demo_flow_mxgraph/mxgraph/js/util/mxUndoableEdit.js");
	useScript("demo_flow_mxgraph/mxgraph/js/util/mxUndoManager.js");
	useScript("demo_flow_mxgraph/mxgraph/js/util/mxUrlConverter.js");
	useScript("demo_flow_mxgraph/mxgraph/js/util/mxPanningManager.js");
	useScript("demo_flow_mxgraph/mxgraph/js/util/mxPopupMenu.js");
	useScript("demo_flow_mxgraph/mxgraph/js/util/mxAutoSaveManager.js");
	useScript("demo_flow_mxgraph/mxgraph/js/util/mxAnimation.js");
	useScript("demo_flow_mxgraph/mxgraph/js/util/mxMorphing.js");
	useScript("demo_flow_mxgraph/mxgraph/js/util/mxImageBundle.js");
	useScript("demo_flow_mxgraph/mxgraph/js/util/mxImageExport.js");
	useScript("demo_flow_mxgraph/mxgraph/js/util/mxAbstractCanvas2D.js");
	useScript("demo_flow_mxgraph/mxgraph/js/util/mxXmlCanvas2D.js");
	useScript("demo_flow_mxgraph/mxgraph/js/util/mxSvgCanvas2D.js");
	useScript("demo_flow_mxgraph/mxgraph/js/util/mxVmlCanvas2D.js");
	useScript("demo_flow_mxgraph/mxgraph/js/util/mxGuide.js");
	useScript("demo_flow_mxgraph/mxgraph/js/shape/mxShape.js");
	useScript("demo_flow_mxgraph/mxgraph/js/shape/mxStencil.js");
	useScript("demo_flow_mxgraph/mxgraph/js/shape/mxStencilRegistry.js");
	useScript("demo_flow_mxgraph/mxgraph/js/shape/mxMarker.js");
	useScript("demo_flow_mxgraph/mxgraph/js/shape/mxActor.js");
	useScript("demo_flow_mxgraph/mxgraph/js/shape/mxCloud.js");
	useScript("demo_flow_mxgraph/mxgraph/js/shape/mxRectangleShape.js");
	useScript("demo_flow_mxgraph/mxgraph/js/shape/mxEllipse.js");
	useScript("demo_flow_mxgraph/mxgraph/js/shape/mxDoubleEllipse.js");
	useScript("demo_flow_mxgraph/mxgraph/js/shape/mxRhombus.js");
	useScript("demo_flow_mxgraph/mxgraph/js/shape/mxPolyline.js");
	useScript("demo_flow_mxgraph/mxgraph/js/shape/mxArrow.js");
	useScript("demo_flow_mxgraph/mxgraph/js/shape/mxArrowConnector.js");
	useScript("demo_flow_mxgraph/mxgraph/js/shape/mxText.js");
	useScript("demo_flow_mxgraph/mxgraph/js/shape/mxTriangle.js");
	useScript("demo_flow_mxgraph/mxgraph/js/shape/mxHexagon.js");
	useScript("demo_flow_mxgraph/mxgraph/js/shape/mxLine.js");
	useScript("demo_flow_mxgraph/mxgraph/js/shape/mxImageShape.js");
	useScript("demo_flow_mxgraph/mxgraph/js/shape/mxLabel.js");
	useScript("demo_flow_mxgraph/mxgraph/js/shape/mxCylinder.js");
	useScript("demo_flow_mxgraph/mxgraph/js/shape/mxConnector.js");
	useScript("demo_flow_mxgraph/mxgraph/js/shape/mxSwimlane.js");
	useScript("demo_flow_mxgraph/mxgraph/js/layout/mxGraphLayout.js");
	useScript("demo_flow_mxgraph/mxgraph/js/layout/mxStackLayout.js");
	useScript("demo_flow_mxgraph/mxgraph/js/layout/mxPartitionLayout.js");
	useScript("demo_flow_mxgraph/mxgraph/js/layout/mxCompactTreeLayout.js");
	useScript("demo_flow_mxgraph/mxgraph/js/layout/mxRadialTreeLayout.js");
	useScript("demo_flow_mxgraph/mxgraph/js/layout/mxFastOrganicLayout.js");
	useScript("demo_flow_mxgraph/mxgraph/js/layout/mxCircleLayout.js");
	useScript("demo_flow_mxgraph/mxgraph/js/layout/mxParallelEdgeLayout.js");
	useScript("demo_flow_mxgraph/mxgraph/js/layout/mxCompositeLayout.js");
	useScript("demo_flow_mxgraph/mxgraph/js/layout/mxEdgeLabelLayout.js");
	useScript("demo_flow_mxgraph/mxgraph/js/layout/hierarchical/model/mxGraphAbstractHierarchyCell.js");
	useScript("demo_flow_mxgraph/mxgraph/js/layout/hierarchical/model/mxGraphHierarchyNode.js");
	useScript("demo_flow_mxgraph/mxgraph/js/layout/hierarchical/model/mxGraphHierarchyEdge.js");
	useScript("demo_flow_mxgraph/mxgraph/js/layout/hierarchical/model/mxGraphHierarchyModel.js");
	useScript("demo_flow_mxgraph/mxgraph/js/layout/hierarchical/model/mxSwimlaneModel.js");
	useScript("demo_flow_mxgraph/mxgraph/js/layout/hierarchical/stage/mxHierarchicalLayoutStage.js");
	useScript("demo_flow_mxgraph/mxgraph/js/layout/hierarchical/stage/mxMedianHybridCrossingReduction.js");
	useScript("demo_flow_mxgraph/mxgraph/js/layout/hierarchical/stage/mxMinimumCycleRemover.js");
	useScript("demo_flow_mxgraph/mxgraph/js/layout/hierarchical/stage/mxCoordinateAssignment.js");
	useScript("demo_flow_mxgraph/mxgraph/js/layout/hierarchical/stage/mxSwimlaneOrdering.js");
	useScript("demo_flow_mxgraph/mxgraph/js/layout/hierarchical/mxHierarchicalLayout.js");
	useScript("demo_flow_mxgraph/mxgraph/js/layout/hierarchical/mxSwimlaneLayout.js");
	useScript("demo_flow_mxgraph/mxgraph/js/model/mxGraphModel.js");
	useScript("demo_flow_mxgraph/mxgraph/js/model/mxCell.js");
	useScript("demo_flow_mxgraph/mxgraph/js/model/mxGeometry.js");
	useScript("demo_flow_mxgraph/mxgraph/js/model/mxCellPath.js");
	useScript("demo_flow_mxgraph/mxgraph/js/view/mxPerimeter.js");
	useScript("demo_flow_mxgraph/mxgraph/js/view/mxPrintPreview.js");
	useScript("demo_flow_mxgraph/mxgraph/js/view/mxStylesheet.js");
	useScript("demo_flow_mxgraph/mxgraph/js/view/mxCellState.js");
	useScript("demo_flow_mxgraph/mxgraph/js/view/mxGraphSelectionModel.js");
	useScript("demo_flow_mxgraph/mxgraph/js/view/mxCellEditor.js");
	useScript("demo_flow_mxgraph/mxgraph/js/view/mxCellRenderer.js");
	useScript("demo_flow_mxgraph/mxgraph/js/view/mxEdgeStyle.js");
	useScript("demo_flow_mxgraph/mxgraph/js/view/mxStyleRegistry.js");
	useScript("demo_flow_mxgraph/mxgraph/js/view/mxGraphView.js");
	useScript("demo_flow_mxgraph/mxgraph/js/view/mxGraph.js");
	useScript("demo_flow_mxgraph/mxgraph/js/view/mxCellOverlay.js");
	useScript("demo_flow_mxgraph/mxgraph/js/view/mxOutline.js");
	useScript("demo_flow_mxgraph/mxgraph/js/view/mxMultiplicity.js");
	useScript("demo_flow_mxgraph/mxgraph/js/view/mxLayoutManager.js");
	useScript("demo_flow_mxgraph/mxgraph/js/view/mxSwimlaneManager.js");
	useScript("demo_flow_mxgraph/mxgraph/js/view/mxTemporaryCellStates.js");
	useScript("demo_flow_mxgraph/mxgraph/js/view/mxCellStatePreview.js");
	useScript("demo_flow_mxgraph/mxgraph/js/view/mxConnectionConstraint.js");
	useScript("demo_flow_mxgraph/mxgraph/js/handler/mxGraphHandler.js");
	useScript("demo_flow_mxgraph/mxgraph/js/handler/mxPanningHandler.js");
	useScript("demo_flow_mxgraph/mxgraph/js/handler/mxPopupMenuHandler.js");
	useScript("demo_flow_mxgraph/mxgraph/js/handler/mxCellMarker.js");
	useScript("demo_flow_mxgraph/mxgraph/js/handler/mxSelectionCellsHandler.js");
	useScript("demo_flow_mxgraph/mxgraph/js/handler/mxConnectionHandler.js");
	useScript("demo_flow_mxgraph/mxgraph/js/handler/mxConstraintHandler.js");
	useScript("demo_flow_mxgraph/mxgraph/js/handler/mxRubberband.js");
	useScript("demo_flow_mxgraph/mxgraph/js/handler/mxHandle.js");
	useScript("demo_flow_mxgraph/mxgraph/js/handler/mxVertexHandler.js");
	useScript("demo_flow_mxgraph/mxgraph/js/handler/mxEdgeHandler.js");
	useScript("demo_flow_mxgraph/mxgraph/js/handler/mxElbowEdgeHandler.js");
	useScript("demo_flow_mxgraph/mxgraph/js/handler/mxEdgeSegmentHandler.js");
	useScript("demo_flow_mxgraph/mxgraph/js/handler/mxKeyHandler.js");
	useScript("demo_flow_mxgraph/mxgraph/js/handler/mxTooltipHandler.js");
	useScript("demo_flow_mxgraph/mxgraph/js/handler/mxCellTracker.js");
	useScript("demo_flow_mxgraph/mxgraph/js/handler/mxCellHighlight.js");
	useScript("demo_flow_mxgraph/mxgraph/js/editor/mxDefaultKeyHandler.js");
	useScript("demo_flow_mxgraph/mxgraph/js/editor/mxDefaultPopupMenu.js");
	useScript("demo_flow_mxgraph/mxgraph/js/editor/mxDefaultToolbar.js");
	useScript("demo_flow_mxgraph/mxgraph/js/editor/mxEditor.js");
	useScript("demo_flow_mxgraph/mxgraph/js/io/mxCodecRegistry.js");
	useScript("demo_flow_mxgraph/mxgraph/js/io/mxCodec.js");
	useScript("demo_flow_mxgraph/mxgraph/js/io/mxObjectCodec.js");
	useScript("demo_flow_mxgraph/mxgraph/js/io/mxCellCodec.js");
	useScript("demo_flow_mxgraph/mxgraph/js/io/mxModelCodec.js");
	useScript("demo_flow_mxgraph/mxgraph/js/io/mxRootChangeCodec.js");
	useScript("demo_flow_mxgraph/mxgraph/js/io/mxChildChangeCodec.js");
	useScript("demo_flow_mxgraph/mxgraph/js/io/mxTerminalChangeCodec.js");
	useScript("demo_flow_mxgraph/mxgraph/js/io/mxGenericChangeCodec.js");
	useScript("demo_flow_mxgraph/mxgraph/js/io/mxGraphCodec.js");
	useScript("demo_flow_mxgraph/mxgraph/js/io/mxGraphViewCodec.js");
	useScript("demo_flow_mxgraph/mxgraph/js/io/mxStylesheetCodec.js");
	useScript("demo_flow_mxgraph/mxgraph/js/io/mxDefaultKeyHandlerCodec.js");
	useScript("demo_flow_mxgraph/mxgraph/js/io/mxDefaultToolbarCodec.js");
	useScript("demo_flow_mxgraph/mxgraph/js/io/mxDefaultPopupMenuCodec.js");
	useScript("demo_flow_mxgraph/mxgraph/js/io/mxEditorCodec.js");
	useScript("demo_flow_mxgraph/mxgraphEditor/js/Init.js");
	useScript("demo_flow_mxgraph/mxgraphEditor/deflate/pako.min.js");
	useScript("demo_flow_mxgraph/mxgraphEditor/deflate/base64.js");
	useScript("demo_flow_mxgraph/mxgraphEditor/jscolor/jscolor.js");
	useScript("demo_flow_mxgraph/mxgraphEditor/sanitizer/sanitizer.min.js");
	useScript("demo_flow_mxgraph/mxgraphEditor/js/EditorUi.js");
	useScript("demo_flow_mxgraph/mxgraphEditor/js/Editor.js");
	useScript("demo_flow_mxgraph/mxgraphEditor/js/Sidebar.js");
	useScript("demo_flow_mxgraph/mxgraphEditor/js/Graph.js");
	useScript("demo_flow_mxgraph/mxgraphEditor/js/Format.js");
	useScript("demo_flow_mxgraph/mxgraphEditor/js/Shapes.js");
	useScript("demo_flow_mxgraph/mxgraphEditor/js/Actions.js");
	useScript("demo_flow_mxgraph/mxgraphEditor/js/Menus.js");
	useScript("demo_flow_mxgraph/mxgraphEditor/js/Toolbar.js");
	const dialogStatus = useScript("demo_flow_mxgraph/mxgraphEditor/js/Dialogs.js");

	useEffect(() => {
		if (dialogStatus === "ready") {
			setMxScriptReady(true);
		}
	}, [dialogStatus]);

	return isMxScriptReady;
}

export default useLoad;
