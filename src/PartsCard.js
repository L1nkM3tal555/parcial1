import { FormattedMessage } from "react-intl";
import { Button } from "react-bootstrap";

function PartCard(props) {
    

  return (
    <div className="part-card">
      <img src={props.part.image} alt="part" className="part-card-image" />
      <div className="part-card-info">
        
        <div className="part-card-values">
          <h4>{props.part.partName}</h4>
          <h5>
            <FormattedMessage
              id="parts.price"
              values={{ value: props.part.price }}
            />
            -
            <FormattedMessage
              id="parts.carYear"
              values={{ value: props.part.carYear }}
            />
          </h5>
          <h5>
            <FormattedMessage
              id="parts.carMaker"
              values={{ value: props.part.carMaker }}
            />
          </h5>
          
          <h5>
            <FormattedMessage
              id="parts.carModel"
              values={{ value: props.part.carModel}}
            />
          </h5>     
        </div>
      </div>
    </div>
  );
}
export default PartCard;
