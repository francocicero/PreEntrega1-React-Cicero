import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';


const CardWidget = () => {
return (
    <Button variant="primary">
    Carrito <Badge bg="secondary">5</Badge>
    </Button>
);
}

export default CardWidget;