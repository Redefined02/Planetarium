var sphereXRotation =  time;
var sphereYRotation =  time;
var cubeXRotation   = -time;
var cubeYRotation   =  time;
var coneXRotation   =  time;
var coneYRotation   = -time;

// ------ Draw the sphere --------

gl.useProgram(programInfo.program);

// Setup all the needed attributes.
webglUtils.setBuffersAndAttributes(gl, programInfo, sphereBufferInfo);

sphereUniforms.u_matrix = computeMatrix(
    viewProjectionMatrix,
    sphereTranslation,
    sphereXRotation,
    sphereYRotation);

// Set the uniforms we just computed
webglUtils.setUniforms(programInfo, sphereUniforms);

gl.drawArrays(gl.TRIANGLES, 0, sphereBufferInfo.numElements);

// ------ Draw the cube --------

// Setup all the needed attributes.
webglUtils.setBuffersAndAttributes(gl, programInfo, cubeBufferInfo);

cubeUniforms.u_matrix = computeMatrix(
    viewProjectionMatrix,
    cubeTranslation,
    cubeXRotation,
    cubeYRotation);

// Set the uniforms we just computed
webglUtils.setUniforms(programInfo, cubeUniforms);

gl.drawArrays(gl.TRIANGLES, 0, cubeBufferInfo.numElements);

// ------ Draw the cone --------

// Setup all the needed attributes.
webglUtils.setBuffersAndAttributes(gl, programInfo, coneBufferInfo);

coneUniforms.u_matrix = computeMatrix(
    viewProjectionMatrix,
    coneTranslation,
    coneXRotation,
    coneYRotation);

// Set the uniforms we just computed
webglUtils.setUniforms(programInfo, coneUniforms);

gl.drawArrays(gl.TRIANGLES, 0, coneBufferInfo.numElements);
