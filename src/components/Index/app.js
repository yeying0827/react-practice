require('normalize.css/normalize.css');
require('styles/App.scss');

require('normalize.css/normalize.css');
require('styles/App.scss');
require('styles/common/footer.scss');

import React from 'react';
import {Link} from 'react-router';

class App extends React.Component {
    render () {
        return (
            <section>
                <div>{this.props.children}<Link to="/goods">Goods</Link></div>
                <nav className="app-fixed-bootom">
                    <ul>
                        <li className="text-center">
                            <Link to="/about">About</Link>
                        </li>
                        <li className="text-center">
                            <Link to="/concat">Concat</Link>
                        </li>
                        <li className="text-center">
                            <Link to="/list/001">List 001</Link>
                        </li>
                    </ul>
                </nav>
            </section>
        )
    }
}

export default App;