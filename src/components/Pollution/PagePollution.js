import React, {Component} from 'react';
import ConseilsPollution from './ConseilsPollution'
import HistoriquePollution from './HistoriquePollution'
import PagePollutionToday from './PagePollutionToday'
import './pagePollution.css'
import BlocPolluants from './BlocPolluants';

class PagePollution extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <div >
                
                {this.props.loading ? "En cours de chargement" :
                <PagePollutionToday city={this.props.city} indice={this.props.indice} imgBackground={this.props.imgBackground} />
                }
                </div>
                <ConseilsPollution indice={this.props.indice}/>
                <BlocPolluants/>
                <HistoriquePollution/>
            </div>
        );
    }
}
 
export default PagePollution;