import Button from '../atoms/Button';

const UserActions = () => {
  return (
    <div className="d-flex gap-2">
      <Button text="Iniciar Sesión" variant="outline-primary" />
      <Button text="Crear Cuenta" variant="primary" />
    </div>
  );
};

export default UserActions;

