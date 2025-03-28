import Lottie from "lottie-react";
import cubeAnimation from "../../assets/animations/cube.json";

interface Layer {
    shapes?: Shape[];
}

interface Shape {
    it?: Item[];
}

interface Item {
    ty: string;
    c?: {
        a: number;
        k: number[];
    };
}

const Cube2 = () => {
    // Create a deep copy of the animation data
    const tealCubeAnimation = JSON.parse(JSON.stringify(cubeAnimation));

    // Update the color values in the animation data
    tealCubeAnimation.layers.forEach((layer: Layer) => {
        if (layer.shapes) {
            layer.shapes.forEach((shape: Shape) => {
                if (shape.it) {
                    shape.it.forEach((item: Item) => {
                        if (item.ty === "st" || item.ty === "fl") {
                            item.c = { a: 0, k: [0.337, 0.776, 0.745, 1] };
                        }
                    });
                }
            });
        }
    });

    return (
        <Lottie
            animationData={tealCubeAnimation}
            loop={true}
            autoplay={true}
            style={{ width: 300, height: 300 }}
            rendererSettings={{
                preserveAspectRatio: "xMidYMid slice",
            }}
        />
    );
};

export default Cube2; 