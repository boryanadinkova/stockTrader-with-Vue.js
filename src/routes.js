import Home from './componens/Home';
import Stocks from './componens/stocks/Stocks';
import Portfolio from './componens/portfolio/Portfolio';


export const routes = [
    { path: '/', component: Home },
    { path: '/stocks', component: Stocks },
    { path: '/portfolio', component: Portfolio }
]