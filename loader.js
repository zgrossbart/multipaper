loader = {
};

function loadDrawing(/*string*/ url, /*string*/ id) {
    jQuery.ajax({
        url: url + '.pjs',
        dataType: 'html',
        success: function(data) {
            paper = new paper.PaperScope();
            paper.setup(document.getElementById(id));
            paper.evaluate(data);
            
            loader[url].layout();
        }
    });
}


$(document).ready(function() {
    loadDrawing('drawing1', 'canvas1');
    loadDrawing('drawing2', 'canvas2');
});
