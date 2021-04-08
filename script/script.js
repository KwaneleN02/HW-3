var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

var camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 500 );
camera.position.set( 0, 0, 100 );
camera.lookAt( 0, 0, 0 );

var scene = new THREE.Scene();
//create a blue LineBasicMaterial
var material = new THREE.LineBasicMaterial( { color: 0xff00ff } );
var points = [];
points.push( new THREE.Vector3( - 20, 0, 0 ) );
points.push( new THREE.Vector3( 0, 20, 0 ) );
points.push( new THREE.Vector3( 20, 0, 0 ) );
points.push( new THREE.Vector3( 20, -20, -20 ));
points.push( new THREE.Vector3( 40, -40, -40 ));
var geometry = new THREE.BufferGeometry();
geometry.setFromPoints(points);
var line = new THREE.Line( geometry, material );
scene.add( line );
renderer.render( scene, camera );