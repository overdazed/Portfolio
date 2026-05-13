//rafce
import { Html, useProgress } from '@react-three/drei'

const CanvasLoader = () => {
    // gives number from 0 to 100 indicating if the model is loaded or not
    const { progress } = useProgress()

    return (
        <Html
            as="div"
            center
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
            }}>

            <span className="canvas-loader" />

            <p
                style={{
                    fontSize: 14,
                    color: '#f1f1f1',
                    fontWeight: 800,
                    marginTop: 40,
                }}>
                {/* if progress not equal to 0, then render a dynamic template, fix it to 2 digits, from 1 to 100% */}
                {progress !== 0 ? `${progress.toFixed(2)}%` : 'Loading...'}
            </p>

        </Html>
    )
}
export default CanvasLoader
