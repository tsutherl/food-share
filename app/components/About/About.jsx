export default class Home extends Component {
  render() {
    let aboutMessage = 'Up to 40% of food in the U.S. is completely wasted, at a cost of $165 billion each year. To help resolve the issue restaurants, hotels, and grocery stores need an easy method for seamlessly transfering food to hunger charities.'
    }
    return (
     <div className="home-cover">
      <a name="about"></a>
        <div className="intro-header">
            <div className="container">
                <div className="row text-center vertical-center">
                    <div className="col-lg-12">
                        <div className="intro-message">
                            <h1 className='center-block'>FoodShare</h1>
                            <h3>Eliminating Food Waste</h3>
                            <hr className="intro-divider"/>
                            <ul className="list-inline intro-social-buttons">
                                <span>{aboutMessage}</span>
                            </ul>
                        </div>
                    </div>
                </div>


            </div>
        </div>
      </div>
    )
  }
}


