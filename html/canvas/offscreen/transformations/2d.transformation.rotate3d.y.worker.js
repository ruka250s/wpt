// DO NOT EDIT! This test has been generated by /html/canvas/tools/gentest.py.
// OffscreenCanvas test in a worker:2d.transformation.rotate3d.y
// Description:rotate3d() around the y axis results in the correct transformation matrix
// Note:

importScripts("/resources/testharness.js");
importScripts("/html/canvas/resources/canvas-tests.js");

var t = async_test("rotate3d() around the y axis results in the correct transformation matrix");
var t_pass = t.done.bind(t);
var t_fail = t.step_func(function(reason) {
    throw reason;
});
t.step(function() {

var offscreenCanvas = new OffscreenCanvas(100, 50);
var ctx = offscreenCanvas.getContext('2d');

// angles are in radians, test something that is not a multiple of pi
const angle = 2;
const domMatrix = new DOMMatrix();
ctx.rotate3d(0, angle, 0);
domMatrix.rotateAxisAngleSelf(0, 1, 0, rad2deg(angle));
_assertMatricesApproxEqual(domMatrix, ctx.getTransform())
ctx.rotate3d(0, angle, 0);
domMatrix.rotateAxisAngleSelf(0, 1, 0, rad2deg(angle));
_assertMatricesApproxEqual(domMatrix, ctx.getTransform())
t.done();

});
done();