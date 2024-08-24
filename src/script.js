import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { Sky } from 'three/addons/objects/Sky.js'
import { Timer } from 'three/addons/misc/Timer.js'
import GUI from 'lil-gui'


/**
 * Base
 */
// Debug
const gui = new GUI()

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()


/**
 * Textures
 */
const textureLoader = new THREE.TextureLoader()

//Floor
const floorAlphaTexture = textureLoader.load('./floor/alpha.jpg')

//asphalt
// const floorColorTexture = textureLoader.load('./floor/asphalt_track_1k/asphalt_track_diff_1k.jpg')
// floorColorTexture.colorSpace = THREE.SRGBColorSpace
// const floorDispTexture = textureLoader.load('./floor/asphalt_track_1k/asphalt_track_disp_1k.jpg')
// const floorARMTexture = textureLoader.load('./floor/asphalt_track_1k/asphalt_track_arm_1k.jpg')
// const floorNormalTexture = textureLoader.load('./floor/asphalt_track_1k/asphalt_track_nor_gl_1k.jpg')

//lighter asphalt: asphalt_04_1k
// const floorColorTexture = textureLoader.load('./floor/asphalt_04_1k/asphalt_04_diff_1k.jpg')
// floorColorTexture.colorSpace = THREE.SRGBColorSpace
// const floorDispTexture = textureLoader.load('./floor/asphalt_04_1k/asphalt_04_disp_1k.jpg')
// const floorARMTexture = textureLoader.load('./floor/asphalt_04_1k/asphalt_04_arm_1k.jpg')
// const floorNormalTexture = textureLoader.load('./floor/asphalt_04_1k/asphalt_04_nor_gl_1k.jpg')

//snow: snow_field_aerial_1k
// const floorColorTexture = textureLoader.load('./floor/snow_field_aerial_1k/snow_field_aerial_col_1k.jpg')
// floorColorTexture.colorSpace = THREE.SRGBColorSpace
// const floorDispTexture = textureLoader.load('./floor/snow_field_aerial_1k/snow_field_aerial_disp_1k.jpg') //not working, down;load it!!!!
// const floorARMTexture = textureLoader.load('./floor/snow_field_aerial_1k/snow_field_aerial_arm_1k.jpg')
// const floorNormalTexture = textureLoader.load('./floor/snow_field_aerial_1k/snow_field_aerial_nor_gl_1k.jpg')


//snow ashphalt: asphalt_snow_1k
const floorColorTexture = textureLoader.load('./floor/asphalt_snow_1k/asphalt_snow_diff_1k.webp')
floorColorTexture.colorSpace = THREE.SRGBColorSpace
const floorDispTexture = textureLoader.load('./floor/asphalt_snow_1k/asphalt_snow_disp_1k.webp')
const floorARMTexture = textureLoader.load('./floor/asphalt_snow_1k/asphalt_snow_arm_1k.webp')
const floorNormalTexture = textureLoader.load('./floor/asphalt_snow_1k/asphalt_snow_nor_gl_1k.webp')


floorColorTexture.repeat.set(8, 8)
floorColorTexture.wrapS = THREE.RepeatWrapping
floorColorTexture.wrapT = THREE.RepeatWrapping

floorDispTexture.repeat.set(8, 8)
floorDispTexture.wrapS = THREE.RepeatWrapping
floorDispTexture.wrapT = THREE.RepeatWrapping

floorARMTexture.repeat.set(8, 8)
floorARMTexture.wrapS = THREE.RepeatWrapping
floorARMTexture.wrapT = THREE.RepeatWrapping

floorNormalTexture.repeat.set(8, 8)
floorNormalTexture.wrapS = THREE.RepeatWrapping
floorNormalTexture.wrapT = THREE.RepeatWrapping


//Walls

//Tiles
const wallColorTexture = textureLoader.load('./wall/rounded_square_tiled_wall_1k/rounded_square_tiled_wall_diff_1k.webp')
wallColorTexture.colorSpace = THREE.SRGBColorSpace
const wallARMTexture = textureLoader.load('./wall/rounded_square_tiled_wall_1k/rounded_square_tiled_wall_arm_1k.webp')
const wallNormalTexture = textureLoader.load('./wall/rounded_square_tiled_wall_1k/rounded_square_tiled_wall_nor_gl_1k.webp')

wallColorTexture.repeat.set(2, 1.5)
wallColorTexture.wrapS = THREE.RepeatWrapping
wallColorTexture.wrapT = THREE.RepeatWrapping

wallARMTexture.repeat.set(2, 1.5)
wallARMTexture.wrapS = THREE.RepeatWrapping
wallARMTexture.wrapT = THREE.RepeatWrapping

