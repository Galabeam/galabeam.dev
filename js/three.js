import * as THREE from 'three'
import { OrbitControls } from 'OrbitControls'
import { FBXLoader } from 'FBXLoader'

const scene = new THREE.Scene()
const loader = new FBXLoader()

// Custom
let cheese = new THREE.Object3D()
let cheeseobj = null
loader.load( '/3D/cheese.fbx', function( obj ) {
    cheese = obj.scene
    scene.add( obj )
    cheeseobj = obj
})

// Renderer
const renderer = new THREE.WebGLRenderer()
renderer.setSize(400,200)
renderer.domElement.id = "cheese3d"
renderer.setClearColor( 0xffffff, 0);
document.body.appendChild(renderer.domElement)

// Camera
const camera = new THREE.PerspectiveCamera(20, renderer.domElement.width / renderer.domElement.height, 0.1, 10000)
camera.position.z = 500
camera.position.y = 0
camera.lookAt(new THREE.Vector3(0,0,0))

const controls = new OrbitControls( camera, renderer.domElement )

const light = new THREE.AmbientLight( 0xffffff, 10 )
scene.add( light )

// Animate
const animate = () => {
    requestAnimationFrame(animate);

    if (cheeseobj != null) {
        cheeseobj.rotation.y += 0.01
    }

    controls.update()
    renderer.render(scene, camera)
}

animate()