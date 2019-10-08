// The SVG Engine application, implements ISVGEngineApp
var svgEngineApp = {};

// Notify SVG engine ready, init UI
svgEngineApp.onSVGEngineLoad = function(engine) {
	svgEngineApp.engine=engine;
};

svgEngineApp.setMainView = function(mainView) {
	//alert("svgEngineApp.setMainView "+mainView);
	svgEngineApp.mainView = mainView;
	svgEngineApp.synchroEngineView();
	
};
// synchronize view && engine
svgEngineApp.synchroEngineView = function() {
	if (svgEngineApp.engine && svgEngineApp.mainView) {
		svgEngineApp.mainView.setSVGEngineClient(svgEngineApp.engine);
		svgEngineApp.mainView.getSVGWindowContainer().appendChild(svgEngineApp.engine.getSVGWindowElement());
		//svgEngineApp.engine.getDocumentPresenter().onSample("tiger");
	}
	else {
		window.setTimeout(svgEngineApp.synchroEngineView, 100);
	}
};


svgEngineApp.showTaskMessage = function(msg) {
	svgEngineApp.mainView.showTaskMessage(msg);
};
svgEngineApp.eraseTaskMessage = function() {
	svgEngineApp.mainView.eraseTaskMessage();
};
svgEngineApp.setTaskState = function(taskId,started) {
	// update button style
	// document.getElementById(taskId+"Btn").style.fontWeight=started ? "bold":"normal";
};

// SVG view implements ISVGView
svgEngineApp.svgView = {
		
		getSVGMaxPixelSize : function() {
			return svgEngineApp.mainView.getSVGMaxPixelSize();
		},		
		setSVGPixelSize : function(w,h) {	
			svgEngineApp.mainView.setSVGPixelSize(w,h);
		},
		hasScrollbars : function() {
			return svgEngineApp.mainView.hasScrollbars();
		}
};
svgEngineApp.getSVGView = function() {return svgEngineApp.svgView;};

// Nav view 
svgEngineApp.getNavView = function() {return svgEngineApp.mainView.getNavView();};

//Document view implements IDocumentView
svgEngineApp.getDocumentView = function() {return svgEngineApp.mainView.getDocumentView();};

//Elements drawing task view implements IElementsDrawingTaskView
svgEngineApp.getElementsDrawingTaskView = function() {return svgEngineApp.mainView.getElementsDrawingTaskView();};

//Edit view implements IEditView
svgEngineApp.getEditView = function() {return svgEngineApp.mainView.getEditView();};

//Selection view implements ISelectionView
svgEngineApp.getSelectionView = function() {return svgEngineApp.mainView.getSelectionView();};

//Shape drawing view implements IShapeDrawingView
svgEngineApp.getShapeDrawingView = function() {return svgEngineApp.mainView.getShapeDrawingView();};

//Draw controls view implements IDrawControlsView
svgEngineApp.getDrawControlsView = function() {return svgEngineApp.mainView.getDrawControlsView();};

//Stroke view implements IStrokeView
svgEngineApp.getStrokeView = function() {return svgEngineApp.mainView.getStrokeView();};

//Fill view implements IFillView
svgEngineApp.getFillView = function() {return svgEngineApp.mainView.getFillView();};

//Text style view implements ITextStyleView
svgEngineApp.getTextStyleView = function() {return svgEngineApp.mainView.getTextStyleView();};

//Marker style view implements IMarkerStyleView
svgEngineApp.getMarkerStyleView = function() {return svgEngineApp.mainView.getMarkerStyleView();};