wallNormalTexture.repeat.set(2, 1.5)
wallNormalTexture.wrapS = THREE.RepeatWrapping
wallNormalTexture.wrapT = THREE.RepeatWrapping


//Roof
//clay tiles

const roofColorTexture = textureLoader.load('./roof/clay_roof_tiles_1k/clay_roof_tiles_diff_1k.webp')
roofColorTexture.colorSpace = THREE.SRGBColorSpace
const roofARMTexture = textureLoader.load('./roof/clay_roof_tiles_1k/clay_roof_tiles_arm_1k.webp')
const roofNormalTexture = textureLoader.load('./roof/clay_roof_tiles_1k/clay_roof_tiles_nor_gl_1k.webp')

roofColorTexture.repeat.set(3, 1)
roofColorTexture.wrapS = THREE.RepeatWrapping
roofColorTexture.wrapT = THREE.RepeatWrapping

roofARMTexture.repeat.set(3, 1)
roofARMTexture.wrapS = THREE.RepeatWrapping
roofARMTexture.wrapT = THREE.RepeatWrapping

roofNormalTexture.repeat.set(3, 1)
roofNormalTexture.wrapS = THREE.RepeatWrapping
roofNormalTexture.wrapT = THREE.RepeatWrapping

//Bushes

const bushColorTexture = textureLoader.load('./bush/leaves_forest_ground_1k/leaves_forest_ground_diff_1k.webp')
bushColorTexture.colorSpace = THREE.SRGBColorSpace
const bushARMTexture = textureLoader.load('./bush/leaves_forest_ground_1k/leaves_forest_ground_arm_1k.webp')
const bushNormalTexture = textureLoader.load('./bush/leaves_forest_ground_1k/leaves_forest_ground_nor_gl_1k.webp')

bushColorTexture.repeat.set(2, 1)
bushColorTexture.wrapS = THREE.RepeatWrapping
bushColorTexture.wrapT = THREE.RepeatWrapping

bushARMTexture.repeat.set(2, 1)
bushARMTexture.wrapS = THREE.RepeatWrapping
bushARMTexture.wrapT = THREE.RepeatWrapping

bushNormalTexture.repeat.set(2, 1)
bushNormalTexture.wrapS = THREE.RepeatWrapping
bushNormalTexture.wrapT = THREE.RepeatWrapping

//graves
const graveColorTexture = textureLoader.load('./grave/plastered_stone_wall_1k/plastered_stone_wall_diff_1k.webp')
bushColorTexture.colorSpace = THREE.SRGBColorSpace
const graveARMTexture = textureLoader.load('./grave/plastered_stone_wall_1k/plastered_stone_wall_arm_1k.webp')
const graveDispTexture = textureLoader.load('./grave/plastered_stone_wall_1k/plastered_stone_wall_disp_1k.webp')
const graveNormalTexture = textureLoader.load('./grave/plastered_stone_wall_1k/plastered_stone_wall_nor_gl_1k.webp')

graveColorTexture.repeat.set(0.1, 0.1)
graveARMTexture.repeat.set(0.1, 0.1)
graveNormalTexture.repeat.set(0.1, 0.1)

//door
const doorColorTexture = textureLoader.load('./door/color.webp')
doorColorTexture.colorSpace = THREE.SRGBColorSpace
const doorAlphaTexture = textureLoader.load('./door/alpha.webp')
const doorAOTexture = textureLoader.load('./door/ambientOcclusion.webp')
const doorMetalnessTexture = textureLoader.load('./door/metalness.webp')
const doorRoughnessTexture = textureLoader.load('./door/roughness.webp')
const doorHeightTexture = textureLoader.load('./door/height.webp')
const doorNormalTexture = textureLoader.load('./door/normal.webp')


/**
 * House
 */

//Floor
const floor = new THREE.Mesh(
    new THREE.PlaneGeometry(20, 20, 100, 100),
    new THREE.MeshStandardMaterial({
        transparent: true,
        alphaMap: floorAlphaTexture,
        map: floorColorTexture,
        aoMap: floorARMTexture,
        roughnessMap: floorARMTexture,
        metalnessMap: floorARMTexture,
        normalMap: floorNormalTexture,
        displacementMap: floorDispTexture,
        displacementScale: 0.3,
        displacementBias: -0.25,

    })
)
floor.rotation.x = - Math.PI * 0.5

scene.add(floor)

gui.add(floor.material, 'displacementScale').min(0).max(1).step(0.001).name('floor Displacement scale')
gui.add(floor.material, 'displacementBias').min(-1).max(1).step(0.001).name('FloorDisplacementBias')

//


//Group for House
const house = new THREE.Group()
scene.add(house)

