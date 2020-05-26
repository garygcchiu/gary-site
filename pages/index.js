import ReactGA from 'react-ga';

export default function Index() {
    ReactGA.pageview('/');

    return (
        <div className="container">
            <main>
                <h1 className="title">
                    Gary Chiu
                </h1>

                <p className="description">
                    hehe xd
                </p>
            </main>
        </div>
    )
}
