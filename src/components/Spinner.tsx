import { FidgetSpinner } from 'react-loader-spinner'

export default function Spinner() {
    return (
        <div className="flex justify-center items-center mt-16">
            <FidgetSpinner
                visible={true}
                height="80"
                width="80"
                ariaLabel="dna-loading"
                wrapperStyle={{}}
                wrapperClass="dna-wrapper"
                ballColors={['#ff0000', '#00ff00', '#0000ff']}
                backgroundColor="#F4442E"
            />
        </div>
    )
}
