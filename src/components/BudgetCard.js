import {Card} from 'react-bootstrap';
import { currencyFormatter } from '../utils';

function BudgetCard({name, amount, max}) {
  return (
    <Card>
        <Card.Body>
            <Card.Title className="d-flex justify-content-between align-items-baseline fw-normal mb-2">
                <div className="me-2">
                    {name}
                </div>
                <div className="d-flex align-items-baseline">
                    {currencyFormatter.format(amount)} / 
                    <span className="ms-1">
                        {currencyFormatter.format(max)}
                    </span>
                </div>
            </Card.Title>
        </Card.Body>
    </Card>
  )
}

export default BudgetCard