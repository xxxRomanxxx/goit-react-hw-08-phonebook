import { Dna } from 'react-loader-spinner';
const Loader = () => {
  return (
    <Dna
      visible={true}
      height="80"
      width="100%"
      ariaLabel="dna-loading"
      wrapperStyle={{}}
      wrapperClass="dna-wrapper"
    />
  );
};

export default Loader;