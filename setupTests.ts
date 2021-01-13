import enzyme from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';
// TODO: Enzyme is not yet compatible with React v.17
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

enzyme.configure({ adapter: new Adapter() });