//Walls
const walls = new THREE.Mesh(
    new THREE.BoxGeometry(4, 2.5, 4),
    new THREE.MeshStandardMaterial({
        map: wallColorTexture,
        aoMap: wallARMTexture,
        roughnessMap: wallARMTexture,
        metalnessMap: wallARMTexture,
        normalMap: wallNormalTexture,
    })
)
walls.position.y += 2.5 / 2
house.add(walls)

//Roof
const roof = new THREE.Mesh(
    new THREE.ConeGeometry(3.5, 1, 4),
    new THREE.MeshStandardMaterial({
        map: roofColorTexture,
        aoMap: roofARMTexture,
        roughnessMap: roofARMTexture,
        metalnessMap: roofARMTexture,
        normalMap: roofNormalTexture,
    })
)
roof.position.y += 2.5 + 0.5
roof.rotation.y += Math.PI * 0.25
house.add(roof)

//Door
const door = new THREE.Mesh(
    new THREE.PlaneGeometry(2.2, 2.2, 100, 100),
    new THREE.MeshStandardMaterial(
        {
            transparent: true,
            map: doorColorTexture,
            alphaMap: doorAlphaTexture,
            aoMap: doorAOTexture,
            metalnessMap: doorMetalnessTexture,
            roughnessMap: doorRoughnessTexture,
            normalMap: doorNormalTexture,
            displacementMap: doorHeightTexture,
            displacementScale: 0.15,
            displacementBias: -0.04,
        }
    )
)
door.position.z += 2 + 0.01
door.position.y += 1
house.add(door)

//Bushes
const bushGeometry = new THREE.SphereGeometry(1, 16, 16)
const bushMaterial = new THREE.MeshStandardMaterial({
    color: 0x90aa23,
    map: bushColorTexture,
    aoMap: bushARMTexture,
    roughnessMap: bushARMTexture,
    metalnessMap: bushARMTexture,
    normalMap: bushNormalTexture,

})

const bushes = []

for (let i = 0; i < 4; i++) {
    const bush = new THREE.Mesh(bushGeometry, bushMaterial)
    bush.scale.setScalar(0.25 * i + 0.2)
    bushes.push(bush)
    house.add(bush)
}

bushes[0].position.set(0.8, 0.1, 2.2)
bushes[0].rotation.x = -0.75
bushes[1].position.set(1.4, 0.1, 2.1)
bushes[1].rotation.x = -0.75
bushes[2].position.set(-1.4, 0.1, 2.1)
bushes[2].rotation.x = -0.75
bushes[3].position.set(-2.2, 0.2, 2.2)
bushes[3].rotation.x = -1

//Graves
const graveGeomentry = new THREE.BoxGeometry(0.6, 0.8, 0.2)
const graveMaterial = new THREE.MeshStandardMaterial({
    map: graveColorTexture,
    aoMap: graveARMTexture,
    roughnessMap: graveARMTexture,
    metalnessMap: graveARMTexture,
    normalMap: graveNormalTexture,
    displacementMap: graveDispTexture,
    displacementScale: 0.1,
    displacementBias: -0.05,
})

const graves = new THREE.Group()
scene.add(graves)

for (let i = 0; i < 20; i++) {

    //random positioning:
    const randomAngle = Math.random() * Math.PI * 2
    const radius = Math.random() * 4 + 3.7

    const grave = new THREE.Mesh(graveGeomentry, graveMaterial)
    grave.position.set(
        Math.cos(randomAngle) * radius,
        Math.random() * 0.4,
        Math.sin(randomAngle) * radius
    )
    grave.rotation.x = (Math.random() - 0.5) * 0.4
    grave.rotation.y = (Math.random() - 0.5) * 0.2
    grave.rotation.z = (Math.random() - 0.5) * 0.3
    graves.add(grave)
}



/**
 * Lights
 */
// Ambient light
const ambientLight = new THREE.AmbientLight('#86cdff', 0.5)
scene.add(ambientLight)

// Directional light
const directionalLight = new THREE.DirectionalLight('#86cdff', 1.5)
directionalLight.position.set(3, 2, -8)
scene.add(directionalLight)

//pointlihgt for the door
const doorLight = new THREE.PointLight('#ff7d46', 2, 5)
doorLight.position.set(0, 2.35, 2.4)
gui.add(doorLight.position, 'x').min(-3).max(3).step(0.01).name('doorLightX')
gui.add(doorLight.position, 'y').min(-3).max(3).step(0.01).name('doorLightY')
gui.add(doorLight.position, 'z').min(-3).max(3).step(0.01).name('doorLightZ')
house.add(doorLight)

