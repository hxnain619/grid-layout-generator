import Lottie from 'lottie-react';
import CubeAnimation from '../../assets/animations/cube.json';

const Cube = () => {
    return (
        <Lottie
            animationData={CubeAnimation}
            loop={true}
            autoplay={true}
            style={{ width: 500, height: 500 }}
        />
    );
};

export default Cube;