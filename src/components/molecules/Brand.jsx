import Image from '../atoms/Image';

const Brand = () => {
  return (
    <div className="navbar-brand d-flex align-items-center">
      <Image
        src="https://avatars.githubusercontent.com/u/138630362"
        alt="Logo"
        size={45}
      />
      <span className="ms-2 fw-bold text-dark fs-4">LEVEL-UP GAMER</span>
    </div>
  );
};

export default Brand;
