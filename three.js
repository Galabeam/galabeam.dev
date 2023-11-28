import * as THREE from 'three'
import { OrbitControls } from 'OrbitControls'
import { FBXLoader } from 'FBXLoader'

const scene = new THREE.Scene()
const loader = new FBXLoader()

// Custom
const body = new THREE.MeshStandardMaterial()

let gbd = new THREE.Object3D()
let gbdobj = null
loader.load( 'res/galabeam.dev.fbx', function( obj ) {
    gbd = obj.scene
    obj.material = body
    scene.add( obj )
    gbdobj = obj
})

// Renderer
const renderer = new THREE.WebGLRenderer()
renderer.setSize(400,200)
renderer.domElement.id = "gbd"
renderer.setClearColor( 0xffffff, 0);
document.body.appendChild(renderer.domElement)

// Camera
const camera = new THREE.PerspectiveCamera(20, renderer.domElement.width / renderer.domElement.height, 0.1, 10000)
camera.position.z = 1000
camera.position.y = 0
camera.lookAt(new THREE.Vector3(0,0,0))

const controls = new OrbitControls( camera, renderer.domElement )

const light = new THREE.AmbientLight( 0xffffff, 10 )
scene.add( light )

// Animate
const animate = () => {
    requestAnimationFrame(animate);

    if (gbdobj != null) {
        gbdobj.rotation.y += 0.01
    }

    controls.update()
    renderer.render(scene, camera)
}

animate()