//Ghpsts lights:
const ghost1 = new THREE.PointLight('#4000ff', 2, 3)
const ghost2 = new THREE.PointLight('#ff0088', 2, 3)
const ghost3 = new THREE.PointLight('#ff0000', 2, 3)

scene.add(ghost1, ghost2, ghost3)



/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () => {
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.x = 4
camera.position.y = 2
camera.position.z = 5
scene.add(camera)

// Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))


/**
 * Shadows
 */
renderer.shadowMap.enabled = true
renderer.shadowMap.type = THREE.PCFSoftShadowMap

//Cast and receive here:
directionalLight.castShadow = true
ghost1.castShadow = true
ghost2.castShadow = true
ghost3.castShadow = true

walls.castShadow = true
walls.receiveShadow = true

roof.castShadow = true

floor.receiveShadow = true

graves.children.forEach(grave => {
    grave.castShadow = true
    grave.receiveShadow = true
})

//Mapping shadows
directionalLight.shadow.mapSize.width = 256
directionalLight.shadow.mapSize.height = 256
directionalLight.shadow.camera.top = 8
directionalLight.shadow.camera.right = 8
directionalLight.shadow.camera.bottom = -8
directionalLight.shadow.camera.left = -8
directionalLight.shadow.camera.near = 1
directionalLight.shadow.camera.far = 20

ghost1.shadow.mapSize.width = 256
ghost1.shadow.mapSize.height = 256
ghost1.shadow.camera.far = 10

ghost2.shadow.mapSize.width = 256
ghost2.shadow.mapSize.height = 256
ghost2.shadow.camera.far = 10

ghost3.shadow.mapSize.width = 256
ghost3.shadow.mapSize.height = 256
ghost3.shadow.camera.far = 10

/**
 * Sky
 */
const sky = new Sky()
sky.scale.setScalar(200)
scene.add(sky)

sky.material.uniforms['turbidity'].value = 10
sky.material.uniforms['rayleigh'].value = 3
sky.material.uniforms['mieCoefficient'].value = 0.05
sky.material.uniforms['mieDirectionalG'].value = 0.958
sky.material.uniforms['sunPosition'].value.set(0.3, -0.038, -0.95)

gui.add(sky.material.uniforms['turbidity'], 'value').min(0).max(20).step(0.1).name('Sky Turbidity')
gui.add(sky.material.uniforms['rayleigh'], 'value').min(0).max(4).step(0.001).name('Sky Rayleigh')
gui.add(sky.material.uniforms['mieCoefficient'], 'value').min(0).max(0.1).step(0.0001).name('Sky Mie Coefficient')
gui.add(sky.material.uniforms['mieDirectionalG'], 'value').min(0).max(1).step(0.001).name('Sky Mie Directional G')
gui.add(sky.material.uniforms['sunPosition'].value, 'x').min(-1).max(1).step(0.001).name('Sky Sun Position X')
gui.add(sky.material.uniforms['sunPosition'].value, 'y').min(-1).max(1).step(0.001).name('Sky Sun Position Y')
gui.add(sky.material.uniforms['sunPosition'].value, 'z').min(-1).max(1).step(0.001).name('Sky Sun Position Z')


/**
 * Fog
 */
// scene.fog = new THREE.Fog('#262837', 1, 15)
scene.fog = new THREE.FogExp2('#262837', 0.1)

/**
 * Animate
 */
//timer is better than clock, but you need to import it manually
const timer = new Timer()

const tick = () => {
    // Timer
    timer.update()
    const elapsedTime = timer.getElapsed()

    // Update controls
    controls.update()

    // Update Ghosts
    ghost1.position.x = Math.sin(elapsedTime * 0.3) * 6
    ghost1.position.z = Math.cos(elapsedTime * 0.3) * 6
    ghost1.position.y = Math.sin(elapsedTime * 0.5) * Math.sin(elapsedTime) * Math.sin(elapsedTime * 0.3) + 0.5

    ghost2.position.x = Math.sin(-elapsedTime * 0.2) * 4
    ghost2.position.z = Math.cos(-elapsedTime * 0.2) * 4
    // ghost2.position.y = Math.sin(elapsedTime * 3) + Math.sin(elapsedTime * 2.5)

    ghost3.position.x = Math.sin(elapsedTime * 1.2) * 4
    ghost3.position.z = Math.cos(elapsedTime) * 4
    ghost3.position.y = Math.sin(elapsedTime * 0.25) * Math.sin(elapsedTime * 0.4) * Math.sin(elapsedTime * 3.2)

    //flickerting door light:
    doorLight.intensity = Math.sin(elapsedTime * 10) * Math.sin(elapsedTime) * Math.sin(elapsedTime * 2.3) * 2 + 2.5

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()